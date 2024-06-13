import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const Expense = () => {
    return (
        <Box sx={{
            backgroundColor: "#f5f5f5",
            p: "20px"
        }}>
            <Typography sx={{
                color: "green"
            }}>Record Expense</Typography>
            <TextField
                label="Type"
            />
             <TextField
                label="From Account"
            />
        </Box>
    )
}

export default Expense