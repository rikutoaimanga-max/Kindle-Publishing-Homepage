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
                                padding: '20px 40px', // Restored balanced padding
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
                                top: '-25px', // Moved up to overlap top edge
                                left: '60px', // Moved right to overlap text
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
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}>
                                <span style={{ display: 'inline-block', transform: 'rotate(-10deg)' }}>今すぐ</span>
                                {/* Bubble Tail (Border) */}
                                <div style={{
                                    position: 'absolute',
                                    right: '-8px', // Adjusted to fit circle curve at 70% top
                                    top: '70%',
                                    transform: 'translateY(-50%) rotate(15deg)', // Rotated to point down
                                    width: 0,
                                    height: 0,
                                    borderTop: '10px solid transparent',
                                    borderBottom: '10px solid transparent',
                                    borderLeft: '11px solid #f5a623'
                                }} />
                                {/* Bubble Tail (Inner) */}
                                <div style={{
                                    position: 'absolute',
                                    right: '-5px', // Adjusted offset
                                    top: '70%',
                                    transform: 'translateY(-50%) rotate(15deg)', // Rotated to match border
                                    width: 0,
                                    height: 0,
                                    borderTop: '7px solid transparent',
                                    borderBottom: '7px solid transparent',
                                    borderLeft: '8px solid #fff'
                                }} />
                            </div>

                            {/* Button Text Container */}
                            <div style={{ flex: 1, textAlign: 'center' }}>
                                <div className="cta-text-sub" style={{
                                    fontSize: '1.1rem', // Increased from 0.9rem
                                    backgroundColor: 'rgba(255,255,255,0.9)', // More opaque white for better contrast with black text
                                    color: '#000', // Changed to black
                                    display: 'inline-block',
                                    padding: '4px 15px',
                                    borderRadius: '20px',
                                    marginBottom: '5px',
                                    fontWeight: 'bold'
                                }}>
                                    120秒でカンタン入力!
                                </div>
                                <div className="cta-text-main" style={{ fontSize: '1.6rem', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                    出版カウンセリング<span style={{ fontSize: '0.7em' }}>を依頼する</span>
                                </div>
                            </div>

                            {/* Arrow */}
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingLeft: '10px' }}>&gt;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
