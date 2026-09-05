import { timetable } from "@/data/timetable";
import { SectionHeading } from "./SectionHeading";
import { Container, Section } from "./ui/Layout";

export function Timetable() {
  return (
    <Section id="timetable" className="bg-[#eef7ff]">
      <Container>
        <SectionHeading title="当日の予定" description="日時・プログラムは調整中です。確定後に公開します。" />
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {timetable.map((day) => (
            <article className="reveal border border-ink/20 bg-white" key={day.label}>
              <header className="grid min-h-26 grid-cols-[auto_1fr_auto] items-center gap-5.5 border-b border-ink/20 p-5.5 max-md:gap-3 max-md:px-4"><span className="text-[25px] font-black text-blue">{day.label}</span><div><strong className="block text-xs">{day.date}</strong><small className="mt-1.5 block text-[9px] text-muted">{day.venue}</small></div><b className="border border-blue px-2 py-1.5 text-[9px] text-blue">調整中</b></header>
              <ol className="m-0 list-none px-5.5 pb-4 max-md:px-4">
                {day.slots.map((slot, index) => (
                  <li className={`grid min-h-17 grid-cols-[58px_12px_1fr] items-center gap-3.5 border-b border-ink/20 last:border-0 ${slot.kind === "break" ? "opacity-55" : ""}`} key={`${slot.time}-${index}`}><time className="font-mono text-[10px] font-bold text-blue">{slot.time}</time><i className="h-2 w-2 rounded-full border-2 border-blue" /><span className="text-xs">{slot.title}</span></li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
