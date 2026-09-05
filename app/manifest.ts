import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "VRサークル大会2026",
    description: SITE_DESCRIPTION,
    start_url: `${SITE_URL}/`,
    display: "standalone",
    background_color: "#f7f5ec",
    theme_color: "#e73d35",
    lang: "ja",
    icons: [
      {
        src: siteUrl("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
