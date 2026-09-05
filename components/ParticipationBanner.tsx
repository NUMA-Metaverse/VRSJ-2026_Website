import { AnimatedLink } from "./ui/AnimatedLink";
import { MotionReveal } from "./ui/MotionReveal";

export function ParticipationBanner() {
  return (
    <div className="participation-banner">
      <MotionReveal className="participation-entrance">
        <AnimatedLink className="participation-link" href="#entry">
          <span className="participation-copy">
            <strong>参加・応募について</strong>
            <span>サークル活動報告・VR/XR制作発表</span>
          </span>
          <span className="participation-arrow" aria-hidden="true">↓</span>
        </AnimatedLink>
      </MotionReveal>
      <p>募集詳細は近日公開</p>
    </div>
  );
}
