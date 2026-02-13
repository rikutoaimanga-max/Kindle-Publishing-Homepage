import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import HeroBottom from './components/HeroBottom';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Achievements from './components/Achievements';
import Profile from './components/Profile';
import ServiceScope from './components/ServiceScope';
import Plans from './components/Plans';
import Reasons from './components/Reasons';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';

// App Version: Reverted to Single Page for Stability
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='0, 160, 233'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <SmoothScrollWrapper>
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
                  まずは「診断」で、あなたの発信の資産価値を確かめてください。
                </p>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <CTA />
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </SmoothScrollWrapper>
    </>
  );
}

export default App;
