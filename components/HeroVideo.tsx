"use client";

import { useEffect, useRef, useState } from "react";
import { publicAsset } from "@/lib/site";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <div className="relative aspect-video min-h-70 overflow-hidden bg-ink max-lg:min-h-0">
      <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="大会紹介映像">
        <source src={publicAsset("/video/Demo.mp4")} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-ink/75 to-transparent p-4 text-white">
        <span className="text-xs font-bold">大会紹介映像</span>
      </div>
      <button type="button" onClick={togglePlayback} className="absolute right-4 bottom-4 grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-ink/35 text-[11px] text-white backdrop-blur-sm transition hover:bg-ink" aria-label={playing ? "動画を一時停止" : "動画を再生"}>
        {playing ? "Ⅱ" : "▶"}
      </button>
    </div>
  );
}
