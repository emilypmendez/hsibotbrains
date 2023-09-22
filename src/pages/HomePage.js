import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import Navbar from './components/Navbar';
// import ProTip from './components/ProTip';
// import ParallaxBackground from './components/ParallaxBackground';
import FooterCopyright from './components/FooterCopyright';


const HomePage = () => {
  return (
    <>
      <Navbar sx={{ zIndex: 2 }} />
      {/* <ParallaxBackground /> */}

      {/* HEADER */}
      <Box
        bgcolor="transparent" // Set the background color here // #007954
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
      > 
      
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: 'transparent', // Make the inner container background transparent
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            borderRadius: '16px', // Add a border radius for a card-like appearance
          }}
        >
          <Typography variant="h1" fontWeight="bold" mb={3} textAlign="center">
            Welcome To Pinnacle Plus
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            A premium health equity for all
          </Typography>
  
      
          <Link
            component={RouterLink}
            to="/dashboard"
            underline="none"
          >
            <Button variant="contained" size="small" >
              DASHBOARD
            </Button>
          </Link>

          <Link
            component={RouterLink}
            to="/events"
            underline="none"
          >
            <Button variant="contained" size="small" >
              EVENTS
            </Button>
          </Link>

          

        </Container>
      </Box>
      {/* END OF HEADER */}

      {/* PARTNER INSTITUTIONS */}
       <Box 
        bgcolor="#003087" // Set the background color here // #007954
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
        >
        <Container maxWidth="md">
          <Typography variant="h5" align="center" color="WHITE" gutterBottom sx={{ marginTop: '4rem' }}>
            LOVED BY ORGANIZATIONS & UNIVERSITIES NATIONWIDE
          </Typography>
          City University of New York
        </Container>
       </Box>   
      {/* END OF */}

      {/* MAIN CONTENT -- HOW IT WORKS */}
       <Box 
        bgcolor="#fff" // Set the background color here // #007954
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
        >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="text.primary" gutterBottom sx={{ marginTop: '4rem', fontWeight:'bold' }}>
            How It Works
          </Typography>
          <Typography variant="h5" align="center" color="#text.secondary" paragraph sx={{ marginTop: '1rem' }}>
            We use the latest in AI technology to help you find the perfect job.
          </Typography>
        </Container>
       </Box> 
      {/* END OF MAIN CONTENT */}

      {/* FOOTER CONTENT */}
        <FooterCopyright />
      {/* END OF FOOTER CONTENT */}
    </>
  );
};

export default HomePage;
