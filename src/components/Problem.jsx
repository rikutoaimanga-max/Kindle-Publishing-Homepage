import React from 'react';
import { FaMoneyBillWave, FaBook, FaCrown, FaClock, FaUserPlus, FaRoute, FaGem, FaChartLine } from 'react-icons/fa';
import '../styles/global.css';

const Problem = () => {
    const problems = [
        { text: '広告費が高い', icon: <FaMoneyBillWave /> },
        { text: 'SNS投稿を再利用したい', icon: <FaBook /> },
        { text: <>権威性<span className="desktop-only" style={{ display: 'inline' }}>・</span><br className="mobile-br" />ブランド力が欲しい</>, icon: <FaCrown /> },
        { text: <>出版には興味あるけど<span className="desktop-only" style={{ display: 'inline' }}>、</span><br className="mobile-br" />時間が無い</>, icon: <FaClock /> },
        { text: '新しい集客口が欲しい', icon: <FaUserPlus /> },
        { text: <>バックエンドに<br className="mobile-br" />繋がらない</>, icon: <FaRoute /> },
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
                    {/* Problem Cards Flow - Desktop: 3x2, Mobile: 2x3 */}
                    <div className="problem-cards-row" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        justifyContent: 'center',
                        gap: '1rem',
                        maxWidth: '850px', // Restrict width to force 3 items per row on desktop
                        width: '100%',
                        margin: '0 auto'
                    }}>
                        {problems.map((item, index) => (
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
                                width: '100%'
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
