import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutSidebar}>
                <h1>蘇苡甄 Mia</h1>
                <p className={styles.title}>前端工程師 & 專案管理</p>
                <p className={styles.location}>新北市, 臺灣</p>
                <p className={styles.summary}>
                    ✨ 好奇心旺盛的學習者<br />🧭 跨域再回歸的前端實作者<br />📈 具備數位行銷與專案管理背景 <br />
                    擅長跨部門協作與數據分析，能獨立執行專案，也能善用 AI 工具加速開發。
                </p>

                <section>
                    <h2>聯絡方式</h2>
                    <ul>
                        <li><a href="mailto:miasu713@gmail.com">📧 miasu713@gmail.com</a></li>
                        <li><a href="https://www.instagram.com/m_0713_su/" target="_blank">📷 Instagram</a></li>
                        <li><a href="https://github.com/Mia-Sheep-Su" target="_blank">🐱 GitHub</a></li>
                    </ul>
                </section>
            </div>

            <div className={styles.aboutContent}>
                <section>
                    <h2>工作經歷</h2>
                    <h3>傑卡數位行銷有限公司｜專案執行（2023/08 - 2025/02）</h3>
                    <ul>
                        <li>心理測驗網站、活動頁面與官網企劃與執行</li>
                        <li>GA4、GTM 事件設定與成效報告撰寫</li>
                        <li>前端支援與 HTML/CSS 調整</li>
                        <li>主導 Shopify 網站建置，完成多語系電商網站</li>
                    </ul>
                </section>

                <section>
                    <h2>學歷</h2>
                    <p>世新大學｜資訊管理學系（2018 - 2023）</p>
                    <ul>
                        <li>修習 Python、C#、資料庫、Flash 動畫製作</li>
                        <li>考取 PMA 專案助理證書、TQC+ 設計認證</li>
                        <li>參與系學會、咖啡社與多次打工經驗</li>
                    </ul>
                </section>

                <section>
                    <h2>技能</h2>
                    <ul>
                        <li>前端技術：HTML、CSS、JavaScript、React、Bootstrap、RWD</li>
                        <li>工具平台：VS Code、Figma、Shopify、GA4、GTM、Git</li>
                        <li>部署平台：GitHub Pages</li>
                        <li>專案管理工具：Notion、Trello</li>
                    </ul>
                </section>

                <section>
                    <h2>證照</h2>
                    <ul>
                        <li>PMA 專案助理證書</li>
                        <li>Google Analytics 認證（GA4）</li>
                    </ul>
                </section>

                <section>
                    <h2>作品連結</h2>
                    <ul>
                        <li><a href="https://mia-sheep-su.github.io/MyHamsterTest/" target="_blank">🧠 MyHamsterTest 心理測驗網站</a></li>
                        <li><a href="https://github.com/Mia-Sheep-Su/MyHamsterTest" target="_blank">📁 GitHub 原始碼</a></li>
                        <li><a href="https://taiwanexcellent.jp/" target="_blank">🌐 台灣精品日文電商平台</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}