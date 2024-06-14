// IncomeForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Typography, MenuItem, Button } from '@mui/material';
import { useFinance } from '../FinanceContext';

const IncomeForm = () => {
  const { data, addTransaction } = useFinance();
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    addTransaction('income', account, parseFloat(amount));
    setAccount('');
    setAmount('');
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: "20px" }}>
      <Typography sx={{ color: "green" }}>Record Income</Typography>
      <TextField
        select
        label="To Account"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        fullWidth
        margin="normal"
      >
        {Object.keys(data.accounts).map(acc => (
          <MenuItem key={acc} value={acc}>
            {acc}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Add Income
      </Button>
    </Box>
  );
};

export default IncomeForm;
