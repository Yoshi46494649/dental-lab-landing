# dental-lab-landing

歯科技工所「Mirai Dental Graphics」のランディングページ

## プロジェクト概要

このプロジェクトは、歯科技工所「Mirai Dental Graphics」のランディングページです。
Vite + Reactで構築されており、Tailwind CSSとshadcn/uiを使用してスタイリングされています。
また、Framer Motionによるアニメーションが実装されています。

## 技術スタック

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5  
- **Styling**: Tailwind CSS 4.1.7
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion 12.15.0
- **Icons**: Lucide React

## セットアップ手順

1. **依存関係のインストール**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **開発サーバーの起動**:
   ```bash
   npm run dev
   ```

3. **ブラウザで確認**:
   通常は `http://localhost:5173` で開きます（ポートが使用中の場合は別のポートが自動選択されます）

## ビルドとデプロイ

```bash
# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# ESLintでコードチェック
npm run lint
```

## プロジェクト構造

```
dental-lab-landing/
├── public/
│   └── assets/          # 画像ファイル
├── src/
│   ├── components/      # shadcn/uiコンポーネント
│   ├── lib/            # ユーティリティ関数
│   ├── App.jsx         # メインアプリケーション
│   ├── App.css         # グローバルCSS
│   └── main.jsx        # エントリーポイント
├── package.json
├── vite.config.js      # Vite設定
└── README.md
```

## 主な機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **アニメーション**: Framer Motionによるスムーズなアニメーション
- **問い合わせフォーム**: 症例依頼フォーム機能
- **サービス紹介**: ベニア、クラウン、インプラントの詳細説明
- **オンライン相談**: シェード＆シェイプ相談機能の紹介

## 開発者向け情報

このプロジェクトは日本の歯科技工所向けに開発されており、
ブリスベン、サンシャインコースト、ゴールドコースト地域の歯科医院との連携を想定しています。

## ライセンス

© 2025 Mirai Dental Graphics. All rights reserved.