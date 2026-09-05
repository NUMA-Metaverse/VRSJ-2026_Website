import Image from "next/image";
import { publicAsset } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function Organizer() {
  return (
    <Section id="organizer" className="bg-white">
      <Container>
        <SectionHeading title="運営団体・協力団体" description="2026年度の主催・共催・協賛情報は確定後に更新します。" />
        <div className="reveal grid grid-cols-3 gap-3 max-md:grid-cols-2 max-md:gap-2 max-[430px]:grid-cols-1">
          <article className="flex min-h-71 flex-col items-center justify-center border border-ink/20 bg-white p-7 text-center max-md:min-h-58.5"><span className="mb-auto self-start text-[9px] font-bold text-muted">2025年度運営</span><div className="relative aspect-square w-29 bg-white"><Image className="object-contain" src={publicAsset("/event-2025/circles/ut_virtual.png")} alt="UT-virtual" fill sizes="120px" /></div><h3 className="mt-4.5 text-lg font-bold">UT-virtual</h3></article>
          <article className="flex min-h-71 flex-col items-center justify-center border border-ink/20 bg-white p-7 text-center max-md:min-h-58.5"><span className="mb-auto self-start text-[9px] font-bold text-muted">2025年度運営</span><div className="relative aspect-square w-29 bg-white"><Image className="object-contain" src={publicAsset("/event-2025/sponsors/numa.jpg")} alt="NUMA" fill sizes="120px" /></div><h3 className="mt-4.5 text-lg font-bold">NUMA</h3></article>
          <article className="flex min-h-71 flex-col items-start justify-between border border-ink/20 bg-[#eaf5ff] p-7 text-left max-md:col-span-2 max-md:min-h-52.5 max-[430px]:col-span-1"><span className="text-[9px] font-bold text-muted">2026年度</span><strong className="text-2xl leading-snug">共催・協賛・協力団体</strong><p className="m-0 text-[11px] text-muted">情報が決まり次第掲載します</p></article>
        </div>
      </Container>
    </Section>
  );
}
