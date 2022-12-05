import React from 'react';

import './styles.scss';
import Navbar from '../../components/Navbar';
import Carousel from './parts/Carousel';
import CarouselProducts from './parts/CarouselProducts';
import ColorBox from '../../components/Elements/ColorBox';
import Photos from './parts/Photos';
import Contact from './parts/Conctact';
import Footer from '../../components/Footer';
import BasePages from '../base';

function HomeScreen() {
  return (
    <div className="containerHomeScreen">
      <BasePages>
        <ColorBox config={{ top: 0, left: 0, height: '170px' }} />
        <Carousel />
        <CarouselProducts />
        <Photos />
      </BasePages>
    </div>
  );
}

export default HomeScreen;
