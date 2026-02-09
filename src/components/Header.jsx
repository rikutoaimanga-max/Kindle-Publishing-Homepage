import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)', // White background matching site theme
      padding: '1rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #e0f2ff', // Subtle blue border
      boxShadow: '0 2px 10px rgba(0, 160, 233, 0.1)' // Soft blue shadow
    }}>
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="header-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>
          集客・ブランディング特化型 Kindle出版代行サービス
        </div>
        <nav>
          <a href="https://forms.gle/BBb3FbiVkBH4qbFr6" target="_blank" rel="noopener noreferrer" className="btn btn-primary header-button" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', color: '#000' }}>
            0円出版カウンセリングはこちらから
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
