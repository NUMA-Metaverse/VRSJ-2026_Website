"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function AnimatedLink({ children, className, href }: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      initial={false}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}
