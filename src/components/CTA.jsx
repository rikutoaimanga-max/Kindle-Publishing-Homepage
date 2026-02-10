import React from 'react';
import '../styles/global.css';

const CTA = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 10px 30px rgba(0, 160, 233, 0.15)', // Blue shadow
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            border: '1px solid #e0f2ff' // Subtle blue border
        }}>
            {/* Header Section */}
            <div style={{
                background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)', // Light blue gradient
                padding: '30px 20px',
                textAlign: 'center',
                position: 'relative',
                borderBottom: '1px solid #e0f2ff'
            }}>
                <div style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: '#555',
                    display: 'inline-block',
                    paddingBottom: '5px',
                    letterSpacing: '0.05em',
                    borderBottom: '2px solid var(--color-secondary)' // Added blue underline
                }}>
                    あなたの情報資産を書籍に変える戦略をご提案
                </div>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: 'var(--color-secondary)', // #00A0E9 Blue
                    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-family-serif)' // Consistent serif for headings
                }}>
                    0円カウンセリング
                </div>
            </div>

            {/* Body Section */}
            <div className="cta-container" style={{
                padding: '40px 30px',
                backgroundColor: '#fff'
            }}>
                {/* Checklist */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginBottom: '40px',
                    maxWidth: '550px',
                    margin: '0 auto 40px'
                }}>
                    {[
                        '今のあなたの出版ポテンシャルを診断',
                        '今の執筆・出版の課題がわかる',
                        '3ヶ月でどれぐらい印税が入るかわかる'
                    ].map((text, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            color: '#333',
                            borderBottom: '1px dashed #cceeff', // Subtle blue dashed line
                            paddingBottom: '15px'
                        }}>
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px',
                                height: '28px',
                                backgroundColor: 'var(--color-secondary)', // Blue check bg
                                color: '#fff',
                                marginRight: '15px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                flexShrink: 0,
                                borderRadius: '50%' // Circle check
                            }}>
                                ✓
                            </span>
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div style={{ textAlign: 'center' }}>
                    <a
                        href="https://forms.gle/BBb3FbiVkBH4qbFr6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button-hover cta-button"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'linear-gradient(to right, #f5a623, #f7b731)', // Orange gradient (btn-primary)
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '20px 40px 20px 90px', // Default desktop padding
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                            boxShadow: '0 10px 20px rgba(245, 166, 35, 0.4)', // Orange shadow
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxSizing: 'border-box'
                        }}
                    >
                        {/* Bubble "Imasugu" */}
                        <div className="cta-bubble" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '15px',
                            transform: 'translateY(-50%)',
                            width: '65px',
                            height: '65px',
                            backgroundColor: '#fff',
                            border: '2px solid #f5a623', // Orange border
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#f5a623', // Orange text
                            fontSize: '1rem',
                            fontWeight: '900',
                            lineHeight: '1.1',
                            textAlign: 'center',
                            zIndex: 1,
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            今すぐ
                        </div>

                        {/* Button Text Container */}
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div className="cta-text-sub" style={{
                                fontSize: '0.9rem',
                                backgroundColor: 'rgba(255,255,255,0.2)', // Semi-transparent white
                                color: '#fff',
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                marginBottom: '5px',
                                fontWeight: 'bold'
                            }}>
                                30秒でカンタン入力!
                            </div>
                            <div className="cta-text-main" style={{ fontSize: '1.6rem', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                カウンセリングを予約する
                            </div>
                        </div>

                        {/* Arrow */}
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingLeft: '10px' }}>&gt;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CTA;
