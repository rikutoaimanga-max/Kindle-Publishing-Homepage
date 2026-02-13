import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="header-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link to="/" className="hover-opacity" style={{ color: '#fff', textDecoration: 'none' }}>
            集客・ブランディング特化型 Kindle出版代行サービス
          </Link>
        </div>
        <nav>
          <a href="https://forms.gle/BBb3FbiVkBH4qbFr6" target="_blank" rel="noopener noreferrer" id="header-cta-btn" className="btn header-button" style={{
            fontSize: '0.9rem',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(to right, #ffb74d, #ffcc80)',
            color: '#000',
            border: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(255, 183, 77, 0.5)' // Orange glow to match
          }}>
            0円出版カウンセリングはこちらから
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
