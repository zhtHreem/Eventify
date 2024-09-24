import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import ToggleColorMode from './ToggleColorMode';
import AutocompleteHint from './AutocompleteHint';

// Define custom font styles
const fontStyles = {
  button: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    textTransform: 'none',
    color: 'black', // Set font color to black
  },
  logo: {
    width: '120px',
    height: 'auto',
    cursor: 'pointer',
  },
  menuItem: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    color: 'black', // Set font color to black
  },
};

function AppAppBar({ mode = 'light', toggleColorMode = () => {} }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate('/signup');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 0, backgroundColor: theme.palette.background.paper, backdropFilter: 'blur(6px)', borderBottom: `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img
                src={require('../images/logo.jpg')}
                alt="logo"
                style={fontStyles.logo}
              />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
            <Button component={Link} to="/" sx={fontStyles.button}>Home</Button>
            <Button component={Link} to="/AboutUs" sx={fontStyles.button}>About</Button>
            <Button component={Link} to="/createevent" sx={fontStyles.button}>Create Event</Button>
            <Button component={Link} to="/interestPage" sx={fontStyles.button}>Interested Events</Button>
            <AutocompleteHint />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            {user ? (
              <Button color="primary" variant="contained" sx={fontStyles.button} onClick={handleLogout}>Log out</Button>
            ) : (
              <>
                <Button color="primary" variant="text" sx={fontStyles.button} component={Link} to="/login">Sign in</Button>
                <Button color="primary" variant="contained" sx={fontStyles.button} component={Link} to="/signup">Sign up</Button>
              </>
            )}
          </Box>

          <Box sx={{ display: { md: 'none' } }}>
            <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250, p: 2 }}>
                <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                <Divider />
                <Button component={Link} to="/" sx={{ width: '100%', ...fontStyles.button }} onClick={() => setOpen(false)}>Home</Button>
                <Button onClick={() => scrollToSection('testimonials')} sx={{ width: '100%', ...fontStyles.button }} onClick={() => setOpen(false)}>Events</Button>
                <Button component={Link} to="/AboutUs" sx={{ width: '100%', ...fontStyles.button }} onClick={() => setOpen(false)}>About</Button>
                <Button component={Link} to="/createevent" sx={{ width: '100%', ...fontStyles.button }} onClick={() => setOpen(false)}>Create Event</Button>
                <Button component={Link} to="/interestPage" sx={{ width: '100%', ...fontStyles.button }} onClick={() => setOpen(false)}>Interested Events</Button>
                <Divider />
                {user ? (
                  <Button variant="contained" fullWidth  sx={{color:"white",backgroundColor:"orangered"}} onClick={handleLogout}>Log out</Button>
                ) : (
                  <>
                    <Button color="primary" variant="contained" fullWidth sx={fontStyles.button} component={Link} to="/signup">Sign up</Button>
                    <Button color="primary" variant="outlined" fullWidth sx={fontStyles.button} component={Link} to="/login">Sign in</Button>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']),
  toggleColorMode: PropTypes.func,
};

export default AppAppBar;
