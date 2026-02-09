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
import Footer from './components/Footer';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';

// App Version: CustomCursor Fix 1.2 (react-animated-cursor)
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='255, 255, 255'
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
            {/* FAQ contains the final CTA "Closing" section as per request structure */}
          </div>
          <Footer />
        </div>
      </SmoothScrollWrapper>
    </>
  );
}

export default App;
