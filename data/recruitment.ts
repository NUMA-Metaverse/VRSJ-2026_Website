type Recruitment = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  note: string;
};

export const entryFormUrl = "https://forms.gle/kvjtve2VHyw4dwWy6";

export const recruitment: Recruitment[] = [
  {
    id: "circle-entry",
    number: "01",
    title: "活動報告",
    description: "学生VR団体による年間の活動成果や、イベント、サークル運営の取り組みなどを報告する枠です。",
    tags: ["学生VR団体向け", "発表7分", "質疑応答2分"],
    href: entryFormUrl,
    note: "発表7分＋質疑応答2分（計9分）",
  },
  {
    id: "xr-entry",
    number: "02",
    title: "XR制作物プレゼン",
    description: "学生が制作したXR作品・ワールド・ギミックを、団体または個人で単独発表する枠です。",
    tags: ["学生団体・個人", "XR作品", "制作発表"],
    href: entryFormUrl,
    note: "発表時間などの詳細は、エントリー後に公式Discordで案内されます。",
  },
];

export const entrySchedule = [
  {
    label: "登壇エントリー締切",
    dateTime: "2026-09-15T23:59:00+09:00",
    date: "9月15日（火）23:59",
    emphasis: true,
  },
  {
    label: "発表スライド提出締切",
    dateTime: "2026-09-25T23:59:00+09:00",
    date: "9月25日（金）23:59",
    emphasis: false,
  },
  {
    label: "バックアップ動画提出締切",
    dateTime: "2026-10-03T23:59:00+09:00",
    date: "10月3日（土）23:59",
    emphasis: false,
  },
] as const;

export const presentationDates = [
  { dateTime: "2026-10-10T19:00:00+09:00", label: "10月10日（土）19:00〜22:50" },
  { dateTime: "2026-10-11T19:00:00+09:00", label: "10月11日（日）19:00〜22:50" },
] as const;

export const officialDiscordUrl = "https://discord.gg/zJHzDRpfA3";
export const regulationsUrl =
  "https://docs.google.com/presentation/d/1B4UaKNYpaIoS0D0ExpMnFJZ64BV4EWoPrDK7CaUyZDo/preview";
