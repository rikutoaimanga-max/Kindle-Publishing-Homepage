import React from 'react';
import '../styles/global.css';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      padding: '1rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--color-secondary)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>
          KINDLE PUBLISHER {/* Placeholder Logo */}
        </div>
        <nav>
          <a href="#cta" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
            無料カウンセリング
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
