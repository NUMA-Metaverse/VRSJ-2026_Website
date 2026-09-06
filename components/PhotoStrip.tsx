import Image from "next/image";
import type { ActivityPhoto } from "@/data/activityPhotos";
import { publicAsset } from "@/lib/site";

export function PhotoStrip({ photos, label, direction = "left" }: {
  photos: readonly ActivityPhoto[];
  label: string;
  direction?: "left" | "right";
}) {
  return (
    <div className="photo-strip" aria-label={label}>
      <div className="photo-viewport" tabIndex={0} role="region" aria-label={`${label}。横に流れる活動写真です。`}>
        <div className="photo-track" data-direction={direction} style={{ animationDuration: `${photos.length * 8}s` }}>
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
    </div>
  );
}
