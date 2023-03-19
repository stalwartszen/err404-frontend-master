import { InsightsOutlined, MenuOpen } from '@mui/icons-material';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"
import { useStateContext } from '../context';

const useStyle = makeStyles({
  Typography: {
    '&:hover': {
      color: 'rgb(212, 228, 255)'
    }
  },
})

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyle()
  const navigate = useNavigate()

  const { getPatientByAddress, address, contract, connect, disconnect } = useStateContext()

  const handleContext = async () => {
    const result = await getPatientByAddress(address)
    if (!result.name) return navigate('/patient/register')
    navigate('/patient/publish')
  }

  // useEffect(() => {
  //   if (address) handleContext()
  // }, [address, contract])

  return (
    <AppBar className="header" position="static" sx={{ top: "0", zIndex: "10", background: "rgba(255, 255, 255, 0)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(50px)", position: "fixed" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            Med DOC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOpen />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <MenuItem onClick={() => { }} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/login"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Login
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/classroom"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Classroom
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/notices"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Notices
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="https://trackfinity.netlify.app/"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Video Calling
                </Typography>
              </MenuItem>

            </Menu>
          </Box>
          <InsightsOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EMPROVE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {<Typography component={Link} to="about" className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none' }}>
              About
            </Typography>}
            <Typography component={Link} to={"dashboard/home"} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Dashboards
            </Typography>


            {/* {orgName && <>
              <Typography component={Link} to="/classroom" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Classroom
              </Typography>
              <Typography component={Link} to={role === "Student" ? "/subjects" : "/courses"} state={role === "Student" && { id: JSON.parse(localStorage.getItem("profile")).courseid }} className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Courses
              </Typography>
              <Typography component={Link} to="/assignedtests" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Tests
              </Typography>
              <Typography component={Link} to="/notices" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Notices
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && <Typography component="a" href="https://trackfinity.netlify.app/"
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Video Calling
              </Typography>}
              {JSON.parse(localStorage.getItem("role")) === "Student" && <Typography component="a" href="http://webknights.pythonanywhere.com/profile" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Profile
              </Typography>}
              <Typography component="a" href="https://google-calendar-clone.netlify.app/" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Calendar
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && JSON.parse(localStorage.getItem("role")) !== "Developer" && <Typography component="a" href="http://webknights.pythonanywhere.com/classes"
                sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                Classes
              </Typography>} */}
            {/* </>} */}


            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button> 
            ))}*/}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography component={Link} to={"/"} onClick={() => {
              localStorage.removeItem("user-vjti");
              localStorage.removeItem("role");
            }} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Logout
            </Typography>
          </Box>
          {address ? <Button onClick={disconnect}>Disconnect</Button> : <Button onClick={connect}>Connect</Button>}
        </Toolbar>
      </Container>
    </AppBar>

  )
}

export default Navbar