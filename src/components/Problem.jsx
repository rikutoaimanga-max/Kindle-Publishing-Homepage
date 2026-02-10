import React from 'react';
import '../styles/global.css';

const Problem = () => {
    return (
        <section style={{ backgroundColor: '#f0f0f0', padding: '80px 0', color: 'var(--color-text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>こんなお悩みありませんか？</h2>
                </div>
                <div className="grid grid-2">
                    <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['広告費が高騰している', 'SNSに投稿してきた内容を有効活用したい', '権威性を高めたい', '本を出したいが、書く時間が無い'].map((item, index) => (
                                <li key={index} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.1rem' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)', fontWeight: 'bold' }}>✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['リスト取得の柱を増やしたい', 'バックエンド商品への導線が欲しい', '自分だけの強みが伝わらない', '競合との差別化に悩んでいる'].map((item, index) => (
                                <li key={index} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative', fontSize: '1.1rem' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)', fontWeight: 'bold' }}>✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                        私たちにお任せください！
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Problem;
