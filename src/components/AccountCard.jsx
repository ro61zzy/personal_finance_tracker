import React from 'react';
import { Box, Typography } from '@mui/material';
import useFinance from '../useFinance';

const AccountCard = () => {
  const { data } = useFinance();

  const totalAmount = Object.values(data.accounts).reduce((acc, curr) => acc + curr, 0);

  return (
    <Box sx={{ p: "20px", backgroundColor: "#f5f5f5" }}>
      <Typography sx={{ fontSize: "18px", color: "grey" }}>
        Current Remaining Amount:
      </Typography>
      <Typography sx={{ fontSize: "25px", color: "blue" }}>
        {totalAmount}
      </Typography>
    </Box>
  );
}

export default AccountCard;
