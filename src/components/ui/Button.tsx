import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark shadow-md shadow-terracotta/20",
  secondary: "bg-sage text-white hover:bg-sage/90 shadow-md shadow-sage/20",
  outline:
    "border-2 border-cocoa/20 text-cocoa hover:border-terracotta hover:text-terracotta bg-transparent",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1da851] shadow-md shadow-[#25D366]/25",
};

export function Button({
  href,
  onClick,
  type = "button",
  disabled,
  variant = "primary",
  children,
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100`}
    >
      {children}
    </button>
  );
}
