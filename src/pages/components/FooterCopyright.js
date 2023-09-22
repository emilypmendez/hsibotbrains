import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function FooterCopyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <br/>
        {'Copyright © Ecobuddy.io | '} 
        {'All Rights Reserved. '}
        {new Date().getFullYear()}{'.'}
        <br/>
        Ecobuddy.io is a product of {' '}
        <Link color="inherit" href="https://boldmotivegroup.com/">
          Bold Motive Group, LLC.
        </Link>{' '}
        <br/><br/>
      </Typography>
    );
}
