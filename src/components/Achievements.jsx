import React from 'react';
import '../styles/global.css';
import '../styles/global.css';
import CTA from './CTA';

const Achievements = () => {
    const clients = [
        {
            name: 'K.S様',
            title: 'マーケティングコンサル',
            result: 'リスト取得：30件/月 → 80件（166% UP）',
            period: '出版後2ヶ月'
        },
        {
            name: 'T.M様',
            title: '経営者',
            result: '講演依頼：1件/月 → 4件（300% UP / 4倍増）',
            period: '出版後1ヶ月'
        },
        {
            name: 'Y.I様',
            title: '起業家・コーチ',
            result: '月商：100万円 → 300万円（200% UP / 3倍増）',
            period: '出版後2ヶ月'
        }
    ];

    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: 'var(--color-text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>実績紹介</h2>
                </div>


                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    marginBottom: '4rem'
                }}>
                    {clients.map((client, index) => (
                        <div key={index} style={{
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            padding: '2rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'left',
                            position: 'relative',
                            overflow: 'hidden'
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                {/* アイコン */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: '#eee',
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: '#aaa'
                                }}>
                                    {/* Placeholder Icon */}
                                    User
                                </div>

                                {/* プロフィール */}
                                <div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {client.name}
                                        <span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: '#fff', backgroundColor: '#999', padding: '2px 8px', borderRadius: '12px' }}>
                                            {client.attribute}
                                        </span>
                                    </div>
                                    <div style={{ fontSize: '1rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                                        {client.title}
                                    </div>
                                </div>
                            </div>

                            {/* ボディエリア：成果 */}
                            <div style={{
                                backgroundColor: '#fffaf0', // 薄い暖色系
                                border: '1px solid #ffeeba',
                                padding: '1.5rem',
                                borderRadius: '10px'
                            }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🏆</span> 成果
                                </div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', lineHeight: '1.6' }}>
                                    {client.result}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem', textAlign: 'right' }}>
                                    期間：{client.period}
                                </div>
                            </div>

                            {/* フッターエリア：感想 */}
                            <div style={{
                                backgroundColor: '#f9f9f9',
                                padding: '1.5rem',
                                borderRadius: '10px',
                                position: 'relative'
                            }}>
                                <div style={{ position: 'absolute', top: '-10px', left: '20px', fontSize: '3rem', color: '#e0e0e0', lineHeight: 1 }}>❝</div>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#444', position: 'relative', zIndex: 1 }}>
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
