import Image from "next/image";
import { works } from "@/data/works";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function WorkGrid() {
  return (
    <Section id="works" className="bg-paper">
      <Container>
        <SectionHeading title="学生が制作したVR/XR作品" description="掲載内容は2025年度の作品です。2026年度の作品情報は今後公開します。" />
        <div className="grid grid-cols-2 gap-4.5 max-md:grid-cols-1">
          {works.map((work, index) => (
            <article className="group reveal grid min-h-82.5 grid-cols-[1.2fr_.8fr] overflow-hidden border border-ink/20 bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(41,65,244,.1)] max-lg:grid-cols-1 max-md:min-h-62.5 max-md:grid-cols-[1.2fr_.8fr] max-[430px]:grid-cols-1" key={work.title}>
              <div className="relative min-h-82.5 overflow-hidden bg-[#dfefff] max-md:min-h-62.5 max-[430px]:min-h-58.5">
                <Image className="object-cover transition duration-500 group-hover:scale-[1.035]" src={work.image} alt={`${work.title}の作品イメージ`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span className="absolute bottom-3.5 left-3.5 bg-ink/90 px-2 py-1.5 text-[9px] text-white">2025年度作品</span><b className="absolute top-3.5 right-3.5 bg-ink/90 px-2 py-1.5 text-[9px] text-white">{String(index + 1).padStart(2, "0")}</b>
              </div>
              <div className="flex min-h-55 flex-col p-5 max-md:min-h-62.5 max-md:p-4 max-[430px]:min-h-45">
                <p className="m-0 text-[10px] font-extrabold text-blue">{work.circle}</p><h3 className="mt-auto mb-3 text-2xl leading-tight font-bold max-md:text-lg">{work.title}</h3><span className="text-[10px] font-extrabold text-blue">作者：{work.creator}</span>
                <small className="mt-6 border-t border-ink/20 pt-4.5 text-[10px] leading-4 text-muted max-md:hidden">{work.description}</small>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
