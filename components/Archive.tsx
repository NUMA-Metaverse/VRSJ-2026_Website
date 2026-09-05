import { archives } from "@/data/links";
import { MotionReveal } from "./ui/MotionReveal";

export function Archive() {
  return (
    <section className="archive section-space" id="archive" aria-labelledby="archive-title">
      <MotionReveal className="page-container archive-layout">
        <div><h2 id="archive-title">過去の開催</h2><p className="archive-description">各年度の大会サイトをご覧いただけます。</p></div>
        <div className="archive-links">{archives.map((archive) => <a href={archive.href} target="_blank" rel="noreferrer" key={archive.label}><strong>{archive.label}</strong><span>{archive.note}</span><span className="archive-arrow" aria-label="過去サイトを新しいタブで開く">↗</span></a>)}</div>
      </MotionReveal>
    </section>
  );
}
