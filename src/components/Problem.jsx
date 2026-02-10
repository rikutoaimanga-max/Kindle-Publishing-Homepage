import React from 'react';
import { FaChartLine, FaShareAlt, FaCrown, FaClock, FaListAlt, FaRoute, FaGem, FaBalanceScale } from 'react-icons/fa';
import '../styles/global.css';

const Problem = () => {
    const leftProblems = [
        { text: '広告費が高騰している', icon: <FaChartLine /> },
        { text: 'SNSに投稿してきた内容を有効活用したい', icon: <FaShareAlt /> },
        { text: '権威性を高めたい', icon: <FaCrown /> },
        { text: '本を出したいが、書く時間が無い', icon: <FaClock /> },
    ];

    const rightProblems = [
        { text: 'リスト取得の柱を増やしたい', icon: <FaListAlt /> },
        { text: 'バックエンド商品への導線が欲しい', icon: <FaRoute /> },
        { text: '自分だけの強みが伝わらない', icon: <FaGem /> },
        { text: '競合との差別化に悩んでいる', icon: <FaBalanceScale /> },
    ];

    return (
        <section style={{ backgroundColor: '#f0f0f0', padding: '50px 0 50px', color: 'var(--color-text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>こんなお悩みありませんか？</h2>
                </div>
                <div className="grid grid-2">
                    <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {leftProblems.map((item, index) => (
                                <li key={index} style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)', fontSize: '1.5rem', display: 'flex' }}>
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {rightProblems.map((item, index) => (
                                <li key={index} style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)', fontSize: '1.5rem', display: 'flex' }}>
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>
                        私たちにお任せください！
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Problem;
