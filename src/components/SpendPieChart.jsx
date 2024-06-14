/// SpendPieChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { useFinance } from '../FinanceContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const SpendPieChart = () => {
  const { data } = useFinance();

  // Extracting categories and corresponding spending amounts
  const categories = data.categories || [];
  const spendingData = categories.map(category => {
    // Calculate total spending for each category from transactions
    const totalSpending = data.transactions.reduce((total, transaction) => {
      if (transaction.category === category && transaction.type === 'expense') {
        return total + transaction.amount;
      }
      return total;
    }, 0);
    return totalSpending;
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Spending',
        data: spendingData,
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

  return (
    <Box>
   
        
          <Typography color="#000" variant="h5" gutterBottom>
            Expense Distribution
          </Typography>
          <Box sx={{ position: 'relative', height: '250px', width: '250px' }}>
            <Pie data={chartData} />
          </Box>
    
  
    </Box>
  );
};

export default SpendPieChart;
