import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import Navbar from './components/Navbar';
// import ProTip from './components/ProTip';
// import ParallaxBackground from './components/ParallaxBackground';
import FooterCopyright from './components/FooterCopyright';
import PoweredByKPMG from './components/PoweredByKPMG';


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
          minHeight: '125vh',
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
            A premium health equity resource for all
          </Typography>

          {/* FOOTER CONTENT */}
            <PoweredByKPMG />
          {/* END OF FOOTER CONTENT */}

        </Container>
      </Box>
      {/* END OF HEADER */}

      {/* PARTNER INSTITUTIONS */}
       <Box 
        bgcolor="#003087" // Set the background color here // #007954
        sx={{
          position: 'relative',
          minHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
        }}
        >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="WHITE" gutterBottom sx={{ marginTop: '4rem', fontWeight:'bold' }}>
            Partner Institutions
          </Typography>
          <Typography variant="h5" align="center" color="WHITE" paragraph sx={{ marginTop: '1rem' }}>
            Learn more about the program and its benefits to you.
          </Typography>
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
            Get Started Today
          </Typography>
          <Typography variant="h5" align="center" color="#text.secondary" paragraph sx={{ marginTop: '1rem' }}>
            Sign up for a free account and start your journey to better health.
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
