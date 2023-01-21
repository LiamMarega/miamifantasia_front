import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import LogoIMG from "../../assets/images/Logo.png"
import {Button, IconButton, ListItem, Stack, TextField} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import "./styles.scss"

function Footer() {
  const openLink = (link) => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className='containerContact'>
      <Grid container justifyContent='center' alignItems='center'>
        <h2 id='textBg'>CONTACT</h2>
        <Grid md={2}>
          <img src={LogoIMG} alt='LogoIMG' width={"40%"} style={{borderRadius: "50%"}} />
        </Grid>
        <Grid md={2}>
          <Stack spacing={1}>
            <ListItem>Miami -FL | USA</ListItem>
            <ListItem>+54 9 11 1234-5678</ListItem>
            <ListItem className='pointer' onClick={() => openLink("mailto:liammarega85@gmail.com")}>
              liammarega85@gmail.com
            </ListItem>
          </Stack>
          <Stack direction='row'>
            <ListItem>
              <IconButton aria-label='delete'>
                <FacebookIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton aria-label='delete'>
                <InstagramIcon
                  onClick={() => openLink("https://www.instagram.com/empresasoluciones/")}
                />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton aria-label='delete'>
                <WhatsAppIcon
                  onClick={() =>
                    openLink(
                      "https://api.whatsapp.com/send?phone=+5493436203341&text=%C2%A1Hola!%20%20Me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20desarrollo%20web.%20%20%20%20"
                    )
                  }
                />
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
              <TextareaAutosize minRows={7.2} placeholder='Message' variant='outlined' />
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

export default Footer
