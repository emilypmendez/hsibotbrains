import React from 'react';
import ChartService from '../services/ChartService';
import '../styling/DashboardPage.css';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import { AppBar, Toolbar, Grid, Paper } from '@mui/material';
import pinnacleplus from '../pages/assets/pinnacleplus.svg';

function DashboardPage() {
  // Implement dashboard logic using ChartService

  return (
    <div className="dashboard-page">

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
          A premium health equity resource for all
        </Typography>


      </Container>
    </Box>
    
     
     { /* Render charts */}
    </div>
  );

}

export default DashboardPage;
