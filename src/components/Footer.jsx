import React from 'react';
import '../styles/global.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer style={{ backgroundColor: '#0f1c3f', color: '#ffffff', padding: '60px 0 20px', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    {/* Column 1: Brand */}
                    <div style={{ textAlign: 'left' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ color: 'var(--color-accent)' }}>📖</span> Kindle出版代行サービス
                        </h2>
                        <p style={{ lineHeight: '1.8', color: '#ccc' }}>
                            あなたの知識を資産に変える<br />
                            完全無料Kindle制作サービス
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>サービス</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><a href="#hero" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">サービス紹介</a></li>
                            <li><a href="#solution" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">メリット</a></li>
                            <li><a href="#flow" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">制作の流れ</a></li>
                            <li><a href="https://forms.gle/BBb3FbiVkBH4qbFr6" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">よくある質問</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company Info */}
                    <div style={{ textAlign: 'left' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>運営情報</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">特定商取引法に基づく表記</a></li>
                            <li><a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} className="footer-link">プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', position: 'relative' }}>
                    <p style={{ color: '#888', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Kindle出版代行サービス</p>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '20px', // Align with the copyright text roughly or slightly above
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
