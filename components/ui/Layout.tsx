import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(1180px,calc(100%_-_48px))] max-md:w-[calc(100%_-_28px)] ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
  compact = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  compact?: boolean;
}) {
  return <section id={id} className={`overflow-hidden ${compact ? "py-21 max-md:py-16" : "py-28 max-md:py-20"} ${className}`}>{children}</section>;
}
