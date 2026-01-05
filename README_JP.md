
# プロジェクトセットアップガイド

## プロジェクト概要

本リポジトリは、高速かつスケーラブルなフロントエンド技術を使用して構築されたモダンなWebアプリケーションです。  
ローカル開発、チーム開発、本番デプロイに対応しています。

---

## コードの編集方法

### ローカル開発（推奨）

#### 必要条件
- Node.js（nvm推奨）
- npm
- Git

Node.js のインストール:
https://github.com/nvm-sh/nvm#installing-and-updating

#### 手順

```sh
git clone <https://github.com/aravinditte/Readme-Generator-GitHub-Profile.git>
cd <README-GENERATOR-GITHUB-PROFILE>
npm install
npm run dev
```

ホットリロード付きで開発サーバーが起動します。

---

### GitHub 上で直接編集
1. 編集したいファイルを開く
2. 鉛筆アイコンをクリック
3. 変更をコミット

---

### GitHub Codespaces
1. **Code → Codespaces → New codespace**
2. ブラウザ上で編集
3. コミットしてプッシュ

---

## 使用技術

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

---

## 開発実行

```sh
npm run dev
```

---

## 本番ビルド

```sh
npm run build
```

生成されたファイルを任意のホスティングサービスへデプロイしてください。

---

## ライセンス

MIT LICENSE
