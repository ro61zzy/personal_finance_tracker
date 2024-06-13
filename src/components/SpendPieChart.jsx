import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';


const SpendPieChart = () => {

    const data = [
        { name: 'Transport', value: 3000 },
        { name: 'Going Out', value: 2000 },
        { name: 'Food Shopping', value: 5000 },
        { name: 'Self Care', value: 3000 },
        { name: 'Others', value: 1500 },
        { name: 'Insurance', value: 1000 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB'];

    return (
        <Box>
            <Card style={{ maxWidth: 600, margin: '0 auto' }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        My Spending
                    </Typography>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                    <Typography variant="subtitle1" component="div">
                        Total in account: 20000
                    </Typography>
                </CardContent>
            </Card>


        </Box> 
  )
}

export default SpendPieChart