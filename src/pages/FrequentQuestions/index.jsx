import React from 'react';
import { Box } from '@mui/system';
import ControlledAccordions from '../../components/Accordion';
import FyQ from '../../assets/files/FyQ.jsx';
import Navbar from '../../components/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer';
import BasePages from '../base';

function FrequentQuestions() {
  const navigate = useNavigate();
  //onclick navigate home
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <BasePages>
      <Box sx={{ padding: '7%' }}>
        <div className="flex-space">
          <h1>FAQ</h1>
          <div className="pointer" onClick={navigateHome}>
            <ArrowBackIcon />
          </div>
        </div>

        <ControlledAccordions data={FyQ} />
      </Box>
    </BasePages>
  );
}

export default FrequentQuestions;
