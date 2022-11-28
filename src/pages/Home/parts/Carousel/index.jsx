import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {padding} from '@mui/system';
import {Button} from '@mui/material';
import boat1 from '../../../../assets/images/1.png';
import boat2 from '../../../../assets/images/2.png';
import boat3 from '../../../../assets/images/3.png';
import boat4 from '../../../../assets/images/4.png';
import boat5 from '../../../../assets/images/5.png';

function Carousel() {
  return (
    <div className="ContainerCarouselComponent">
      <Grid container>
        <Grid md={5}>
          <div className="containerText">
            <div className="text">
              <h1>LUXURY LIFESTYLE RENTALS</h1>
              <p>loremp ipsum dolor sit amet.</p>
              <Button variant="outlined" sx={{padding: ' 3% 7%'}}>
                Reserve now
              </Button>
            </div>
          </div>
        </Grid>
        <Grid md={7}>
          <div className="containerCarousel">
            <Splide
              aria-label="My Favorite Images"
              options={{
                width: '100%',
                type: 'loop',
                autoplay: true,
                arrows: false,
                padding: 0,
              }}
            >
              <SplideSlide>
                <img src={boat1} alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src={boat2} alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src={boat3} alt="Image 3" />
              </SplideSlide>
              <SplideSlide>
                <img src={boat4} alt="Image 4" />
              </SplideSlide>
              <SplideSlide>
                <img src={boat5} alt="Image 5" />
              </SplideSlide>
            </Splide>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Carousel;
