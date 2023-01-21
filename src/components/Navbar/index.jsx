import React, {useEffect, useState} from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import LogoIMG from "../../assets/images/Logo.png"
import PhoneIcon from "@mui/icons-material/Phone"
import SegmentIcon from "@mui/icons-material/Segment"
import {useNavigate} from "react-router"

const pages = [
  {name: "Home", url: ""},
  {name: "About us", url: "about"},
  {name: "Contats", url: "contact"},
  {name: "FAQ", url: "faq"},
]

function Navbar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [navBarbackground, setNavBarbackgorund] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBarbackgorund(true)
    } else {
      setNavBarbackgorund(false)
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)

    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  const navigateTo = (url) => {
    navigate(`/${url}`)
  }

  const navbarStyle = {
    backgroundColor: navBarbackground ? "#1d1c1d" : "transparent",
    color: navBarbackground ? "#000" : "#fff",
    border: "none",
    boxShadow: "none",
  }

  return (
    <AppBar position='fixed' sx={navbarStyle}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{height: "14vh"}}>
          <img src={LogoIMG} alt='logo' width='30px' style={{borderRadius: "50%"}} />

          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "flex", md: "none"},
              marginLeft: "50%",
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={page.name + idx} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex"},
              marginLeft: "10%",
            }}
          >
            {pages.map((page, idx) => (
              <Button
                key={page + idx}
                onClick={() => navigateTo(page.url)}
                sx={{
                  my: 2,
                  marginLeft: "6%",
                  color: "white",
                  display: "block",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box>
            <Button variant='contained' color='warning' startIcon={<PhoneIcon />}>
              +54 9 11 1234-5678
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
