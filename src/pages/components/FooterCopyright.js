import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function FooterCopyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <br/>
        {'Copyright © Pinnacle Plus | '} 
        {'All Rights Reserved. '}
        {new Date().getFullYear()}{'.'}
        <br/>
        Pinnacle Plus is a unique product of {' '}
        <Link color="inherit" href="https://kpmg.com/">
          KPMG
        </Link>{'. '}
        <br/><br/>
        <Link color="inherit" href="https://kpmg.com/us/en/home/misc/legal.html">
          TOS
        </Link>{' | '}
        <Link color="inherit" href="https://kpmg.com/us/en/home/misc/privacy.html">
          Privacy Policy
        </Link>{' | '}
        <Link color="inherit" href="https://kpmg.com/us/en/home/misc/accessibility.html">
          Accessibility
        </Link>
        <br/><br/>
      </Typography>
    );
}
