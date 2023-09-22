import * as React from 'react';
import { Link , useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem, Avatar, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'; // Import the SearchIcon component
import pinnacleplus from '../assets/pinnacleplus.svg';

import '../../styling/navbar.css'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { pathname } = useLocation();
  const { navigate } = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'EMILY',
    isUser: false,
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleLogout = () => {
    // Clear the user session or authentication token (replace with your own logic)
    // For example, if you're using localStorage:
    localStorage.removeItem('authToken');
  };

  return (
    <AppBar
      position="fixed"
      className={active || pathname !== '/' ? 'navbar active' : 'navbar'}
      sx={{
        height: 'auto', // Adjust the height as needed
        background: active || pathname !== '/' ? 'primary.main' : 'background.default',
        color: active || pathname !== '/' ? 'background.default' : 'primary.main',
      }}
    >
      <Container maxWidth="xl" sx={{ height: 'auto' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="link">
              <span className="text">
              <img src={pinnacleplus} alt="Pinnacle Plus Logo" width="250" height="100" />
              </span>
            </Link>
          </Typography>

          {/* Conditionally render the search bar when the user is logged in */}
          {currentUser.isUser && (
            <div className="search">
              <TextField
                sx={{ backgroundColor: 'background.default', borderRadius: '5px', width: '300px' }}
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </div>
          )}

          <Link
            component={RouterLink}
            to="/dashboard"
            underline="none"
          >
            <Button variant="contained" size="xl" sx={{ backgroundColor:'white', color:'#000' }}>
              Get Started
            </Button>
          </Link>

          {/*
          <div className="links">
            {/* Check if the user is logged in */} {/*}
            {currentUser ? (
              <>
                <IconButton onClick={handleMenuOpen}>
                  <Avatar
                    alt={currentUser?.username}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqekwL2LW2-NBO_FE2f2IjZQnp_1xl-shGcg&usqp=CAU"
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  {/* Display user menu options */} {/*}
                  {currentUser.isUser && (
                    <>
                      <MenuItem component={Link} to="/dashboard">
                        Dashboard
                      </MenuItem>
                      <MenuItem component={Link} to="/events">
                        Events
                      </MenuItem>
                    </>
                  )}
                  <MenuItem component={Link} to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/settings">
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              // Display the "login" button when the user is not logged in
              <Button onClick={handleLogin} variant="outlined">
                Login
              </Button>
            )}
          </div> */}
        </Toolbar>
      </Container>
    </AppBar>
  );  
};

export default Navbar;