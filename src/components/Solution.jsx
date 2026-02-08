import React from 'react';
import '../styles/global.css';

const Solution = () => {
    const points = [
        {
            title: '教育と集客の一括自動化',
            desc: '書籍を通して、ファン化とリスト獲得の自動化が可能。Amazonがあなたの代わりに「教育済み」の顧客を連れてくる。'
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
                <h2 className="section-title">Amazon × 二刀流の圧倒的優位性</h2>
                <div className="grid grid-3">
                    {points.map((point, index) => (
                        <div key={index} style={{
                            border: '1px solid var(--color-secondary)',
                            padding: '2rem',
                            textAlign: 'center',
                            backgroundColor: 'rgba(255,255,255,0.05)'
                        }}>
                            <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                                Point {index + 1}<br />{point.title}
                            </h3>
                            <p style={{ textAlign: 'left' }}>{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
