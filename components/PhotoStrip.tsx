"use client";

import Image from "next/image";
import { useState } from "react";
import type { ActivityPhoto } from "@/data/activityPhotos";
import { publicAsset } from "@/lib/site";

export function PhotoStrip({ photos, label, direction = "left" }: {
  photos: readonly ActivityPhoto[];
  label: string;
  direction?: "left" | "right";
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="photo-strip" aria-label={label}>
      <div className="photo-viewport" tabIndex={0} role="region" aria-label={`${label}。自動スクロールは一時停止ボタンで停止できます。`}>
        <div className="photo-track" data-paused={paused} data-direction={direction} style={{ animationDuration: `${photos.length * 8}s` }}>
          {[false, true].map((duplicate) => (
            <div className="photo-set" aria-hidden={duplicate || undefined} key={String(duplicate)}>
              {photos.map((photo) => (
                <div className="strip-photo" key={photo.file}>
                  <Image
                    src={publicAsset(`/images/${photo.file}.webp`)}
                    alt={duplicate ? "" : photo.alt}
                    fill
                    sizes="(max-width: 900px) 200px, (max-width: 1636px) 22vw, 360px"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="photo-pause"
        aria-label={`${label}の自動スクロールを${paused ? "再開" : "一時停止"}`}
        onClick={() => setPaused(!paused)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
          {paused ? <path d="M5 3 15 9 5 15Z" /> : <path d="M4 3h3v12H4zM11 3h3v12h-3z" />}
        </svg>
      </button>
    </div>
  );
}
