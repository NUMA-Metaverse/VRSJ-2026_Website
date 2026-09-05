type SectionHeadingProps = {
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className={`reveal mb-14 max-md:mb-10 ${inverted ? "text-white" : "text-ink"}`}>
      <h2 className="m-0 max-w-4xl text-[clamp(38px,5vw,68px)] leading-[1.1] font-black tracking-[-.055em] max-md:text-[38px]">{title}</h2>
      {description ? <p className={`mt-4.5 max-w-3xl text-sm leading-[1.9] ${inverted ? "text-[#dce2ff]" : "text-muted"}`}>{description}</p> : null}
    </div>
  );
}
