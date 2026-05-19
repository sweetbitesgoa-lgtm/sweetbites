"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  {
    id: "mango",
    className: "left-[8%] top-[18%] text-4xl sm:text-5xl",
    delay: 0,
    content: "🥭",
  },
  {
    id: "leaf",
    className: "right-[12%] top-[22%] text-3xl sm:text-4xl",
    delay: 0.5,
    content: "🌿",
  },
  {
    id: "sparkle",
    className: "left-[15%] bottom-[28%] text-2xl sm:text-3xl",
    delay: 1,
    content: "✨",
  },
  {
    id: "coconut",
    className: "right-[8%] bottom-[32%] text-3xl sm:text-4xl",
    delay: 1.5,
    content: "🥥",
  },
];

export function FloatingDecor() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <motion.span
          key={item.id}
          className={`absolute opacity-40 ${item.className}`}
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 5 + item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.content}
        </motion.span>
      ))}
    </div>
  );
}
