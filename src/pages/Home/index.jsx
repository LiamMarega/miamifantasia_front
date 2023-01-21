import React from 'react';

import './styles.scss';
import Navbar from '../../components/Navbar';
import Carousel from './parts/Carousel';
import CarouselProducts from './parts/CarouselProducts';
import ColorBox from '../../components/Elements/ColorBox';
import Photos from './parts/Photos';
import BasePages from '../base';
import IconsVertical from '../../components/Elements/IconsVertical/IconsVertical';

function HomeScreen() {
  return (
    <div className="containerHomeScreen">
      <BasePages>
        <ColorBox config={{top: 0, left: 0, height: '170px'}} />

        <Carousel />
        <IconsVertical config={{top: '35vh', left: '10vh', height: '100%', size: '25px'}} />
        <CarouselProducts />
        <Photos />
      </BasePages>
    </div>
  );
}

export default HomeScreen;
