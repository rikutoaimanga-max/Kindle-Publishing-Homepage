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
            <div style={{
                background: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)', // Light blue gradient
                padding: '30px 20px',
                textAlign: 'center',
                position: 'relative',
                borderBottom: '1px solid #e0f2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px' // Reduced gap
            }}>
                <div style={{
                    fontSize: 'clamp(6rem, 12vw, 8rem)',
                    fontWeight: '900',
                    color: 'var(--color-secondary)', // #00A0E9 Blue
                    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    lineHeight: '0.8', // Tighter line height for better vertical alignment visual
                    fontFamily: 'var(--font-family-serif)', // Consistent serif for headings
                    flexShrink: 0,
                    transform: 'translateY(-2px)' // Fine-tune vertical position
                }}>
                    0
                </div>

                <div style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '15px' // Increased from 10px
                }}>
                    <div style={{
                        fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)', // Slightly increased
                        fontWeight: 'bold',
                        color: '#555',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        letterSpacing: '0.05em',
                        borderBottom: '2px solid var(--color-secondary)',
                        marginBottom: '0',
                        lineHeight: '1.4',
                        width: 'fit-content',
                        textAlign: 'justify',
                        textAlignLast: 'justify'
                    }}>
                        あなたの情報資産を書籍に変える戦略をご提案
                    </div>
                    <div style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Slightly reduced again
                        fontWeight: '900',
                        color: 'var(--color-secondary)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        lineHeight: '1.1',
                        fontFamily: 'var(--font-family-serif)',
                        letterSpacing: '0.02em',
                        whiteSpace: 'nowrap',
                        marginTop: '0' // Removed top margin to bring closer
                    }}>
                        円カウンセリング
                    </div>
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
                    {/* Description Text */}
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '40px',
                        padding: '0 10px'
                    }}>
                        あなたの発信・コンテンツの資産価値を診断し、<br className="desktop-only" />
                        あなただけの 目的別 出版戦略をご提案いたします！
                    </p>

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
                                background: 'linear-gradient(to right, #f5a623, #f7b731)',
                                color: '#fff',
                                textDecoration: 'none',
                                padding: '15px 30px 15px 60px', // Left padding for bubble space
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                boxShadow: '0 10px 20px rgba(245, 166, 35, 0.4)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                boxSizing: 'border-box',
                                minHeight: '100px' // Ensure height for layout
                            }}
                        >
                            {/* Bubble "Imasugu" - Left overlapping */}
                            <div className="cta-bubble" style={{
                                position: 'absolute',
                                top: '50%',
                                left: '-25px', // Stick out from left
                                transform: 'translateY(-50%)',
                                width: '85px', // Larger bubble
                                height: '85px',
                                backgroundColor: '#fff',
                                border: '3px solid #f5a623',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#f5a623',
                                fontSize: '1.2rem',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                zIndex: 2
                            }}>
                                <span style={{ display: 'inline-block', transform: 'rotate(-15deg)', fontWeight: '900' }}>今すぐ</span>

                                {/* Bubble Tail - Pointing to button content */}
                                <div style={{
                                    position: 'absolute',
                                    right: '-12px',
                                    top: '60%',
                                    transform: 'translateY(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderTop: '10px solid transparent',
                                    borderBottom: '10px solid transparent',
                                    borderLeft: '15px solid #f5a623'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    right: '-8px',
                                    top: '60%',
                                    transform: 'translateY(-50%)',
                                    width: 0,
                                    height: 0,
                                    borderTop: '7px solid transparent',
                                    borderBottom: '7px solid transparent',
                                    borderLeft: '10px solid #fff'
                                }} />
                            </div>

                            {/* Button Text Container */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                {/* White Pill Badge */}
                                <div className="cta-text-sub" style={{
                                    fontSize: '1rem',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    display: 'inline-block',
                                    padding: '5px 20px',
                                    borderRadius: '50px',
                                    marginBottom: '8px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    120秒でカンタン入力!
                                </div>
                                {/* Main Text */}
                                <div className="cta-text-main" style={{
                                    fontSize: '1.4rem',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                    lineHeight: '1.2'
                                }}>
                                    出版カウンセリング<span style={{ fontSize: '0.85em' }}>を依頼する</span>
                                </div>
                            </div>

                            {/* Arrow */}
                            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', paddingLeft: '10px' }}>&gt;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
