Mia Sheep｜Frontend Developer Portfolio

這是一個使用 Vite + React 製作的個人網站，展示 Mia 的前端技能、創意專案與互動體驗。你可以瀏覽我的作品、查看履歷，也能玩玩看我自製的倉鼠心理測驗 🐹

🔗 線上預覽： https://mia-sheep-su.github.io/AboutMe/

使用技術:
⚛️ React 18
⚡ Vite
🔤 TypeScript
🔀 React Router v6
🎨 CSS Modules
☁️ GitHub Pages（靜態部署）

📂 網站頁面:

頁面____________路徑__________________說明

首頁____________/_____________________KV 動畫區 + dropdown 社群連結

關於我__________/#/about______________基本介紹、技能、聯絡方式

我的履歷________/#/resume_____________履歷簡歷頁面

心理測驗總覽____/#/myhamstertest______角色卡片式表格展示

商品頁_________/PromotionsSales_______一頁是促銷電商網頁

資料填寫頁______/#/information________表單含驗證與彈窗

🧑‍💻 本地開發方式

git clone https://github.com/mia-sheep-su/AboutMe.git
cd AboutMe
npm install
npm run dev

🚀 GitHub Pages 部署方式

npm run build
npm run deploy

📌 請確認 vite.config.ts 設定了：

export default defineConfig({
  base: '/AboutMe/',
  ...
})

🧠 倉鼠心理測驗資料（/data/results）
角色資料包含：名稱、描述、個性標籤、相合/不合角色與原因、圖片等，用於心理測驗卡片式展示。


👩🏻‍💻 關於我

嗨，我是 Mia 🐑
一名具備行銷背景、跨域轉職的前端工程師。

GitHub: @Mia-Sheep-Su

Instagram: @m_0713_su

Cake Resume: https://www.cake.me/yi-jen-su

感謝你的造訪與閱讀！若你對我有興趣，歡迎來信交流 😊

📬 mailto:miasu713@gmail.com
