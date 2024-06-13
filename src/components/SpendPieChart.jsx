import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Transport', 'Going Out', 'Food Shopping', 'Self Care', 'Others', 'Insurance'],
    datasets: [
        {
            label: 'Spending',
            data: [3000, 2000, 5000, 3000, 1500, 1000],
            backgroundColor: [
                '#0088FE',
                '#00C49F',
                '#FFBB28',
                '#FF8042',
                '#FF6384',
                '#36A2EB',
            ],
            hoverBackgroundColor: [
                '#0077D9',
                '#00B38D',
                '#E6A700',
                '#FF7036',
                '#FF5073',
                '#1F77D4',
            ],
        },
    ],
};
const SpendPieChart = () => {

    return (
        <Box>
            <Card style={{}}>
                <CardContent>
                    <Box sx={{ position: 'relative', height: '250px', width: '250px' }}>

                        <Pie data={data} />
                    </Box>

                </CardContent>
            </Card>
        </Box>
    )
}

export default SpendPieChart