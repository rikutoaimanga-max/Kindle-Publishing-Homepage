import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HeroBottom from './HeroBottom';
import Problem from './Problem';
import Solution from './Solution';
import Achievements from './Achievements';
import Profile from './Profile';
import ServiceScope from './ServiceScope';
import Plans from './Plans';
import Reasons from './Reasons';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <HeroBottom />
            <Problem />
            <Solution />
            <Achievements />
            <Profile />
            <ServiceScope />
            <Plans />
            <Reasons />
            <div id="cta">
                <FAQ />
            </div>
            <section style={{ backgroundColor: '#fff', padding: '80px 0', color: '#333' }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                            まずは「診断」で、<br className="mobile-br" />あなたの発信の資産価値を<br className="mobile-br" />確かめてください。
                        </p>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <CTA />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
