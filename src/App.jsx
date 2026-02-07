import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroBottom from './components/HeroBottom';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Achievements from './components/Achievements';
import Profile from './components/Profile';
import Plans from './components/Plans';
import Reasons from './components/Reasons';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HeroBottom />
      <Problem />
      <Solution />
      <Achievements />
      <Profile />
      <Plans />
      <Reasons />
      <div id="cta">
        <FAQ />
        {/* FAQ contains the final CTA "Closing" section as per request structure */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
