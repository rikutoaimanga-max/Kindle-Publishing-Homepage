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
                <h2 className="section-title" style={{ color: '#000' }}>実績紹介</h2>


                <div className="grid grid-3">
                    {clients.map((client, index) => (
                        <div key={index} style={{
                            backgroundColor: '#f9f9f9',
                            padding: '2rem',
                            borderRadius: '8px',
                            textAlign: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ width: '100px', height: '100px', backgroundColor: '#ddd', borderRadius: '50%', margin: '0 auto 1rem' }}>
                                {/* Image Placeholder */}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{client.name} <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>{client.title}</span></h3>
                            <p style={{ fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{client.result}</p>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{client.period}</p>
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
