# 📧 EmailJS設定ガイド（初心者向け）

## 🎯 このガイドについて
EmailJSを使って、フォーム送信時に自動でメール通知を送る設定を行います。
プログラミング知識は必要ありません。画面の指示に従って進めてください。

## ステップ1: EmailJSアカウント作成 (5分)

### 1.1 EmailJSにアクセス
1. ブラウザで https://www.emailjs.com/ を開く
2. 右上の「Sign Up Free」ボタンをクリック

### 1.2 アカウント登録
**方法A: Googleアカウントで登録（推奨）**
1. 「Continue with Google」をクリック
2. Googleアカウントでログイン
3. アクセス許可画面で「許可」をクリック

**方法B: メールアドレスで登録**
1. メールアドレスを入力
2. パスワードを設定（8文字以上）
3. 「Sign Up」をクリック
4. 確認メールが届くので、リンクをクリック

## ステップ2: Gmailサービスの追加 (10分)

### 2.1 サービス追加画面へ
1. ログイン後、左側メニューの「Email Services」をクリック
2. 「Add New Service」ボタンをクリック

### 2.2 Gmailを選択
1. サービス一覧から「Gmail」を選択
2. 「Connect Account」をクリック

### 2.3 Googleアカウント連携
1. Googleログイン画面が開く
2. 送信元にしたいGmailアカウントでログイン
3. 「EmailJSがGmailへのアクセスを求めています」画面で「許可」をクリック

### 2.4 サービス設定
1. Service Name: `MiraiDental` と入力（任意の名前でOK）
2. 「Create Service」をクリック
3. **重要**: 表示される「Service ID」をメモする
   例: `service_abc123xyz`

## ステップ3: メールテンプレート作成 (15分)

### 3.1 通知用テンプレート（管理者向け）

1. 左側メニューの「Email Templates」をクリック
2. 「Create New Template」をクリック
3. 以下の情報を入力：

**Template Name**: `Case Request Notification`

**To Email（送信先）**: 
```
futurity_gc@outlook.jp,yoshiyasu1304@gmail.com
```
（カンマで区切って2つのメールアドレスを入力）

**From Name**: `Mirai Dental Website`

**Subject**: 
```
新規案件依頼 - {{client_name}} 様 ({{clinic_name}})
```

**Content（本文）**:
```
新しい案件の依頼が入りました：

【依頼者情報】
お名前: {{client_name}}
メール: {{client_email}}
電話: {{client_phone}}
クリニック: {{clinic_name}}
受付日時: {{submission_date}}

【案件内容】
{{case_details}}

【対応について】
24時間以内に回答をお願いします。

---
Mirai Dental Graphics ウェブサイトより自動送信
```

4. 「Save」をクリック
5. **重要**: 表示される「Template ID」をメモする
   例: `template_xyz789abc`

### 3.2 自動返信テンプレート（お客様向け）

1. 「Create New Template」をもう一度クリック
2. 以下の情報を入力：

**Template Name**: `Auto Reply`

**To Email**: `{{client_email}}`

**From Name**: `Mirai Dental Graphics`

**Reply To**: `futurity_gc@outlook.jp`

**Subject**: 
```
お問い合わせありがとうございます - Mirai Dental Graphics
```

**Content（本文）**:
```
{{client_name}} 様

この度は Mirai Dental Graphics にお問い合わせいただき、
誠にありがとうございます。

{{clinic_name}} 様からのご依頼を承りました。

【ご依頼内容】
{{case_summary}}

経験豊富な技工士が24時間以内に以下の内容でご回答いたします：
• 詳細なお見積もりとスケジュール
• 材料のご提案
• ご質問への回答

お急ぎの場合は、お電話でもお気軽にお問い合わせください。

━━━━━━━━━━━━━━━━━━━━
Mirai Dental Graphics
30年の実績と信頼

代表: 高田 寛
電話: 0421 791 640
メール: futurity_gc@outlook.jp
━━━━━━━━━━━━━━━━━━━━
```

3. 「Save」をクリック
4. **重要**: Template IDをメモする
   例: `template_auto_reply_123`

## ステップ4: APIキーの取得 (2分)

1. 右上のユーザーアイコンをクリック
2. 「Account」を選択
3. 「API Keys」タブをクリック
4. 「Public Key」の値をコピー
   例: `AbCdEfGhIjKlMnOpQrS`

## ステップ5: ウェブサイトへの設定 (5分)

### 5.1 .envファイルの作成
1. プロジェクトフォルダ内に `.env` ファイルを作成
2. 以下の内容をコピーして、メモした値に置き換える：

```env
# EmailJS設定（メモした値に置き換えてください）
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_auto_reply_123
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQrS

# Google Sheets設定（変更不要）
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbyHRSGi0cOegxc6N_vQlW9g6GxBSy0EDr2UL1uxbHv7RZMBrfkscxNqlbqLkl9ZTq5R/exec

# 通知先メール（変更不要）
VITE_NOTIFICATION_EMAIL_1=futurity_gc@outlook.jp
VITE_NOTIFICATION_EMAIL_2=yoshiyasu1304@gmail.com
```

## ステップ6: テスト方法 (5分)

### 6.1 開発サーバーの起動
```bash
npm run dev
```

### 6.2 フォームのテスト
1. ブラウザで http://localhost:5173 を開く
2. 任意の「Get Started」ボタンをクリック
3. テストデータを入力：
   - Name: テスト太郎
   - Phone: 0400000000
   - Email: あなたのメールアドレス
   - Clinic: テストクリニック
   - Message: これはテストです
4. 「Submit Case Request」をクリック

### 6.3 確認項目
✅ 成功メッセージが表示される
✅ futurity_gc@outlook.jp にメールが届く
✅ yoshiyasu1304@gmail.com にメールが届く
✅ 入力したメールアドレスに自動返信が届く
✅ Google Sheetsにデータが記録される

## ⚠️ よくある問題と解決方法

### メールが届かない場合
1. **迷惑メールフォルダを確認**
2. **EmailJSの月間送信制限を確認**（無料プランは月200通まで）
3. **Template IDが正しいか確認**
4. **.envファイルが正しく設定されているか確認**

### エラーが表示される場合
1. **ブラウザのコンソールを確認**（F12キー）
2. **Public Keyが正しいか確認**
3. **インターネット接続を確認**

### Google Sheetsに記録されない場合
1. **Web App URLが正しいか確認**
2. **Google Apps Scriptの権限設定を確認**

## 📞 サポート

設定で困った場合は、以下の情報と一緒にお問い合わせください：
- エラーメッセージのスクリーンショット
- ブラウザのコンソールログ（F12キー）
- 実行した手順

## ✅ 設定完了チェックリスト

- [ ] EmailJSアカウントを作成した
- [ ] Gmailサービスを追加した
- [ ] 通知用テンプレートを作成した
- [ ] 自動返信テンプレートを作成した
- [ ] Service ID、Template ID、Public Keyをメモした
- [ ] .envファイルを作成し、値を設定した
- [ ] テスト送信が成功した
- [ ] 両方のメールアドレスに通知が届いた
- [ ] 自動返信メールが届いた
- [ ] Google Sheetsにデータが記録された

以上で設定は完了です！🎉