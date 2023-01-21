import React from 'react';
import {BrowserRouter, Route, Routes, useLocation, useRoutes, Router} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import HomeScreen from './pages/Home';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

import ScrollOnTop from './assets/utils/router/scrollOnTop';
import FrequentQuestions from './pages/FrequentQuestions';
import About from './pages/About';

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <div className="App">
          <ScrollOnTop>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/faq" element={<FrequentQuestions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<About />} />
            </Routes>
          </ScrollOnTop>
        </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
