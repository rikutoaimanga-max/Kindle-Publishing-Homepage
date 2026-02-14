import React from 'react';
import { FaMoneyBillWave, FaBook, FaCrown, FaClock, FaUserPlus, FaRoute, FaGem, FaChartLine } from 'react-icons/fa';
import '../styles/global.css';

const Problem = () => {
    const problems = [
        { text: '広告費高騰の負担', icon: <FaMoneyBillWave /> },
        { text: 'SNS投稿の資産化', icon: <FaBook /> },
        { text: '権威性の確立', icon: <FaCrown /> },
        { text: '出版の時間がない', icon: <FaClock /> },
        { text: 'リスト獲得の拡大', icon: <FaUserPlus /> },
        { text: 'バックエンド導線の増加', icon: <FaRoute /> },
        { text: '競合との差別化', icon: <FaGem /> },
        { text: 'ブランド力の向上', icon: <FaChartLine /> },
    ];

    return (
        <section style={{ backgroundColor: '#f0f0f0', padding: '60px 0', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ color: '#000' }}>こんなお悩み<br />ありませんか？</h2>
                </div>

                {/* Problem Cards Container */}
                <div className="problem-cards-container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '3rem'
                }}>
                    {/* Top Row (3 items) - Desktop */}
                    <div className="problem-cards-row" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1rem',
                        maxWidth: '1000px',
                        width: '100%'
                    }}>
                        {problems.slice(0, 4).map((item, index) => (
                            <div key={index} className="problem-card" style={{
                                backgroundColor: '#fff',
                                border: '2px solid var(--color-secondary)',
                                borderRadius: '10px',
                                padding: '1.5rem 0.5rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                height: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                flex: '1 1 200px',
                                maxWidth: '240px'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: '#555',
                                    marginBottom: '1rem',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    lineHeight: '1.4',
                                    margin: 0
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row (4 items) - Desktop */}
                    <div className="problem-cards-row" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1rem',
                        maxWidth: '1000px',
                        width: '100%'
                    }}>
                        {problems.slice(4).map((item, index) => (
                            <div key={index + 3} className="problem-card" style={{
                                backgroundColor: '#fff',
                                border: '2px solid var(--color-secondary)',
                                borderRadius: '10px',
                                padding: '1.5rem 0.5rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                height: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                flex: '1 1 200px',
                                maxWidth: '240px'
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: '#555',
                                    marginBottom: '1rem',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: '#333',
                                    lineHeight: '1.4',
                                    margin: 0
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'var(--color-secondary)',
                    fontSize: '4rem',
                    lineHeight: '1'
                }}>
                    ▼
                </div>

                {/* Bottom Banner */}
                <div className="problem-banner" style={{
                    backgroundColor: '#daeaf6',
                    border: '3px solid var(--color-secondary)',
                    borderRadius: '15px',
                    padding: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    maxWidth: '800px',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    <div style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '900',
                        color: 'var(--color-secondary)',
                        textShadow: '2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff',
                        letterSpacing: '0.05em',
                        textAlign: 'center' // Ensure text is centered
                    }}>
                        私たちが解決します！
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
