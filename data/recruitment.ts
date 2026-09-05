type Recruitment = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  note: string;
};

// 募集確定後に note を更新し、href に応募フォームのURLを設定してください。
export const recruitment: Recruitment[] = [
  {
    id: "circle-entry",
    number: "01",
    title: "サークル活動報告",
    description: "日頃の活動内容、イベントの実施報告、サークル運営の取り組みなどを発表する枠です。",
    tags: ["サークル活動", "知見の共有", "団体登壇"],
    note: "募集対象・応募方法・締切は、決まり次第こちらでお知らせします。",
  },
  {
    id: "xr-entry",
    number: "02",
    title: "VR/XR制作発表",
    description: "学生が制作したVR/XR作品の内容や、開発で使用した技術、制作過程での工夫などを発表する枠です。",
    tags: ["VR / XR", "ものづくり", "制作発表"],
    note: "応募条件・発表形式・締切は、決まり次第こちらでお知らせします。",
  },
];
