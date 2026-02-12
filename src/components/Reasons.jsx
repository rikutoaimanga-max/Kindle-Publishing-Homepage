import React from 'react';
import '../styles/global.css';

const Reasons = () => {
    return (
        <section style={{ backgroundColor: '#f9f9f9', padding: '80px 0', color: '#333' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ color: '#000', display: 'inline-block', borderBottom: '2px solid var(--color-secondary)' }}>選ばれる3つの理由</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Reason 1: Delegation */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        textAlign: 'center'
                    }}>
                        <div style={{ height: '150px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Circle BG */}
                                <circle cx="50" cy="50" r="48" fill="#f0f8ff" stroke="var(--color-secondary)" strokeWidth="2" />
                                {/* Document */}
                                <rect x="25" y="30" width="30" height="40" rx="2" fill="#fff" stroke="var(--color-secondary)" strokeWidth="2" />
                                <line x1="30" y1="40" x2="50" y2="40" stroke="var(--color-secondary)" strokeWidth="2" />
                                <line x1="30" y1="50" x2="50" y2="50" stroke="var(--color-secondary)" strokeWidth="2" />
                                {/* Arrow */}
                                <path d="M50 50 L70 50 L65 45 M70 50 L65 55" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Gear (System) */}
                                <circle cx="75" cy="50" r="15" fill="#fff" stroke="var(--color-secondary)" strokeWidth="2" />
                                <path d="M75 35 V40 M75 60 V65 M60 50 H65 M85 50 H90" stroke="var(--color-secondary)" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'var(--color-secondary)', fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            01：完全丸投げOK
                        </h3>
                        <p style={{ textAlign: 'left', fontSize: '0.95rem' }}>
                            企画・原稿・マンガ化・デザイン・ペーパーバック化・SEO対策・出版手続き・販促まで、面倒な作業は全て代行。コンテンツ提供とヒアリングへの協力だけで、あなたの本が出版されます。
                        </p>
                    </div>

                    {/* Reason 2: Promotion */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        textAlign: 'center'
                    }}>
                        <div style={{ height: '150px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48" fill="#f0f8ff" stroke="var(--color-secondary)" strokeWidth="2" />
                                {/* Graph */}
                                <path d="M25 75 L40 60 L55 65 L80 30" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="25" cy="75" r="3" fill="var(--color-secondary)" />
                                <circle cx="40" cy="60" r="3" fill="var(--color-secondary)" />
                                <circle cx="55" cy="65" r="3" fill="var(--color-secondary)" />
                                <circle cx="80" cy="30" r="4" fill="var(--color-accent)" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'var(--color-secondary)', fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            02：圧倒的な実績に基づく支援
                        </h3>
                        <p style={{ textAlign: 'left', fontSize: '0.95rem' }}>
                            50冊以上のベストセラー実績に基づくプロモーションとSEO対策。一時的なランキング操作ではなく、「長く読まれる仕組み」を構築し、Amazonからの集客を最大化します。
                        </p>
                    </div>

                    {/* Reason 3: Synergy */}
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        textAlign: 'center'
                    }}>
                        <div style={{ height: '150px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48" fill="#f0f8ff" stroke="var(--color-secondary)" strokeWidth="2" />
                                {/* Book */}
                                <rect x="20" y="40" width="25" height="35" fill="#fff" stroke="var(--color-secondary)" strokeWidth="2" />
                                <line x1="25" y1="45" x2="40" y2="45" stroke="var(--color-secondary)" strokeWidth="1" />
                                <line x1="25" y1="50" x2="40" y2="50" stroke="var(--color-secondary)" strokeWidth="1" />
                                {/* X */}
                                <text x="50" y="65" fontSize="20" fontWeight="bold" fill="var(--color-secondary)" textAnchor="middle">×</text>
                                {/* Manga/Tablet */}
                                <rect x="55" y="40" width="25" height="35" rx="2" fill="#fff" stroke="var(--color-secondary)" strokeWidth="2" />
                                <circle cx="67.5" cy="57.5" r="8" stroke="var(--color-accent)" strokeWidth="1" />
                                <path d="M67.5 50 L72 55 L63 55 Z" fill="var(--color-accent)" />
                                {/* Effect */}
                                <path d="M50 25 L55 35 L45 35 Z" fill="var(--color-accent)" />
                                <path d="M50 85 L55 75 L45 75 Z" fill="var(--color-accent)" />
                            </svg>
                        </div>
                        <h3 style={{ color: 'var(--color-secondary)', fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-accent)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            03：テキスト×マンガの相乗効果
                        </h3>
                        <p style={{ textAlign: 'left', fontSize: '0.95rem' }}>
                            深い信頼を築く「テキスト本」と、広い層に届く「マンガ」。異なる層にアプローチできる2冊を同時展開することで、集客力と権威性を倍増させます。（片方のみも可）
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reasons;
