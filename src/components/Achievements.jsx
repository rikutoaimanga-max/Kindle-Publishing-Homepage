import React from 'react';
import '../styles/global.css';
import '../styles/global.css';
import CTA from './CTA';

const Achievements = () => {
    const clients = [
        {
            name: 'K.S様',
            title: 'マーケティングコンサル',
            result: <>リスト取得：30件/月 → <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>80件（166% UP）</span></>,
            period: '出版後2ヶ月'
        },
        {
            name: 'T.M様',
            title: '経営者',
            result: <>講演依頼：1件/月 → <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>4件（300% UP / 4倍増）</span></>,
            period: '出版後1ヶ月'
        },
        {
            name: 'Y.I様',
            title: '起業家・コーチ',
            result: <>月商：100万円 → <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>300万円（200% UP / 3倍増）</span></>,
            period: '出版後2ヶ月'
        }
    ];

    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: 'var(--color-text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>実績紹介</h2>
                </div>


                <div style={{ overflowX: 'auto', width: '100%', marginBottom: '4rem' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        minWidth: '700px', // Ensure it doesn't get too squashed on mobile
                        fontSize: '1rem',
                        backgroundColor: '#fff'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#fff' }}>
                                <th style={{
                                    border: '2px solid #000',
                                    padding: '1rem',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    width: '15%'
                                }}>クライアント例</th>
                                <th style={{
                                    border: '2px solid #000',
                                    padding: '1rem',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    width: '20%'
                                }}>肩書き</th>
                                <th style={{
                                    border: '2px solid #000',
                                    padding: '1rem',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    width: '50%'
                                }}>実績（Before → After）</th>
                                <th style={{
                                    border: '2px solid #000',
                                    padding: '1rem',
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    width: '15%'
                                }}>期間</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index}>
                                    <td style={{
                                        border: '2px solid #000',
                                        padding: '1rem',
                                        fontWeight: 'bold'
                                    }}>{client.name}</td>
                                    <td style={{
                                        border: '2px solid #000',
                                        padding: '1rem'
                                    }}>{client.title}</td>
                                    <td style={{
                                        border: '2px solid #000',
                                        padding: '1rem'
                                    }}>{client.result}</td>
                                    <td style={{
                                        border: '2px solid #000',
                                        padding: '1rem'
                                    }}>{client.period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
