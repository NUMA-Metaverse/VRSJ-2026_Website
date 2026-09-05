import { recruitment } from "@/data/recruitment";
import { MotionReveal } from "./ui/MotionReveal";

export function EntryCTA() {
  return (
    <section className="entry section-space" id="entry" aria-labelledby="entry-title">
      <div className="page-container">
        <MotionReveal className="entry-heading"><h2 id="entry-title">参加・応募について</h2><p>活動報告・制作発表の募集情報をご案内します。<br /><span className="entry-status">募集詳細は近日公開</span></p></MotionReveal>
        <div className="entry-grid">
          {recruitment.map((item, index) => <MotionReveal key={item.id} delay={index * 0.12}><article className={`entry-card ${item.id}`} id={item.id}>
            <div className="entry-card-top"><b>{item.number}</b></div>
            <h3>{item.title}</h3><p className="entry-description">{item.description}</p>
            <ul className="entry-tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="entry-card-bottom">{item.href ? <a className="action-link" href={item.href} target="_blank" rel="noreferrer">応募フォームへ <span aria-hidden="true">↗</span></a> : <p className="coming-soon">募集詳細は近日公開</p>}<p className="entry-detail">{item.note}</p></div>
          </article></MotionReveal>)}
        </div>
        <div className="audience-note"><div><h3>一般参加・視聴について</h3><p>参加方法は、詳細が決まり次第このサイトでご案内します。</p></div></div>
      </div>
    </section>
  );
}
