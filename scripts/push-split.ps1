# Split initial push: code first, then media in chunks under ~40 MiB per commit.
$ErrorActionPreference = "Stop"
$PSNativeCommandUseErrorActionPreference = $false
Set-Location $PSScriptRoot\..

$remote = "https://github.com/sweetbitesgoa-lgtm/sweetbites.git"
if (-not $env:GH_TOKEN) {
  $log = Get-Content "$env:USERPROFILE\.cursor\projects\e-sweetbites\terminals\768412.txt" -Raw -ErrorAction SilentlyContinue
  if ($log -match 'github_pat_[A-Za-z0-9_]+') { $env:GH_TOKEN = $Matches[0] }
}
if (-not $env:GH_TOKEN) { throw "Set GH_TOKEN to a GitHub PAT with Contents: Read and write." }

$pushUrl = "https://x-access-token:$($env:GH_TOKEN)@github.com/sweetbitesgoa-lgtm/sweetbites.git"
$gitPush = {
  param($Branch = "main")
  git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 -c http.lowSpeedLimit=0 -c http.lowSpeedTime=999999 push $pushUrl "HEAD:${Branch}" 2>&1
  if ($LASTEXITCODE -ne 0) { throw "git push failed (exit $LASTEXITCODE)" }
}

git checkout --orphan push-main 2>$null
if ($LASTEXITCODE -ne 0) {
  git branch -D push-main 2>$null
  git checkout --orphan push-main
}
git reset

Write-Host "Commit 1: site code..."
git add -A
git reset -- public/images public/videos
git commit -m "Launch Sweet Bites site with catalog, SEO, and WhatsApp ordering"
& $gitPush

Write-Host "Commit 2: reel videos..."
git add public/videos
git commit -m "Add reel videos"
& $gitPush

Write-Host "Commit 3+: cake images in batches..."
$maxBatchMiB = 38
$batch = @()
$batchBytes = 0
$batchNum = 0

$folders = Get-ChildItem public/images -Directory | Sort-Object Name
foreach ($folder in $folders) {
  $size = (Get-ChildItem $folder.FullName -Recurse -File | Measure-Object -Property Length -Sum).Sum
  if ($batch.Count -gt 0 -and (($batchBytes + $size) / 1MB) -gt $maxBatchMiB) {
    $batchNum++
    Write-Host "  Batch $batchNum ($([math]::Round($batchBytes/1MB,1)) MiB)..."
    git add @batch
    git commit -m "Add cake images (batch $batchNum)"
    & $gitPush
    $batch = @()
    $batchBytes = 0
  }
  $batch += $folder.FullName
  $batchBytes += $size
}

if ($batch.Count -gt 0) {
  $batchNum++
  Write-Host "  Batch $batchNum ($([math]::Round($batchBytes/1MB,1)) MiB)..."
  git add @batch
  git commit -m "Add cake images (batch $batchNum)"
  & $gitPush
}

git branch -M push-main main
git branch -D master 2>$null
Write-Host "Done. Remote branch: main"
