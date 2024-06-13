import React, { useState } from 'react';
import { Box, TextField, Typography, MenuItem, Button } from '@mui/material';
import useFinance from '../useFinance';

const IncomeForm = () => {
  const { data, addTransaction } = useFinance();
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    console.log('Adding income:', account, amount); // Check values before adding transaction
    addTransaction('income', account, parseFloat(amount));
    console.log('After adding income:', data); // Check state after adding transaction
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
