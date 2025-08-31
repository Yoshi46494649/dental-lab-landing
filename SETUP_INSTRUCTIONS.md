# ポップアップフォーム & 自動通知システム セットアップガイド

## 🎉 実装済み機能

✅ **ポップアップフォームシステム**
- 全てのCTAボタン（Get Started, Request a Case, Book Consultation等）がポップアップフォームを開く
- 美しいモーダルデザインでコンバージョン率を最大化
- フォーム項目: Name, Phone, Email, Clinic Name, Case Details
- バリデーション機能付き

✅ **電話CTA改善**
- 全ての電話番号がクリック可能（tel:リンク）
- モバイルでワンタップ発信可能

✅ **自動通知システム（設定が必要）**
- Google Sheets自動連携
- EmailJS通知システム
- 両方の通知先に送信: futurity_gc@outlook.jp, yoshiyasu1304@gmail.com

## ⚙️ 設定が必要な項目

### 1. Google Sheets連携の設定

指定されたスプレッドシート: 
https://docs.google.com/spreadsheets/d/1sWX4B6Vo4I0q-fDIkS7l3EgZtn5qem39-Ale7KSfcsk/edit

#### 方法1: Google Apps Script（推奨）

1. **Google Apps Scriptを開く**: https://script.google.com/
2. **新しいプロジェクトを作成**
3. **以下のコードを貼り付け**:

\`\`\`javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('1sWX4B6Vo4I0q-fDIkS7l3EgZtn5qem39-Ale7KSfcsk').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // ヘッダーを追加（初回のみ）
  const lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Clinic', 'Case Details', 'Status']);
  }
  
  // データを追加
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone, 
    data.email,
    data.clinic,
    data.caseDetails,
    data.status
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
    .setMimeType(ContentService.MimeType.JSON);
}
\`\`\`

4. **デプロイ**: 「デプロイ」→「新しいデプロイ」
   - 種類: ウェブアプリ
   - 実行者: 自分
   - アクセス権: 全員
5. **Web App URLをコピー**
6. **ファイル更新**: `src/services/googleSheets.js` の `scriptUrl` を実際のURLに変更

### 2. EmailJS設定

1. **EmailJSアカウント作成**: https://www.emailjs.com/
2. **Gmailサービス追加**
3. **メールテンプレート作成**:

#### 通知テンプレート (template_case_request):
```
Subject: 新規案件依頼 - {{client_name}} 様 ({{clinic_name}})

新しい案件の依頼が入りました：

【依頼者情報】
- お名前: {{client_name}}
- メール: {{client_email}}
- 電話: {{client_phone}}
- クリニック: {{clinic_name}}
- 受付日時: {{submission_date}}

【案件内容】
{{case_details}}

24時間以内に回答をお願いします。

Mirai Dental Graphics ウェブサイトより
```

#### 自動返信テンプレート (template_auto_reply):
```
Subject: お問い合わせありがとうございます - Mirai Dental Graphics

{{client_name}} 様

この度は Mirai Dental Graphics にお問い合わせいただき、誠にありがとうございます。

{{clinic_name}} 様からのご依頼を承りました：
「{{case_summary}}」

経験豊富な技工士が以下の内容で24時間以内にご回答いたします：
• 詳細なお見積もりとスケジュール
• 材料のご提案
• ご質問への回答

お急ぎの場合は、お電話でもお気軽にお問い合わせください。
電話：0421 791 640

30年の実績と信頼
Mirai Dental Graphics
高田 寛

電話: 0421 791 640
メール: futurity_gc@outlook.jp
```

4. **設定ファイル更新**: `src/services/emailService.js` の設定値を変更:
   - `SERVICE_ID`
   - `TEMPLATE_ID`（通知用）
   - `AUTO_REPLY_TEMPLATE`
   - `PUBLIC_KEY`

### 3. 通知先設定

現在の通知先（変更不要）:
- futurity_gc@outlook.jp
- yoshiyasu1304@gmail.com

## 🧪 テスト方法

1. **ローカル開発サーバー起動**:
   ```bash
   cd dental-lab-landing
   npm run dev
   ```

2. **ポップアップテスト**:
   - 任意のCTAボタンをクリック
   - フォームが美しく表示されることを確認

3. **フォーム送信テスト**:
   - テストデータを入力して送信
   - 成功メッセージが表示されることを確認
   - Google Sheetsにデータが記録されることを確認
   - 通知メールが送信されることを確認

4. **電話リンクテスト**:
   - モバイルで電話番号をタップ
   - 電話アプリが開くことを確認

## 📱 対応機能

✅ **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
✅ **アクセシビリティ**: キーボードナビゲーション対応
✅ **エラーハンドリング**: 送信失敗時の適切な処理
✅ **バリデーション**: フォーム入力の検証
✅ **プライバシー**: データ処理に関する同意確認

## 🚀 本番環境での注意点

1. **HTTPS必須**: EmailJS、Google Sheets連携にはHTTPS環境が必要
2. **CORSポリシー**: Google Apps Script のWeb Appは適切にCORS設定
3. **レート制限**: EmailJSの月間送信制限を確認
4. **スパム対策**: 必要に応じてreCAPTCHA追加を検討

## 📊 設定完了後の確認項目

- [ ] Google Apps Script Web App URL を設定
- [ ] EmailJS の Service ID、Template ID、Public Key を設定
- [ ] 通知メールが両方のアドレスに届く
- [ ] Google Sheets にデータが正しく記録される
- [ ] 自動返信メールが送信される
- [ ] 電話リンクが正しく動作する

設定が完了すると、訪問者がフォームを送信した際に：
1. Google Sheets に自動でデータが保存される
2. 指定した2つのメールアドレスに通知が送信される
3. 送信者に自動返信メールが送信される
4. サンクス画面が表示され、4秒後にモーダルが自動で閉じる

すべてのCTAが統一されたポップアップフォーム体験を提供し、コンバージョン率の向上が期待できます！