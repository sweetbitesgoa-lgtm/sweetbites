import type { Transition, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export function motionProps(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-60px" },
    variants: fadeUp,
    transition: defaultTransition,
  };
}
