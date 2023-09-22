import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import KPMGlogo from '../assets/KPMG_logo.png';

export default function PoweredByKPMG() {
    return (
      <Typography variant="h5" color="text.secondary" align="center">
        <br/>
        <br/>
        <strong>Powered by {' '}</strong>
        <Link color="inherit" href="https://kpmg.com/" target="_blank">
            <img src={KPMGlogo} alt="Pinnacle Plus Logo" width="225" height="100" />
        </Link>{' '}
        <br/><br/>
      </Typography>
    );
}
