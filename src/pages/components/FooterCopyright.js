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
      </Typography>
    );
}
