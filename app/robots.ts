import type { MetadataRoute } from "next";
import { SITE_URL, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "Slurp",
          "Baiduspider",
          "YandexBot",
          "Applebot",
          "facebookexternalhit",
          "Twitterbot",
          "Linespider",
          "NaverBot",
          "Yeti",
        ],
        allow: "/",
      },
    ],
    sitemap: siteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
