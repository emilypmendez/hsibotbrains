import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '24, Sep 2023',
    'IBM',
    'Tupelo, MS',
    'Pregnancy',
    3102.44,
  ),
  createData(
    1,
    '24, Sep 2023',
    'Microsoft',
    'London, UK',
    'Stroke',
    8660.99,
  ),
  createData(
    2, 
    '24, Sep 2023', 
    'Red Hat', 
    'Boston, MA', 
    'Asthma', 
    1000.81
  ),
  createData(
    3,
    '24, Sep 2023',
    'Oracle',
    'Gary, IN',
    'Heart disease',
    6054.39,
  ),
  createData(
    4,
    '24, Sep 2023',
    'Salesforce',
    'Long Branch, NJ',
    'Leukemia',
    2120.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Partner</strong></TableCell>
            <TableCell><strong>Ship To</strong></TableCell>
            <TableCell><strong>Reason for Funding</strong></TableCell>
            <TableCell align="right"><strong>Sale Amount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}