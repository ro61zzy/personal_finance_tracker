import { useState, useEffect } from 'react';

const useFinance = () => {
  const [data, setData] = useState({
    accounts: {
      currentBankAccount: 0,
      creditCard: 0,
      savingsAccount: 0,
    },
    transactions: []
  });

  useEffect(() => {
    const storedData = localStorage.getItem('financeData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      const initialData = {
        accounts: {
          currentBankAccount: 0,
          creditCard: 0,
          savingsAccount: 0,
        },
        transactions: []
      };
      setData(initialData);
      localStorage.setItem('financeData', JSON.stringify(initialData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('financeData', JSON.stringify(data));
    console.log('Data updated in useFinance:', data);
  }, [data]);

  const addTransaction = (type, account, amount) => {
    const updatedAccounts = { ...data.accounts };
    if (type === 'income') {
      updatedAccounts[account] += amount;
    } else if (type === 'expense') {
      updatedAccounts[account] -= amount;
    }
    const newTransaction = { type, account, amount };
    setData({
      accounts: updatedAccounts,
      transactions: [...data.transactions, newTransaction]
    });
    console.log('Transaction added:', newTransaction);
    console.log('Data after transaction:', {
      accounts: updatedAccounts,
      transactions: [...data.transactions, newTransaction]
    });
  };

  return {
    data,
    addTransaction
  };
};

export default useFinance;
