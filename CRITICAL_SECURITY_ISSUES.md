# 🚨 重大セキュリティリスク - リリース前に必須対応

## 1. ⚠️ **APIキー露出（最重要）**

### 問題点
`.env`ファイルに実際のAPIキーが含まれており、クライアントサイドで使用されています：
- EmailJS APIキー: `hspM7MmAClEhBl-J3`
- EmailJS Service ID: `service_yg8wkt3`
- Google Sheets URL: 実際のURLが露出
- メールアドレス: `futurity_gc@outlook.jp`, `yoshiyasu1304@gmail.com`

### リスク
- 第三者がAPIキーを悪用してスパム送信可能
- Google Sheetsへの不正アクセス
- APIコストの不正利用

### 必須対応
```bash
# 1. 新しいAPIキーを生成
# EmailJSダッシュボードで全てのキーを再生成

# 2. .envファイルがGitに含まれていないか確認
git status
git log --all -- .env

# 3. もし履歴に含まれている場合は削除
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all
```

## 2. 🔴 **ハードコードされたスプレッドシートID**

### 問題点
`src/services/googleSheets.js`に直接記載：
```javascript
const SPREADSHEET_ID = '1sWX4B6Vo4I0q-fDIkS7l3EgZtn5qem39-Ale7KSfcsk';
```

### 必須対応
環境変数に移動して、新しいスプレッドシートを作成

## 3. ⚠️ **クッキーのセキュリティ設定不備**

### 問題点
`src/components/ui/sidebar.jsx`でクッキーが安全でない設定：
- HttpOnly フラグなし
- Secure フラグなし
- SameSite 属性なし

### 修正コード
```javascript
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; SameSite=Strict; Secure`;
```

## 4. 🔴 **エラーメッセージの情報漏洩**

### 問題点
- `console.log`でエラー詳細を出力
- `alert()`で詳細なエラーメッセージ表示

### リスク
- 内部構造の露出
- デバッグ情報の漏洩

## 5. ⚠️ **CSPの設定が不完全**

### 問題点
開発環境のみでCSPが設定されており、本番環境での設定が不明確

### 必須対応
Vercelデプロイ時のヘッダー設定：
```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; connect-src 'self' https://api.emailjs.com https://script.google.com"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🚀 リリース前チェックリスト

### 必須（リリースブロッカー）
- [ ] **EmailJS APIキーを全て再生成**
- [ ] **Google Apps Scriptを新規デプロイ**
- [ ] **.envファイルをGit履歴から完全削除**
- [ ] **本番環境変数を安全に設定**
- [ ] **vercel.jsonにセキュリティヘッダー追加**

### 推奨（24時間以内）
- [ ] サーバーサイドAPIの実装
- [ ] レート制限の強化
- [ ] CAPTCHA実装
- [ ] ログ監視設定

### 緊急連絡先
セキュリティインシデント時の対応：
1. 全APIキーの即時無効化
2. Vercelデプロイメントの停止
3. Google Sheetsのアクセス制限

## 対応コマンド集

```bash
# APIキーの確認
grep -r "VITE_EMAILJS" .env

# Git履歴の確認
git log --all --full-history -- "**/.*env*"

# 本番ビルドのテスト
npm run build
npx serve dist

# セキュリティ監査
npm audit
npm audit fix
```

**重要**: これらの修正を行わずにリリースすると、APIキーの悪用、データ漏洩、スパム攻撃のリスクがあります。