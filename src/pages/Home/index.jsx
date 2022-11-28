import React from 'react';

import './styles.scss';
import Navbar from '../../components/Navbar';
import Carousel from './parts/Carousel';
import CarouselProducts from './parts/CarouselProducts';
import ColorBox from '../../components/Elements/ColorBox';
import Photos from './parts/Photos';
import Contact from './parts/Conctact';

function HomeScreen() {
  return (
    <div className="containerHomeScreen">
      <ColorBox config={{top: 0, left: 0, height: '170px'}} />
      <Navbar />
      <Carousel />
      <CarouselProducts />
      <Photos />
      <Contact />
    </div>
  );
}

export default HomeScreen;
