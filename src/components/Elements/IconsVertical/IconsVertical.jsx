import React from 'react';
import { Stack } from '@mui/system';
import { ListItem } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

function IconsVertical({ config }) {
  const styles = {
    position: 'absolute',
    top: config?.top || 'initial',
    left: config?.left || 'initial',
    height: config?.height || '100px',
    zIndex: config?.zIndex || 2
  };

  const sizeSvg = {
    width: config?.size || '30px',
    height: config?.size || '30px',
    cursor: 'pointer'
  };

  return (
    <div style={styles}>
      <Stack spacing={6}>
        <ListItem>
          <InstagramIcon sx={sizeSvg} />
        </ListItem>
        <ListItem>
          <TwitterIcon sx={sizeSvg} />
        </ListItem>
        <ListItem>
          <WhatsAppIcon sx={sizeSvg} />
        </ListItem>
        <ListItem>
          <FacebookIcon sx={sizeSvg} />
        </ListItem>
        <ListItem>
          <MailIcon sx={sizeSvg} />
        </ListItem>
      </Stack>
    </div>
  );
}

export default IconsVertical;
