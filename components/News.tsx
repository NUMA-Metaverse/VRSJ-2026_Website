import { news } from "@/data/news";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function News() {
  return (
    <Section id="news" compact className="bg-paper">
      <Container>
        <SectionHeading title="最新情報" />
        <div className="reveal border-t-2 border-ink">
          {news.map((item) => (
            <a href={item.href} className="grid min-h-19 grid-cols-[110px_100px_1fr_auto] items-center gap-4.5 border-b border-ink/20 transition hover:px-3 hover:text-blue max-md:min-h-22 max-md:grid-cols-[74px_1fr_auto] max-md:gap-2.5" key={`${item.date}-${item.title}`}>
              <time className="font-mono text-[10px] font-bold text-muted">{item.date}</time>
              <span className="w-max border border-ink/35 px-2 py-1.5 text-[9px] font-extrabold text-blue max-md:hidden">{item.category}</span>
              <strong className="text-[13px] font-bold max-md:text-xs">{item.title}</strong><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
