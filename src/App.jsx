import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/Home';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
