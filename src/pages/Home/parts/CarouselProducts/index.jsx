import React from 'react';
import {Button} from '@mui/material';
import {Stack} from '@mui/system';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Grid from '@mui/material/Unstable_Grid2';
import boat1 from '../../../../assets/images/slider/boat1.png';
import boat2 from '../../../../assets/images/slider/boat2.png';
import boat3 from '../../../../assets/images/slider/boat3.png';
import boat4 from '../../../../assets/images/slider/boat4.png';
import {motion} from 'framer-motion';

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
              <img src={boat1} alt="Image 1" width="350" />
            </SplideSlide>
            <SplideSlide>
              <img src={boat2} alt="Image 2" width="350" />
            </SplideSlide>
            <SplideSlide>
              <img src={boat3} alt="Image 3" width="350" />
            </SplideSlide>
            <SplideSlide>
              <img src={boat4} alt="Image 4" width="350" />
            </SplideSlide>
          </Splide>
        </Grid>
      </Grid>
    </div>
  );
}

export default CarouselProducts;
