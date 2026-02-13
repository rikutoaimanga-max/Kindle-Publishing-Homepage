import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff', padding: '60px 0 60px', fontSize: '0.9rem', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px', textAlign: 'center' }}>
                    {/* Brand */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            集客・ブランディング特化型 Kindle出版代行サービス
                        </h2>
                        <p style={{ lineHeight: '1.8', color: '#ffffff' }}>
                            あなたの知識・経験を24時間働き続ける<br />
                            『最強の営業マン』へ。
                        </p>
                    </div>

                    {/* Operating Info Links - Horizontal */}
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                            <li><Link to="/legal" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link hover-underline-animation">特定商取引法に基づく表記</Link></li>
                            <li><Link to="/privacy-policy" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link hover-underline-animation">プライバシーポリシー</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', position: 'relative' }}>
                    <p style={{ color: '#ffffff', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} 集客・ブランディング特化型 Kindle出版代行サービス</p>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '-50px', // Moved up significantly
                            backgroundColor: '#fff',
                            color: '#0f1c3f',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                            transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ddd'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                        aria-label="トップに戻る"
                    >
                        ↑
                    </button>
                </div>
            </div>
            <style jsx>{`
                .footer-link:hover {
                    color: #fff !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
