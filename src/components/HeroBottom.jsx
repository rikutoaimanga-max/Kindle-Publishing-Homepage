import React from 'react';
import '../styles/global.css';
import CTA from './CTA';

const HeroBottom = () => {
    return (
        <section style={{
            backgroundColor: '#ffffff',
            padding: '40px 0 80px',
            textAlign: 'center'
        }}>
            <div className="container">
                <CTA />
            </div>
        </section>
    );
};

export default HeroBottom;
