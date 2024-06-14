import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import { useFinance } from '../FinanceContext';

const ExpenseForm = () => {
  const { data, addTransaction } = useFinance();
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // Ensure data.categories is defined before rendering
  useEffect(() => {
    if (!data.categories) {
      // Fetch categories or set default categories if necessary
    }
  }, [data.categories]);

  const handleSubmit = () => {
    addTransaction('expense', account, parseFloat(amount), category);
    setAccount('');
    setAmount('');
    setCategory('');
  };

  // Render form only if data.categories is defined
  if (!data.categories) {
    return null; // or loading indicator
  }

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", p: "20px" }}>
      <Typography sx={{ color: "red" }}>Record Expense</Typography>
      <TextField
  select
  label="From Account"
  value={account}
  onChange={(e) => setAccount(e.target.value)}
  fullWidth
  margin="normal"
  SelectProps={{ displayEmpty: true }}
>
  {Object.keys(data.accounts).map((acc) => (
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
      <TextField
        select
        label="Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      >
        {data.categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
