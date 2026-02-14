import React from 'react';
import '../styles/global.css';

const CTA = ({ headerBackground = 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)' }) => {
    return (

        <div className="cta-wrapper" style={{
            maxWidth: '800px',
            margin: '40px auto 0', // Slightly reduced top margin
            boxShadow: '0 10px 30px rgba(0, 160, 233, 0.15)', // Blue shadow
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#fff',
            border: '4px solid var(--color-secondary)' // Prominent blue border
        }}>
            <div className="cta-header" style={{
                background: headerBackground, // Use the prop (default is handled in args)
                padding: '30px 10px', // Header padding: Top/Bottom 30px
                textAlign: 'center',
                position: 'relative',
                borderBottom: '1px solid #e0f2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px' // Reduced gap
            }}>
                <div className="cta-big-zero" style={{
                    fontSize: 'clamp(6rem, 12vw, 8rem)',
                    fontWeight: '900',
                    color: 'var(--color-secondary)', // #00A0E9 Blue
                    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    lineHeight: '0.8', // Tighter line height for better vertical alignment visual
                    fontFamily: 'var(--font-family-base)', // Consistent gothic for headings
                    flexShrink: 0,
                    transform: 'translateY(-2px)' // Fine-tune vertical position
                }}>
                    <span className="animate-rubber-band">0</span>
                </div>

                <div className="cta-text-wrapper" style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '15px' // Increased from 10px
                }}>
                    <div className="cta-sub-text" style={{
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
                        あなたの情報資産を<br className="mobile-br" />書籍に変える戦略をご提案
                    </div>
                    <div className="cta-main-title" style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Slightly reduced again
                        fontWeight: '900',
                        color: 'var(--color-secondary)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        lineHeight: '1.1',
                        fontFamily: 'var(--font-family-base)',
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
                padding: '30px 15px 50px', // Top 30px, Bottom 50px
                backgroundColor: '#fff'
            }}>
                {/* Checklist */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    maxWidth: '550px',
                    margin: '0 auto' // Removed bottom margin for tighter look
                }}>
                    {/* Description Text */}
                    <p className="cta-description" style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '40px',
                        padding: '0 10px'
                    }}>
                        あなたの発信・コンテンツの資産価値を診断し、<br />
                        あなただけの目的別、出版戦略をご提案いたします！
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
                            {/* Button Text Container */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Label Row */}
                                <div className="cta-sub-row">
                                    {/* Bubble "Imasugu" */}
                                    <div className="cta-bubble" style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '-25px', // Stick out from left (Desktop default)
                                        transform: 'translateY(-50%)',
                                        width: '85px',
                                        height: '85px',
                                        // Background/Border moved to child
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#e60012', // Red for urgency
                                        fontSize: '1.5rem',
                                        zIndex: 2
                                    }}>
                                        {/* Tail - rotated square behind circle */}
                                        <div className="cta-bubble-tail" style={{
                                            position: 'absolute',
                                            bottom: '-2px',
                                            right: '-2px',
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#f5a623',
                                            transform: 'rotate(25deg)',
                                            zIndex: -1
                                        }} />
                                        {/* Background circle */}
                                        <div className="cta-bubble-bg" style={{
                                            position: 'absolute',
                                            top: 0, left: 0, width: '100%', height: '100%',
                                            backgroundColor: '#fff',
                                            border: '3px solid #f5a623',
                                            borderRadius: '50%',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                                            zIndex: 0
                                        }} />
                                        <span style={{ display: 'inline-block', transform: 'rotate(-15deg)', fontWeight: '900', position: 'relative', zIndex: 2 }}>今すぐ</span>
                                    </div>

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
                                        120秒でカンタン入力
                                    </div>
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
