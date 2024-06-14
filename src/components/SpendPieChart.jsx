import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { useFinance } from '../FinanceContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const SpendingPieChart = () => {
  const { data } = useFinance();
  const chartData = {
    labels: ['Current Bank Account', 'Credit Card', 'Savings Account'],
    datasets: [
      {
        label: 'Accounts',
        data: [
          data.accounts.currentBankAccount,
          data.accounts.creditCard,
          data.accounts.savingsAccount,
        ],
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverBackgroundColor: ['#0077D9', '#00B38D', '#E6A700'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card style={{ maxWidth: 400, margin: '0 auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Account Distribution
        </Typography>
        <div style={{ position: 'relative', height: '250px', width: '250px' }}>
          <Pie data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingPieChart;
