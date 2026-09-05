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

## 確認コマンド

```bash
npm run lint
npm run build
```

`npm run build` の生成物は `out/` に出力されます。
