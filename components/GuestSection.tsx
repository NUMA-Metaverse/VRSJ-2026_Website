import Image from "next/image";
import { guests } from "@/data/guests";
import { publicAsset } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function GuestSection() {
  return (
    <Section id="guests" className="bg-white">
      <Container>
        <SectionHeading title="ゲスト紹介" description="2026年度のゲストは今後公開予定です。以下は2025年度の登壇者です。" />
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
          {guests.map((guest) => (
            <article className="reveal relative overflow-hidden border border-ink/20 bg-white max-lg:grid max-lg:grid-cols-[280px_1fr] max-md:block" key={guest.name}>
              <div className="relative aspect-[.95] overflow-hidden bg-white max-lg:row-span-2 max-lg:min-h-85 max-lg:aspect-auto max-md:min-h-0 max-md:aspect-square"><Image className="object-cover object-top" src={publicAsset(guest.image)} alt={`${guest.name}さんの写真`} fill sizes="(max-width: 700px) 100vw, 280px" /></div>
              <div className="p-6"><span className="text-[9px] font-extrabold text-blue">2025年度登壇</span><h3 className="mt-4 mb-2 text-[28px] font-bold max-md:text-2xl">{guest.name}</h3><h4 className="min-h-10.5 text-xs leading-5 font-bold text-[#35416f]">{guest.affiliation}</h4><p className="mt-5.5 border-t border-ink/20 pt-4.5 text-[11px] leading-5 text-muted">{guest.profile}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
