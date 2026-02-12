import React from 'react';
import '../styles/global.css';

const ServiceScope = () => {
    const services = [
        {
            title: "リサーチ・分析",
            desc: "ヒアリング内容をもとに、競合や同ジャンルのKindle書籍を調査・分析し、最適な企画の方向性を検討します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            )
        },
        {
            title: "企画・構成",
            desc: "インタビューで得た内容をもとに、読者視点で伝わりやすい構成案を作成。読まれる本の土台を設計します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            )
        },
        {
            title: "インタビュー",
            desc: "Zoom等を活用したオンラインインタビューを実施。自然な会話の中から、魅力的なエピソードを引き出します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            title: "執筆",
            desc: "経験豊富なプロライターが、ヒアリング内容をもとに読者に届く言葉で原稿を執筆。文章品質にこだわります。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            )
        },
        {
            title: "校正・編集",
            desc: "専門の編集チームが、誤字脱字だけでなく文章の流れや表現も丁寧にチェック。KDPの規約にも準拠します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            title: "表紙作成",
            desc: "内容に合った魅力的な表紙を、弊社デザイナーが制作。Amazonで目を引くデザインをご提案します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <palette xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></palette>
                </svg>
            )
        },
        {
            title: "原稿のデータ化",
            desc: "完成した原稿をKindle出版に適した専用フォーマットに変換。技術的な作業もすべてお任せください。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            title: "KDP登録サポート",
            desc: "KDP（Kindle Direct Publishing）への登録をサポート。設定項目や注意点も含め、スムーズに対応します。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: "出版申請",
            desc: "原稿・表紙・書誌情報をそろえ、Amazonへの出版申請を実施。公開までの工程をきちんとサポートします。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
            )
        },
        {
            title: "ペーパーバック申請",
            desc: "ご希望に応じて、Kindle版だけでなく紙書籍（ペーパーバック）での出版申請も対応可能です。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        }
    ];

    const flows = [
        "リサーチ・分析",
        "企画・構成",
        "インタビュー",
        "執筆・制作",
        "校正・編集",
        "表紙・A+制作",
        "出版申請代行",
        "販促・ブースト"
    ];

    return (
        <section>
            {/* Yellow Section -> White Section */}
            <div style={{ backgroundColor: '#ffffff', padding: '120px 0 60px', color: '#333' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        {/* This div was intended for a title, but currently contains the map. */}
                        {/* The map should be in a grid container. */}
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                    }}>
                        {services.map((service, index) => (
                            <div key={index} style={{ textAlign: 'left' }}>
                                <div style={{ marginBottom: '1rem', color: '#111' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>
                                    {service.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ServiceScope;
