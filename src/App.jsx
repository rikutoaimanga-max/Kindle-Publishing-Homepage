import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Legal from './components/Legal';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';
import AnimatedCursor from 'react-animated-cursor';
import './index.css';

// App Version: Routing Enabled
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
      <BrowserRouter>
        <SmoothScrollWrapper>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </div>
        </SmoothScrollWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
