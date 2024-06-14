// AccountCard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useFinance } from '../FinanceContext'; // Update this import to use FinanceContext

const AccountCard = () => {
  const { data } = useFinance();
  const totalRemaining = Object.values(data.accounts).reduce((acc, value) => acc + value, 0);

  return (
    <Box sx={{
      p: "20px",
      ml:"15px",
      backgroundColor: "#f5f5f5",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Typography sx={{
        fontSize: "20px",
        color: "grey"
      }}>
        Current Remaining Amount:
      </Typography>
      <Typography sx={{
        fontSize: "60px",
        color: "#1b4c7a"
      }}>
        {totalRemaining.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default AccountCard;
