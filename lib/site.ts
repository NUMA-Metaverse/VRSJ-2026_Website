const fallbackSiteUrl = "https://numa-metaverse.github.io/vr-circlemeeting2026";

export const SITE_NAME = "全国学生VRサークル活動報告大会 2026";
export const SITE_DESCRIPTION =
  "全国学生VRサークル活動報告大会＆XR制作物プレゼン2026の登壇エントリー案内。2026年10月10日・11日オンライン開催。主催：全日本大学メタバース連盟（NUMA）。";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl
).replace(/\/+$/, "");

export function siteUrl(path = "") {
  const normalizedPath = path && !path.startsWith("/") ? `/${path}` : path;
  return `${SITE_URL}${normalizedPath}`;
}

export function publicAsset(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${normalizedPath}`;
}
