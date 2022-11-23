import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './styles.scss';
import Navbar from '../../components/Navbar';
import Carousel from './parts/Carousel';
import CarouselProducts from './parts/CarouselProducts';
import ColorBox from '../../components/Elements/ColorBox';
import Photos from './parts/Photos';

function HomeScreen() {
  return (
    <div className="containerHomeScreen">
      <ColorBox config={{ top: 0, left: 0, height: '170px' }} />
      <Navbar />
      <Carousel />
      <CarouselProducts />
      <Photos />
    </div>
  );
}

export default HomeScreen;
