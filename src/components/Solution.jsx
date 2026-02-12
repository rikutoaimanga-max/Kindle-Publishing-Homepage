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
        <section style={{ backgroundColor: 'var(--color-primary)', padding: '120px 0 80px 0', color: 'var(--color-text-light)' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ color: '#000', fontFamily: 'var(--font-family-base)', textTransform: 'none', display: 'inline-block', borderBottom: '2px solid var(--color-secondary)' }}>なぜ、<span style={{ fontWeight: '900' }}>Amazon Kindle</span>出版なのか？</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {points.map((point, index) => (
                        <div key={index} style={{
                            border: '2px solid var(--color-secondary)',
                            padding: '2rem',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ color: 'var(--color-secondary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>POINT {index + 1}</div>
                            <h3 style={{ color: '#000', marginBottom: '1rem', fontSize: '1.4rem', fontWeight: 'bold' }}>
                                {point.title}
                            </h3>
                            <p style={{ textAlign: 'left', color: '#333', lineHeight: '1.8' }}>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
