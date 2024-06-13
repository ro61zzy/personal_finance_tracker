import React from 'react';
import { Box, Typography } from '@mui/material';
import useFinance from './useFinance';

const MyAccountsCard = () => {
  const { data } = useFinance();

  return (
    <Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        p: "20px"
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red"
        }}>
          <Typography>Current Bank Account</Typography>
          <Typography>{data.accounts.currentBankAccount}</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "orange"
        }}>
          <Typography>Credit Card</Typography>
          <Typography>{data.accounts.creditCard}</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "green"
        }}>
          <Typography>Savings Account</Typography>
          <Typography>{data.accounts.savingsAccount}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MyAccountsCard;
