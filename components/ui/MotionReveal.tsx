"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  effect?: "rise" | "photo" | "hero";
};

export function MotionReveal({ children, className, delay = 0, effect = "rise" }: MotionRevealProps) {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion !== false) return;

    // Keep server-rendered content visible; animate only after hydration and entry.
    const element = scope.current;
    const controls = animate(element, {
      opacity: [effect === "hero" ? 0.7 : 0.4, 1],
      y: [effect === "hero" ? 0 : effect === "photo" ? 36 : 22, 0],
      scale: [effect === "hero" ? 0.985 : 1, 1],
    }, {
      duration: effect === "hero" ? 0.85 : 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
      // Also restore the resting state when reduced motion is enabled mid-animation.
      animate(element, { opacity: 1, y: 0, scale: 1 }, { duration: 0 });
    };
  }, [animate, delay, effect, inView, reducedMotion, scope]);

  return <div ref={scope} className={className} data-motion-reveal={effect}>{children}</div>;
}
