import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Legal from './components/Legal';
import PrivacyPolicy from './components/PrivacyPolicy';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// App Version: Reverted to Single Page for Stability
function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='255, 165, 0'
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </SmoothScrollWrapper>
    </Router>
  );
}

export default App;
