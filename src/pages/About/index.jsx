import { Box } from '@mui/system';
import React from 'react';
import BasePages from '../base';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import boat from '../../assets/images/boats/745CA952-6DA2-4E46-9C35-EE6DC836C49D_1_105_c.jpeg';
import boat2 from '../../assets/images/boats/B7D88445-8ABB-4EA5-80E6-67D1C5CB658E_1_105_c.jpeg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles.scss';
import ImageList from '../../components/ImageList';
import dataIMG from '../../assets/files/imagesAbout.jsx';
import QuiltedImageList from '../../components/ImageList';
import { useNavigate } from 'react-router';

function About() {
  const navigate = useNavigate();

  function navigateHome() {
    navigate('/');
  }

  return (
    <BasePages>
      <Box
        className="ContainerAboutPage"
        sx={{ padding: '7%' }}
        mt={10}
        mb={10}
      >
        <div className="flex-space">
          <h1>ABOUT US</h1>
          <div className="pointer" onClick={navigateHome}>
            <ArrowBackIcon />
          </div>
        </div>

        <Grid container spacing={3}>
          <Grid xs={12} md={8}>
            <p>
              "Experiences Unlimited" is a company founded by Sofia, a
              passionate entrepreneur who is dedicated to providing unique and
              exciting experiences to people. Inspired by the need of many
              people to find something different and exciting to do in their
              free time, Sofia brought together a team of experts in different
              areas to create unforgettable experiences. Since its inception,
              "Experiences Unlimited" has been successful in the market due to
              its focus on quality and service. The company has become a popular
              choice for those seeking to live exciting and unique experiences,
              and its packages have become a popular gift for special occasions.
              Sofia and her team work constantly to improve and expand their
              offering of experiences, and they are committed to making each
              experience safe, fun, and memorable for their customers.
            </p>
          </Grid>
          <Grid xs={12} md={3}>
            <img src={boat} alt="boat" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid xs={12} md={3}>
            <img src={boat2} alt="boat" />
          </Grid>
          <Grid xs={12} md={8}>
            <p>
              We are a leading company in the luxury rental market. We
              specialize in offering our clients exclusive, high-quality
              properties so they can enjoy unforgettable vacations. We have a
              wide selection of luxury villas, chalets, country houses and other
              types of properties in the best locations in the world. In
              addition, we offer personalized and attentive service to ensure
              that our clients have an unparalleled luxury rental experience. We
              work with a highly trained and dedicated team that ensures that
              every detail is taken care of and that our clients enjoy a perfect
              stay. If you are looking for a luxury property for your next
              vacation, do not hesitate to contact us. We will be happy to help
              you find the perfect property for you.
            </p>
          </Grid>
        </Grid>
        <QuiltedImageList itemData={dataIMG} />
      </Box>
    </BasePages>
  );
}

export default About;
