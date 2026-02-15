import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import './FloatingCTA.css';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="floating-cta-container">
            <a
                href="https://forms.gle/BBb3FbiVkBH4qbFr6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    boxShadow: '0 -4px 10px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    lineHeight: 1.2
                }}>
                    <span style={{ fontSize: '0.8rem', color: '#fff' }}>＼120秒でカンタン入力／</span>
                    <span>無料相談を予約する</span>
                </div>
            </a>
        </div>
    );
};

export default FloatingCTA;
