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
                    letterSpacing: '0.05em'
                }}>
                    あなたの知識・経験を資産に変える60分
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

                        {/* Arrow */}
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingLeft: '10px' }}>&gt;</span>
            </a>
        </div>
            </div >
        </div >
    );
};

export default CTA;
