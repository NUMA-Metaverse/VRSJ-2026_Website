import type { ReactNode } from "react";

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const colors = variant === "primary"
    ? "border-blue bg-blue text-white"
    : "border-ink bg-white text-ink hover:border-blue hover:text-blue";

  return (
    <a href={href} className={`inline-flex min-h-12.5 items-center justify-between gap-8 border-2 px-5 text-xs font-extrabold transition hover:-translate-y-0.5 max-md:min-h-12 max-md:gap-5 max-md:px-4 max-md:text-[11px] ${colors}`}>
      {children}
    </a>
  );
}
