# 全国学生VRサークル活動報告大会 2026

Next.jsで制作した大会公式サイトです。

## ローカル開発

```bash
npm ci
npm run dev
```

`http://localhost:3000` を開いて確認します。

## GitHub Pagesへの配信

1. GitHubのリポジトリで `Settings > Pages` を開く
2. `Build and deployment > Source` を `GitHub Actions` にする
3. `main` ブランチへpushする

`.github/workflows/deploy-pages.yml` が静的サイトをビルドし、GitHub Pagesへ配信します。リポジトリ配下のパスと、Pagesに設定した独自ドメインのどちらにもビルド時に自動対応します。

## 検索エンジン登録

このサイトは `robots.txt`、`sitemap.xml`、canonical URL、OGP、検索エンジン検証用metaタグ、Schema.org JSON-LDを静的生成します。

各検索エンジンの管理画面で所有権確認を行う場合は、発行された検証コードをGitHub ActionsのSecretsまたはVariablesに設定してから再デプロイします。

```bash
NEXT_PUBLIC_SITE_URL=https://vrsc-2026.numa-meta.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_BING_SITE_VERIFICATION=...
NEXT_PUBLIC_YANDEX_SITE_VERIFICATION=...
NEXT_PUBLIC_YAHOO_SITE_VERIFICATION=...
NEXT_PUBLIC_BAIDU_SITE_VERIFICATION=...
NEXT_PUBLIC_NAVER_SITE_VERIFICATION=...
```

デプロイ後、各サービスへ `https://vrsc-2026.numa-meta.com/sitemap.xml` を送信します。Google Search Console、Bing Webmaster Tools、Yandex Webmaster、Baidu Search Resource Platform、Naver Search Advisorなどに登録すると、主要検索エンジンから発見されやすくなります。

## 確認コマンド

```bash
npm run lint
npm run build
```

`npm run build` の生成物は `out/` に出力されます。
