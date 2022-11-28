import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './pages/Home';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import ScrollOnTop from './assets/utils/router/scrollOnTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollOnTop>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </ScrollOnTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
