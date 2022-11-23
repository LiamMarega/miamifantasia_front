import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { padding } from '@mui/system';
import { Button } from '@mui/material';

function Carousel() {
  return (
    <div className="ContainerCarouselComponent">
      <Grid container>
        <Grid md={5}>
          <div className="containerText">
            <div className="text">
              <h1>LUXURY LIFESTYLE RENTALS</h1>
              <p>loremp ipsum dolor sit amet.</p>
              <Button variant="outlined" sx={{ padding: ' 3% 7%' }}>
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
                padding: 0
              }}
            >
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2022/10/07/12/02/sunset-7504891_1280.jpg"
                  alt="Image 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://cdn.pixabay.com/photo/2022/10/09/08/43/road-7508538_1280.jpg"
                  alt="Image 2"
                />
              </SplideSlide>
            </Splide>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Carousel;
