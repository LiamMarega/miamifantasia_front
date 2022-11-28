import {Button} from '@mui/material';
import {Stack} from '@mui/system';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Grid from '@mui/material/Unstable_Grid2';

import React from 'react';

function CarouselProducts() {
  return (
    <div className="containerCarouselProducts">
      <Grid container justifyContent="center" alignItems="center">
        <Grid xs={7}>
          <h3>TODAY SPECIALS</h3>
        </Grid>
        <Grid xs={4} justifyContent="center" alignItems="center">
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Button color="primary" readOnly startIcon={<CelebrationIcon />}>
              Organize parties
            </Button>
            <Button color="primary" readOnly startIcon={<DirectionsBoatIcon />}>
              Rent boats
            </Button>
            <Button color="primary" readOnly startIcon={<TimeToLeaveIcon />}>
              Rent cars
            </Button>
          </Stack>
        </Grid>
        <Grid xs={10} sx={{margin: 'auto'}}>
          <h2 id="textBg">RENTALS</h2>
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: 'loop',
              perPage: 3,
              rewind: true,
            }}
          >
            <SplideSlide>
              <img
                src="https://www.freeiconspng.com/thumbs/car-png/land-rover-range-rover-car-png-25.png"
                alt="Image 1"
                width="200"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://www.freeiconspng.com/thumbs/car-png/land-rover-range-rover-car-png-25.png"
                alt="Image 1"
                width="200"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://www.freeiconspng.com/thumbs/car-png/land-rover-range-rover-car-png-25.png"
                alt="Image 1"
                width="200"
              />
            </SplideSlide>
          </Splide>
        </Grid>
      </Grid>
    </div>
  );
}

export default CarouselProducts;
