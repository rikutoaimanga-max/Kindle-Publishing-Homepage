import React from 'react';
import '../styles/global.css';

const CTA = () => {
    return (
        <div style={{
            fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#fff'
        }}>
            {/* Header Section */}
            <div style={{
                background: '#333', // Dark background like the image
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: '#e0e0e0',
                    borderBottom: '1px solid #777',
                    display: 'inline-block',
                    paddingBottom: '5px'
                }}>
                    あなたの知識・経験を資産に変える60分
                </div>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: '#c5a059', // Gold color
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: '1.2'
                }}>
                    0円カウンセリング
                </div>
            </div>

            {/* Body Section */}
            <div style={{
                padding: '30px',
                backgroundColor: '#fff'
            }}>
                {/* Checklist */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    marginBottom: '30px',
                    maxWidth: '500px',
                    margin: '0 auto 30px'
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
                            borderBottom: '2px dotted #ddd', // The dotted line in the image
                            paddingBottom: '10px'
                        }}>
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '24px',
                                height: '24px',
                                backgroundColor: '#333',
                                color: '#fff',
                                marginRight: '15px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                flexShrink: 0,
                                borderRadius: '3px' // Slight rounded checklist box
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
                        className="cta-button-hover" // We will add hover effect in global CSS or inline if simple
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#0055ff', // Bright blue
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '15px 30px 15px 80px', // Left padding for the bubble
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            position: 'relative',
                            width: '100%',
                            maxWidth: '550px',
                            boxShadow: '0 4px 15px rgba(0, 85, 255, 0.4)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxSizing: 'border-box'
                        }}
                    >
                        {/* Bubble "Imasugu" */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#fff', // White bubble? Or blue with white border? Image looks like circle.
                            border: '2px solid #fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0055ff',
                            fontSize: '0.9rem',
                            fontWeight: '900',
                            lineHeight: '1.1',
                            textAlign: 'center',
                            zIndex: 1,
                            transform: 'translateY(-50%) rotate(-10deg)',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                        }}>
                            今すぐ
                        </div>

                        {/* Button Text Container */}
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <div style={{
                                fontSize: '0.9rem',
                                backgroundColor: '#fff',
                                color: '#0055ff',
                                display: 'inline-block',
                                padding: '2px 10px',
                                borderRadius: '10px',
                                marginBottom: '5px',
                                fontWeight: 'bold'
                            }}>
                                30秒でカンタン入力!
                            </div>
                            <div style={{ fontSize: '1.4rem' }}>
                                カウンセリングを予約する
                            </div>
                        </div>

                        {/* Arrow */}
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>&gt;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CTA;
