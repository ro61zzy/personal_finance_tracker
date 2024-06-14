import React from 'react';
import { Box, Typography } from '@mui/material';
import useFinance from '../useFinance';

const MyAccountsCard = () => {
  const { data } = useFinance();

  console.log('MyAccountsCard rendered with data:', data);

  return (
    <Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        p: "40px"
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
          p: "20px"
        }}>
          <Typography>Current Bank Account</Typography>
          <Typography>{data.accounts.currentBankAccount}</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "orange",
          p: "20px"
        }}>
          <Typography>Credit Card</Typography>
          <Typography>{data.accounts.creditCard}</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "green",
          p: "20px"
        }}>
          <Typography>Savings Account</Typography>
          <Typography>{data.accounts.savingsAccount}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MyAccountsCard;
