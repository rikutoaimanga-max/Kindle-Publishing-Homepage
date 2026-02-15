import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const NotFound = () => {
    return (
        <div className="not-found-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f9f9f9',
            color: '#333'
        }}>
            <h1 style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                color: 'var(--color-secondary)',
                fontWeight: 'bold'
            }}>404</h1>
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                lineHeight: '1.6'
            }}>
                お探しのページは見つかりませんでした。<br />
                URLが間違っているか、削除された可能性があります。
            </p>
            <Link to="/" className="cta-button" style={{
                backgroundColor: 'var(--color-secondary)',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'opacity 0.3s'
            }}>
                トップページに戻る
            </Link>
        </div>
    );
};

export default NotFound;
