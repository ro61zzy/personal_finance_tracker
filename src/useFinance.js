import { useState, useEffect } from 'react';

const useFinance = () => {
  const [data, setData] = useState({
    accounts: {
      currentBankAccount: 20000,
      creditCard: 10000,
      savingsAccount: 15000,
    },
    transactions: []
  });

  useEffect(() => {
    const storedData = localStorage.getItem('financeData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch('/path/to/data.json')
        .then(response => response.json())
        .then(initialData => {
          setData(initialData);
          localStorage.setItem('financeData', JSON.stringify(initialData));
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financeData', JSON.stringify(data));
  }, [data]);

  const addTransaction = (type, account, amount) => {
    const updatedAccounts = { ...data.accounts };
    if (type === 'income') {
      updatedAccounts[account] += amount;
    } else if (type === 'expense') {
      updatedAccounts[account] -= amount;
    }
    const newTransaction = { type, account, amount };
    console.log('Before update:', data); // Check state before update
    setData({
      accounts: updatedAccounts,
      transactions: [...data.transactions, newTransaction]
    });
    console.log('After update:', data); // Check state after update
  };
  return {
    data,
    addTransaction
  };
};

export default useFinance;
