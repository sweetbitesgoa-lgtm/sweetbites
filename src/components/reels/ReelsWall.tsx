"use client";

import Link from "next/link";
import { useRef } from "react";
import { getAllReels } from "@/lib/catalog";

export function ReelsWall() {
  const reels = getAllReels();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {reels.map((reel) => (
        <ReelTile key={reel.id} reel={reel} />
      ))}
    </div>
  );
}

function ReelTile({
  reel,
}: {
  reel: ReturnType<typeof getAllReels>[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const href = reel.creationSlug
    ? `/creations/${reel.creationSlug}`
    : "/creations";

  return (
    <Link
      href={href}
      className="group relative aspect-[9/16] overflow-hidden rounded-lg bg-cocoa ring-1 ring-line transition-[ring-color,transform] duration-300 hover:ring-terracotta/30 hover:shadow-lg"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={reel.src}
        muted
        loop
        playsInline
        preload="metadata"
        poster={reel.cover}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/10 to-transparent opacity-75 transition-opacity group-hover:opacity-95" />
      <p className="absolute inset-x-0 bottom-0 p-3 text-[11px] font-medium leading-snug text-cream/95 line-clamp-2">
        {reel.title}
      </p>
    </Link>
  );
}
