import {Button, Grid, Stack} from '@mui/material';
import React from 'react';
import ColorBox from '../../../../components/Elements/ColorBox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CelebrationIcon from '@mui/icons-material/Celebration';
import boat1 from '../../../../assets/images/boats/boat2.jpeg';
import boat2 from '../../../../assets/images/6.png';

function Photos() {
  return (
    <div className="ContainerPhotos">
      <Grid container spacing={2} className="containerImgFollow">
        <Grid xs={12} md={7} justifyContent="center" alignContent="center">
          <div className="ContainerImage">
            <ColorBox config={{top: '40%', left: '93%', height: '50%'}} />

            <img src={boat1} alt="" width="100%" />
          </div>
        </Grid>
        <Grid
          justifyContent="center"
          alignContent="center"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
          }}
        >
          <div className="ContainerText flex">
            <h2>MIAMI FANTASIA</h2>
            <Button color="primary" variant="text" endIcon={<ArrowForwardIcon />}>
              Follow us
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="ContainerImgInfo">
        <Grid md={7} justifyContent="center" alignContent="center">
          <div className="ContainerText mt-5">
            <h3>LUXURY RENTALS</h3>
            <p>Are you looking for exotic or luxury car rental in Miami?</p>
            <p>
              You want to rent a luxury car OF maybe exotic car? Get in touch with BoysToys Miami -
            </p>
            <p>
              Exotic and Luxury Car Rental Miami agency. Whether you need a exotic or luxury car
              rentals
            </p>
            <p>for business or for play.</p>

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
              <Button readOnly startIcon={<CelebrationIcon />}>
                Organize parties
              </Button>
              <Button readOnly startIcon={<CelebrationIcon />}>
                Organize parties
              </Button>
              <Button readOnly startIcon={<CelebrationIcon />}>
                Organize parties
              </Button>
            </Stack>
          </div>
        </Grid>
        <Grid xs={12} md={4} justifyContent="center" alignContent="center">
          <div className="ContainerImage">
            <img src={boat2} alt="boat1" width="100%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Photos;
