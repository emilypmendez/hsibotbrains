import React from 'react';
// import events from '../services/Events'; {/* FIX THIS */}
import '../styling/Events.css';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import { AppBar, Toolbar, Grid, Paper } from '@mui/material';
import pinnacleplus from '../pages/assets/pinnacleplus.svg';

const Events = () => {

  return (
    <div>
      {/* Render employer profile */}
      <h1>Events</h1>
      {/* <h2>{events.title}</h2> */}
      {/* <h2>{events.date}</h2> */}
      {/* <h2>{events.time}</h2> */}
      {/* <h2>{events.location}</h2> */}
      {/* <h2>{events.description}</h2> */} 

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper>
              {/* Render your SVG icon here */}
              <img src={pinnacleplus} alt="Pinnacle Plus Logo" width="100" height="100" />
            </Paper>
          </Grid>
          {/* Add more Grid items for additional dashboard elements */}
        </Grid>
      </Container>

    <button><img src={'/workspaces/hsibotbrains/HSI.jpeg'}> </img></button>

    </div>
  );
}

export default Events;
