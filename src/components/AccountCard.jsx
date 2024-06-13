import React from 'react';
import { Box, Typography } from '@mui/material';
import useFinance from './useFinance';

const AccountCard = () => {
  const { data } = useFinance();
  const totalRemaining = Object.values(data.accounts).reduce((acc, value) => acc + value, 0);

  return (
    <Box sx={{
      p: "20px",
      backgroundColor: "#f5f5f5",
    }}>
      <Typography sx={{
        fontSize: "18px",
        color: "grey"
      }}>
        Current Remaining Amount:
      </Typography>
      <Typography sx={{
        fontSize: "25px",
        color: "blue"
      }}>
        {totalRemaining.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default AccountCard;
