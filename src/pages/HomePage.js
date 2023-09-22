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
          <Typography variant="p" align="center" color="#text.secondary" paragraph sx={{ marginTop: '1rem' }}>
            Pinnacle Plus is a network application that connects users with a unique and immersive platform. We focus on creating health equity, wealth creation, and exposure to an extensive social network. 
            <br/><br/>
             At Pinnacle Plus, we have identified economic gaps in quality of life and how there is a noticeable trend in the health quality of Latino communities. The leading factor of health inequity in Latino communities is heart disease. As an opportunity to launch our platform, we have focused on the Bronx, NY  area as our first center of platform launch.
            To create and sustain a healthy lifestyle in our Latino communities, we have focused on not reshaping the health industry but pivoting from a different angle. The health inequity problem first had to be identified as a wealth concern. Due to the financial lack of financial accessibility, Latino communities are inclined to low-quality health services or no services at all. This critical focus drives our platform solution, which revolves around health partners using our platform to provide a tailored service. Key features such as paying for medical expenses, early testing, or simply booking an appointment will be provided through free access to all users.
            <br/><br/>
            This free access component will be possible through the partners that sign up to use our network and are incentivized to create events such as fundraisers, events, and overall company exposure.  This exchange of marketability for our partners will also feature a unique tailored experience around their crucial company events, job opportunities, and impactful community solutions. Incentivizing as an easy access direct connection to the communities, companies such as KPMG or nonprofits like the Association of Latino Professionals for America seek to serve or retain talent. The solution today is providing medical assistance in the hands of communities and long-term by investing in teaching/ providing events that will educate our Latino community in the Bronx.
          </Typography>
          <PoweredByKPMG />
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
