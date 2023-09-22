import React from 'react';
//import './src/styling/ProgramPage.css.css';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, Link } from '@mui/material';

function ProgramPage() {
  // Implement payment logic using src/styling/Events.css

  return (
    <div>
      {/* Render payment form */}

      <Typography variant="h1" fontWeight="bold" mb={3} textAlign="center">
            #HSIBOTBRAINS
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            There are 13 Universities competing against each other to create the most compeling business solution
            fot he title event sponsor.
          </Typography>

{/* need two button for the event sponsor and the open to partners button */}
        <Link 
        component={RouterLink}
        to = '/sponsor'>
            <button> Event Sponsors </button>
        </Link>

        <Link 
        component={RouterLink}
        to = '/join'>
            <button> Open to Sponsors </button>
        </Link>

            </div>
  );
}

export default ProgramPage
