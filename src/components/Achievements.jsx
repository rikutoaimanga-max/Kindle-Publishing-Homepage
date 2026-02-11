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
            result: <>リスト取得：30件/月 → <span style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#e60012' }}>80件（166% UP）</span></>,
            period: '出版後2ヶ月',
            voice: 'りくとさんの制作する漫画は非常にクオリティが高く、告知前から印税が伸びるほど読者の反応が素晴らしいものでした。テキスト本を漫画化したことで、本のボリュームとクオリティが劇的に上がり、出版から時間が経った今でも1日1万ページ以上読まれるという成果が出ています。Amazon総合ランキングでも300位以内を記録するなど、あからさまに良い影響を実感しています。今回はテキストの原稿をそのまま漫画の原稿に差し替えてしまったため、リスト取りの部分に関しては、正確にデータが取れないですが、非常に満足度が高く、すでに2冊目の漫画かも依頼しており、3冊目、4冊目も継続して制作をお願いすることを決めています。現在、りくとさんの自信の予約が数ヶ月先まで埋まっているとのことですが、それでも順番を待ってお願いしたいと思える安心感があります。シリーズ化を見据え、今後も長くパートナーとしてお付き合いさせていただきたいクリエイターです。'
        },
        {
            name: 'T.M様',
            attribute: '40代 男性',
            title: '経営者',
            result: <>講演依頼：1件/月 → <span style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#e60012' }}>4件（300% UP / 4倍増）</span></>,
            period: '出版後1ヶ月',
            voice: '出版前は「ただの経営者」でしたが、出版後は「著者の先生」として見られるようになり、講演依頼が急増しました。書籍が名刺代わりになり、初対面の方からの信頼獲得スピードが段違いです。'
        },
        {
            name: 'Y.I様',
            attribute: '30代 女性',
            title: '起業家・コーチ',
            result: <>月商：100万円 → <span style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#e60012' }}>300万円（200% UP / 3倍増）</span></>,
            period: '出版後2ヶ月',
            voice: '集客に追われる日々から解放されました。Amazonが自動的に集客してくれるので、私は本業のコーチングに集中できています。お客様の方から「お願いします」と言われるようになり、セールスのストレスがなくなりました。'
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
                            padding: '1.8rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.2rem',
                            textAlign: 'left',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '100%',
                            aspectRatio: '3 / 4', // Taller aspect ratio (0.75)
                            justifyContent: 'space-between'
                        }}>
                            {/* 装飾的な背景要素 */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '6px',
                                height: '100%',
                                backgroundColor: 'var(--color-secondary)'
                            }}></div>

                            {/* ヘッダーエリア：人物紹介 */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
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

                            {/* ボディエリア：成果 */}
                            <div style={{
                                backgroundColor: '#fffaf0', // 薄い暖色系
                                border: '1px solid #ffeeba',
                                padding: '1.2rem',
                                borderRadius: '10px',
                                flexGrow: 0, // Don't stretch this too much
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <span style={{ fontSize: '1.1rem' }}>🏆</span> 成果
                                </div>
                                <div style={{ fontSize: '1.05rem', fontWeight: 'bold', lineHeight: '1.5' }}>
                                    {client.result}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.4rem', textAlign: 'right' }}>
                                    期間：{client.period}
                                </div>
                            </div>

                            {/* フッターエリア：感想 */}
                            <div style={{
                                backgroundColor: '#f9f9f9',
                                padding: '1.2rem',
                                borderRadius: '10px',
                                position: 'relative',
                                flexGrow: 1, // Let this fill remaining space
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'flex-start'
                            }}>
                                <div style={{ position: 'absolute', top: '-8px', left: '15px', fontSize: '2.5rem', color: '#e0e0e0', lineHeight: 1 }}>❝</div>
                                <p style={{ lineHeight: '1.7', color: '#444', position: 'relative', zIndex: 1, margin: 0 }}>
                                    {client.voice}
                                </p>
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
