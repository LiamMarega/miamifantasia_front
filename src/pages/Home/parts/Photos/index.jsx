import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
import ColorBox from '../../../../components/Elements/ColorBox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Photos() {
  return (
    <div className="ContainerPhotos">
      <Grid container spacing={2} className="containerImgFollow">
        <Grid xs={12} md={7} justifyContent="center" alignContent="center">
          <div className="ContainerImage">
            <ColorBox config={{ top: '40%', left: '93%', height: '50%' }} />

            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png"
              alt=""
              width="100%"
            />
          </div>
        </Grid>
        <Grid
          justifyContent="center"
          alignContent="center"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5
          }}
        >
          <div className="ContainerText flex">
            <h2>MIAMI FANTASIA</h2>
            <Button
              color="primary"
              variant="text"
              endIcon={<ArrowForwardIcon />}
            >
              Follow us
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="ContainerImgInfo">
        <Grid md={7} justifyContent="center" alignContent="center">
          <div className="ContainerText flex">
            <h3>LUXURY RENTALS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, sapiente.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, sapiente.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, sapiente.
            </p>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
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
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png"
              alt=""
              width="100%"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Photos;
