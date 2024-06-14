// MyAccountsCard.jsx
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useFinance } from '../FinanceContext';

const MyAccountsCard = () => {
  const { data } = useFinance();

  console.log('MyAccountsCard rendered with data:', data);

  return (
    <Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        // p: "40px"
      }}>
     
        <Box sx={{
          display: "flex",
          flexDirection: "column",
         // backgroundColor: "red",
          p: "20px"
        }}>
          <Typography
          sx={{
            color:"grey",
            fontSize:"13px"
          }}>Current Bank Account</Typography>
          <Typography 
           sx={{
            color:"#450202",
            fontSize:"40px"
          }}>{data.accounts.currentBankAccount.toLocaleString()}</Typography>
        </Box>
        <Divider />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "orange",
          p: "20px"
        }}>
          <Typography
            sx={{
              color:"grey",
              fontSize:"13px"
            }}>Credit Card</Typography>
          <Typography   sx={{
            color:"#450202",
            fontSize:"40px"
          }}>{data.accounts.creditCard.toLocaleString()}</Typography>
        </Box>
        <Divider />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "green",
          p: "20px"
        }}>
          <Typography   sx={{
            color:"grey",
            fontSize:"13px"
          }}>Savings Account</Typography>
          <Typography   sx={{
            color:"#450202",
            fontSize:"40px"
          }}>{data.accounts.savingsAccount.toLocaleString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MyAccountsCard;
