// theme.js

/*
BRAND COLORS:

#007954 - Dark Green
#00A86B - Green
#EEFB41 - Yellow
#F2F2F2 - Light Gray
#282c34 - Dark Gray
#000000 - Black
#FEFFFE - White
*/

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007954', // Change to brand primary color
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
        color: '#EEFB41', // yellow // Change to brand hover color
        bold: 'true',
      },
    },
    // Define custom styles for buttons
    button: {
      fontSize: '1.5rem',
      fontWeight: 'bold', 
      textDecoration: 'none', 
      color: '#fff', // white // 
      backgroundColor: '#007954', // green
      '&:hover': {
        color: '#EEFB41', // yellow // 
        backgroundColor: '#00A86B', // green
        fontWeight: 'bold',
      },
    },
  },
  // Add more custom theme settings here if needed
});

export default theme;
