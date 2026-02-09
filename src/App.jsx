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
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <SmoothScrollWrapper>
      <CustomCursor />
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
  );
}

export default App;
