import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "全国学生VRサークル活動報告大会 2026",
  description: "全国学生VRサークル活動報告大会2026の参加・応募案内。サークル活動報告、VR/XR制作発表、参加者同士の交流を行います。主催：全日本大学メタバース連盟（NUMA）。",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "全国学生VRサークル活動報告大会 2026",
    description: "全国学生VRサークル活動報告大会2026の参加・応募案内。主催：全日本大学メタバース連盟（NUMA）。",
    type: "website",
    locale: "ja_JP",
    images: [{
      url: "/ogp.png",
      width: 7680,
      height: 4320,
      alt: "全国学生VRサークル活動報告大会 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "全国学生VRサークル活動報告大会 2026",
    description: "全国学生VRサークル活動報告大会2026の参加・応募案内。主催：全日本大学メタバース連盟（NUMA）。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

