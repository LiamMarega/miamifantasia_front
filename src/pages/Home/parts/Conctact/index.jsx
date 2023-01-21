import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import LogoIMG from "../../../../assets/images/Logo.png"
import {Button, IconButton, ListItem, Stack, TextField} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import "./styles.scss"

function Contact() {
  return (
    <div className='containerContact'>
      <Grid container justifyContent='center' alignItems='center'>
        <h2 id='textBg'>CONTACT</h2>
        <Grid md={2}>
          <img src={LogoIMG} alt='LogoIMG' width={"20%"} style={{borderRadius: "50%"}} />
        </Grid>
        <Grid md={2}>
          <Stack spacing={1}>
            <ListItem>Miami -FL | USA</ListItem>
            <ListItem>+54 9 11 1234-5678</ListItem>
            <ListItem>liammarega85@gmail.com</ListItem>
          </Stack>
          <Stack direction='row'>
            <ListItem>
              <IconButton aria-label='delete'>
                <FacebookIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton aria-label='delete'>
                <InstagramIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton aria-label='delete'>
                <WhatsAppIcon />
              </IconButton>
            </ListItem>
          </Stack>
        </Grid>
        <Grid md={1}></Grid>
        <Grid md={3}>
          <Stack>
            <ListItem>
              <TextField label='Name' variant='outlined' />
            </ListItem>
            <ListItem>
              <TextField label='Email' variant='outlined' />
            </ListItem>
            <ListItem>
              <TextField label='Phone' variant='outlined' />
            </ListItem>
          </Stack>
        </Grid>

        <Grid md={3}>
          <Stack>
            <ListItem>
              <TextareaAutosize minRows={7.2} placeholder='Outlined' variant='outlined' />
            </ListItem>
            <ListItem>
              <Button variant='contained'>Submit</Button>
            </ListItem>
          </Stack>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
