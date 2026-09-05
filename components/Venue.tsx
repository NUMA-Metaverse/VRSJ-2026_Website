import Image from "next/image";
import { venueLinks } from "@/data/links";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function Venue() {
  return (
    <Section id="venue" className="relative bg-white">
      <Image className="object-cover object-center" src="/background/3.png" alt="" fill sizes="100vw" />
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <Container className="relative z-10">
        <SectionHeading title="開催会場" description="VRデバイスがない方も参加できる配信を予定しています。確定した会場から順次リンクを公開します。" />
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {venueLinks.map((venue, index) => (
            <article className="reveal flex min-h-61 flex-col border border-ink/20 bg-white p-6 max-md:min-h-50" key={venue.label}>
              <span className="font-mono text-[10px] font-extrabold text-blue">0{index + 1}</span><h3 className="mt-15 mb-2.5 text-[25px] font-bold max-md:mt-10">{venue.label}</h3><p className="m-0 text-[11px] text-muted">{venue.note}</p><b className="mt-auto w-max bg-white px-2 py-1.5 text-[9px] text-blue">準備中</b>
            </article>
          ))}
        </div>
        <div className="reveal mt-4.5 grid grid-cols-[180px_1fr] gap-6 border-l-5 border-blue bg-[#eaf5ff] px-6 py-5.5 max-md:grid-cols-1 max-md:gap-2.5"><span className="text-[11px] font-extrabold text-blue">初めて利用する方へ</span><p className="m-0 text-xs leading-5 text-muted">VRChat / clusterのセットアップガイドも、会場発表とあわせて公開予定です。</p></div>
      </Container>
    </Section>
  );
}
