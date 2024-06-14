import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import useFinance from '../useFinance';

const Expense = () => {
    const { data, addTransaction } = useFinance();
    const [type, setType] = useState('');
    const [account, setAccount] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = () => {
        addTransaction('expense', account, parseFloat(amount));
        setAccount('');
        setAmount('');
    };

    return (
        <Box sx={{ backgroundColor: "#f5f5f5", p: "20px" }}>
            <Typography sx={{ color: "green" }}>Record Expense</Typography>
            <TextField
                select
                label="Expense Type"
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
                Add Expense
            </Button>
        </Box>
    );
};

export default Expense;
