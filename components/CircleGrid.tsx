import Image from "next/image";
import { circles } from "@/data/circles";
import { publicAsset } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function CircleGrid() {
  return (
    <Section id="circles" className="relative bg-[#eaf5ff]">
      <Image className="object-cover object-center" src={publicAsset("/background/2.png")} alt="" fill sizes="100vw" />
      <div className="absolute inset-0 bg-[#eaf5ff]/70" aria-hidden="true" />
      <Container className="relative z-10">
        <SectionHeading title="参加団体一覧" description="2026年度の参加団体は今後公開予定です。現在は2025年度の参加団体を参考表示しています。" />
        <div className="grid grid-cols-4 gap-3.5 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2">
          {circles.map((circle, index) => (
            <a className="group reveal relative flex min-h-87.5 flex-col border border-ink/20 bg-white p-4.5 shadow-[0_10px_30px_rgba(41,65,244,.05)] transition hover:-translate-y-1 hover:border-blue hover:shadow-[0_18px_38px_rgba(41,65,244,.12)] max-md:min-h-71.5 max-md:p-3" href={circle.url} target={circle.url ? "_blank" : undefined} rel={circle.url ? "noreferrer" : undefined} key={circle.name}>
              <span className="font-mono text-[10px] font-extrabold text-blue">{String(index + 1).padStart(2, "0")}</span>
              <div className="relative my-6.5 aspect-square w-full max-w-45 border border-ink/20 bg-white max-md:my-6 max-md:max-w-32.5"><Image className="object-contain p-3.5" src={publicAsset(circle.icon)} alt={`${circle.name}の団体アイコン`} fill sizes="180px" /></div>
              <div><h3 className="mb-1.5 text-[17px] leading-snug font-bold max-md:text-sm">{circle.name}</h3><p className="m-0 text-[11px] text-muted">{circle.university}</p></div>
              <span className="mt-auto w-max bg-paper px-2 py-1.5 text-[9px] font-bold text-muted">{circle.referenceYear}年度</span>
              {circle.url ? <span className="absolute top-4 right-4 text-blue" aria-hidden="true">↗</span> : null}
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
