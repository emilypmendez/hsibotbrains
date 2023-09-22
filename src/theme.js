// theme.js

/*
BRAND COLORS:
----
#F2F2F2 - Light Gray
#282c34 - Dark Gray
#FEFFFE - White
#003087 - Dark Blue
#000000 - Black
*/

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003087', // Change to brand primary color
    },
    background: {
      default: '#fff', // Set the default background color to white
    },
  },
  typography: {
    // Define custom styles for links
    link: {
      color: '#fff', // white // Change to brand link color
      '&:hover': {
        color: '#F2F2F2', // yellow // Change to brand hover color
        bold: 'true',
      },
    },
    // Define custom styles for buttons
    button: {
      fontSize: '1.5rem',
      fontWeight: 'bold', 
      textDecoration: 'none', 
      color: '#fff', // white // 
      backgroundColor: '#003087', // dark blue
      '&:hover': {
        color: '#282c34', // dark grey // 
        backgroundColor: '#003087', // dark blue
        fontWeight: 'bold',
      },
    },
  },
  // Add more custom theme settings here if needed
});

export default theme;
