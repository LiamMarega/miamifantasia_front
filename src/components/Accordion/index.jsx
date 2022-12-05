import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss';

export default function ControlledAccordions({ data }) {
  const [expanded, setExpanded] = useState('panel-0');

  const handleChange = (panel) => (event, d) => {
    setExpanded(d ? panel : false);
  };

  return (
    <div className="ContainerAccoirdion">
      {data?.map((data, idx) => (
        <Accordion
          expanded={expanded === `panel-${idx}`}
          onChange={handleChange(`panel-${idx}`)}
          key={data?.summary + idx}
          sx={{
            background: 'transparent',
            marginBottom: '2%',
            border:
              expanded === `panel-${idx}`
                ? '1px solid  rgba(228, 145, 2, 0.5)'
                : '1px solid  gray',
            boxShadow: 'none',
            '&:before': {
              display: 'none'
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ textTransform: 'lowercase' }}
          >
            <Typography
              sx={{
                width: data?.summary2 ? '40%' : '100%',
                lineHeight: 1.1,
                flexShrink: 0,
                fontWeight: '700',
                '&:first-letter': {
                  textTransform: 'uppercase'
                }
              }}
            >
              {data?.summary}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {data?.summary2}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              id="DetailsText"
              sx={{
                color: '#626262 !important',
                fontWeight: '300',
                lineHeight: 1.1
              }}
            >
              {data?.detail}
              <br />
              <br />
              {data?.detail2}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
