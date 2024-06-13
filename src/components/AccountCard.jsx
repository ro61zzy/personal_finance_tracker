import { Box, Typography } from '@mui/material'
import React from 'react'

const AccountCard = () => {
    return (
        <Box sx={{
            p:"20px",
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
                105,887
            </Typography>

        </Box>
    )
}

export default AccountCard