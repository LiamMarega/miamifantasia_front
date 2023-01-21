import React from "react"
import {Stack} from "@mui/system"
import {ListItem} from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookIcon from "@mui/icons-material/Facebook"
import MailIcon from "@mui/icons-material/Mail"

function IconsVertical({config}) {
  const styles = {
    position: "absolute",
    top: config?.top || "initial",
    left: config?.left || "initial",
    height: config?.height || "100px",
    zIndex: config?.zIndex || 2,
  }

  const sizeSvg = {
    width: config?.size || "30px",
    height: config?.size || "30px",
    cursor: "pointer",
  }

  const openLink = (link) => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div style={styles}>
      <Stack spacing={6}>
        <ListItem>
          <InstagramIcon
            sx={sizeSvg}
            onClick={() => openLink("https://www.instagram.com/empresasoluciones/")}
          />
        </ListItem>
        <ListItem>
          <TwitterIcon sx={sizeSvg} onClick={() => openLink()} />
        </ListItem>
        <ListItem>
          <WhatsAppIcon
            sx={sizeSvg}
            onClick={() =>
              openLink(
                "https://api.whatsapp.com/send?phone=+5493436203341&text=%C2%A1Hola!%20%20Me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20desarrollo%20web.%20%20%20%20"
              )
            }
          />
        </ListItem>
        <ListItem>
          <FacebookIcon sx={sizeSvg} onClick={() => openLink()} />
        </ListItem>
        <ListItem>
          <MailIcon sx={sizeSvg} onClick={() => openLink("mailto:liammarega85@gmail.com")} />
        </ListItem>
      </Stack>
    </div>
  )
}

export default IconsVertical
