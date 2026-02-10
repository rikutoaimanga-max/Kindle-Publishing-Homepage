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
        <section style={{ backgroundColor: '#f0f0f0', padding: '50px 0 120px', color: 'var(--color-text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>こんなお悩みありませんか？</h2>
                </div>
                <div className="grid grid-2">
                    {/* Left Column */}
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {leftProblems.map((item, index) => (
                                <li key={index} style={{
                                    marginBottom: '1rem',
                                    padding: '1.5rem 1.5rem 1.5rem 4rem', // Increased left padding for icon
                                    position: 'relative',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#fff', // White background for card
                                    borderRadius: '8px', // Rounded corners
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)' // Subtle shadow
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '1.5rem', // Adjusted icon position
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--color-accent)',
                                        fontSize: '1.5rem',
                                        display: 'flex'
                                    }}>
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Column */}
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {rightProblems.map((item, index) => (
                                <li key={index} style={{
                                    marginBottom: '1rem',
                                    padding: '1.5rem 1.5rem 1.5rem 4rem', // Increased left padding for icon
                                    position: 'relative',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#fff', // White background for card
                                    borderRadius: '8px', // Rounded corners
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)' // Subtle shadow
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '1.5rem', // Adjusted icon position
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: 'var(--color-accent)',
                                        fontSize: '1.5rem',
                                        display: 'flex'
                                    }}>
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: '600', // Matched with section-title
                        color: '#000',
                        fontFamily: 'var(--font-family-base)' // Changed to gothic
                    }}>
                        私たちにお任せください！
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Problem;
