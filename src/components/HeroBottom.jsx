import React from 'react';
import '../styles/global.css';
import ctaImage from '../assets/cta_banner.png';

const HeroBottom = () => {
    return (
        <section style={{
            backgroundColor: '#ffffff',
            padding: '40px 0 80px',
            textAlign: 'center'
        }}>
            <div className="container">
                <a href="https://forms.gle/BBb3FbiVkBH4qbFr6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '100%', maxWidth: '800px', transition: 'transform 0.3s' }} className="hover-scale">
                    <img src={ctaImage} alt="無料カウンセリング" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply' }} />
                </a>
            </div>
        </section>
    );
};

export default HeroBottom;
