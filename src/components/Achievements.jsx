import React from 'react';
import '../styles/global.css';
import CTA from './CTA';

const Achievements = () => {
    const clients = [
        {
            name: 'こう吉様',
            attribute: '30代 男性',
            title: '500名超えのKindleサロンオーナー',
            image: '/image/koukichi.png',
            before: 'リスト取得：30件/月',
            after: '80件（166% UP）',
            voice: 'りくとさんの制作する漫画は非常にクオリティが高く、告知前から印税が伸びるほど読者の反応が素晴らしいものでした。テキスト本を漫画化したことで、本のボリュームとクオリティが劇的に上がり、出版から時間が経った今でも1日1万ページ以上読まれるという成果が出ています。Amazon総合ランキングでも300位以内を記録するなど、あからさまに良い影響を実感しています。今回はテキストの原稿をそのまま漫画の原稿に差し替えてしまったため、リスト取りの部分に関しては、正確にデータが取れないですが、非常に満足度が高く、すでに2冊目の漫画かも依頼しており、3冊目、4冊目も継続して制作をお願いすることを決めています。現在、りくとさんの自信の予約が数ヶ月先まで埋まっているとのことですが、それでも順番を待ってお願いしたいと思える安心感があります。シリーズ化を見据え、今後も長くパートナーとしてお付き合いさせていただきたいクリエイターです。',
            period: '出版後2ヶ月'
        },
        {
            name: 'T.M様',
            attribute: '40代 男性',
            title: '経営者',
            before: '講演依頼：1件/月',
            after: '4件（300% UP / 4倍増）',
            voice: '出版前は「ただの経営者」でしたが、出版後は「著者の先生」として見られるようになり、講演依頼が急増しました。書籍が名刺代わりになり、初対面の方からの信頼獲得スピードが段違いです。',
            period: '出版後1ヶ月'
        },
        {
            name: 'Y.I様',
            attribute: '30代 女性',
            title: '起業家・コーチ',
            before: '月商：100万円',
            after: '300万円（200% UP / 3倍増）',
            voice: '集客に追われる日々から解放されました。Amazonが自動的に集客してくれるので、私は本業のコーチングに集中できています。お客様の方から「お願いします」と言われるようになり、セールスのストレスがなくなりました。',
            period: '出版後2ヶ月'
        }
    ];

    return (
        <section style={{
            background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)',
            backgroundColor: '#e6f7ff', // Fallback
            padding: '80px 0',
            color: 'var(--color-text-dark)'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>実績紹介</h2>
                </div>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                    gap: '2.5rem',
                    maxWidth: '900px', // 2 columns max (360*2 + gap < 900, 360*3 > 900)
                    margin: '0 auto',
                    marginBottom: '4rem'
                }}>
                    {clients.map((client, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                            width: '100%',
                            height: '650px', // Fixed height strategy
                            display: 'flex',       // Flex container
                            flexDirection: 'column' // Column layout
                        }}>
                            {/* 装飾的な背景要素 */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '6px',
                                height: '100%',
                                backgroundColor: 'var(--color-secondary)',
                                zIndex: 1
                            }}></div>

                            {/* コンテンツラッパー（パディング用） */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                padding: '1.8rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem',
                                zIndex: 2
                            }}>

                                {/* ヘッダーエリア：人物紹介 */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
                                    {/* アイコン */}
                                    {client.image ? (
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            style={{
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '2px solid #eee'
                                            }}
                                        />
                                    ) : (
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '50%',
                                            backgroundColor: '#eee',
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.8rem',
                                            color: '#aaa'
                                        }}>
                                            User
                                        </div>
                                    )}

                                    {/* プロフィール */}
                                    <div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {client.name}
                                        </div>
                                        <div style={{ fontSize: '0.95rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                                            {client.title}
                                        </div>
                                    </div>
                                </div>

                                {/* ボディエリア：成果（Before -> After） */}
                                <div style={{
                                    backgroundColor: '#fff4e6', // Slightly darker warm color
                                    border: '2px solid #ffcc80', // Thicker, darker border
                                    padding: '1.2rem',
                                    borderRadius: '12px',
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    textAlign: 'center' // Center alignment
                                }}>
                                    <div style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        color: '#000', // Black text for title
                                        marginBottom: '0.6rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center', // Center content
                                        gap: '0.5rem',
                                        borderBottom: '1px dashed #ffcc80',
                                        paddingBottom: '0.5rem'
                                    }}>
                                        <span style={{ fontSize: '1.4rem' }}>🏆</span> <span style={{ letterSpacing: '0.1em' }}>成果</span>
                                    </div>

                                    {/* Before / After Layout */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                                        {/* Before */}
                                        <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#555' }}>
                                            {client.before}
                                        </div>

                                        {/* Arrow */}
                                        <div style={{ fontSize: '1.4rem', color: '#e65100', lineHeight: 1, padding: '0.2rem 0' }}>
                                            ▼
                                        </div>

                                        {/* After */}
                                        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d32f2f' }}>
                                            {client.after}
                                        </div>
                                    </div>

                                </div>

                                {/* フッターエリア：感想 */}
                                <div
                                    data-lenis-prevent // Prevent Lenis smooth scroll from hijacking wheel event
                                    onWheel={(e) => e.stopPropagation()} // Stop event propagation just in case
                                    style={{
                                        backgroundColor: '#f9f9f9',
                                        padding: '1.2rem',
                                        borderRadius: '10px',
                                        position: 'relative',
                                        flex: '1 1 0', // Grow to fill remaining space
                                        minHeight: 0,  // Allow content to be taller than container (trigger overflow)
                                        fontSize: '0.9rem',
                                        overflowY: 'auto', // Enable scrolling
                                        overscrollBehavior: 'contain' // Prevent scroll chaining to parent
                                    }}>
                                    <p style={{ lineHeight: '1.7', color: '#444', position: 'relative', zIndex: 1, margin: 0 }}>
                                        {client.voice}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    {/* Manga Quality Image Placeholder */}
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: '300px',
                        backgroundColor: '#eee',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed #ccc'
                    }}>
                        マンガクオリティ・テキスト本データイメージが入ります
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <CTA />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
