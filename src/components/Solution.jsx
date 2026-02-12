import React from 'react';
import '../styles/global.css';

const Solution = () => {
    const points = [
        {
            title: '教育と集客の一括自動化',
            desc: <>書籍を通して、ファン化とリスト獲得の自動化が可能。<br />Amazonがあなたの代わりに「教育済み」の顧客を連れてくる。</>
        },
        {
            title: '著者という最強のブランディング',
            desc: 'SNSフォロワー数以上に、「著者」という肩書きが業界内での権威を決定づける。'
        },
        {
            title: '決済ストレスゼロ',
            desc: 'Amazonだからこそ、購入・リスト登録への壁が極限まで低い。'
        }
    ];

    return (
        <section style={{ backgroundColor: 'var(--color-primary)', padding: '80px 0', color: 'var(--color-text-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000', fontFamily: 'var(--font-family-base)', textTransform: 'none' }}>なぜ、<span style={{ fontWeight: '900' }}>Amazon Kindle</span>出版なのか？</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {points.map((point, index) => (
                        <div key={index} style={{
                            border: '4px solid var(--color-secondary)', // Match CTA border color and width
                            padding: '2rem',
                            textAlign: 'center',
                            backgroundColor: '#fff', // Changed to white background
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                Point {index + 1}<br />{point.title}
                            </h3>
                            <p style={{ textAlign: 'center', color: '#333' }}>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
