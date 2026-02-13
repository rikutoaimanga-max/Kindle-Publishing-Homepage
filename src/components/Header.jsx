import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'var(--color-secondary)', // Main Blue Color
      padding: '1rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #0088cc', // Slightly darker blue border
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="header-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
          集客・ブランディング特化型 Kindle出版代行サービス
        </div>
        <nav>
          <a href="https://forms.gle/BBb3FbiVkBH4qbFr6" target="_blank" rel="noopener noreferrer" className="btn btn-primary header-button" style={{
            fontSize: '0.9rem',
            padding: '0.5rem 1rem',
            color: 'var(--color-secondary)',
            backgroundColor: '#fff',
            fontWeight: 'bold'
          }}>
            0円出版カウンセリングはこちらから
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
