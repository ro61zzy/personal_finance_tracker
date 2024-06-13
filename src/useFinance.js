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

  // Fetch initial data or load from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('financeData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      // Fetch initial data from an API or set default data
      const initialData = {
        accounts: {
          currentBankAccount: 20000,
          creditCard: 10000,
          savingsAccount: 15000,
        },
        transactions: []
      };
      setData(initialData);
      localStorage.setItem('financeData', JSON.stringify(initialData));
    }
  }, []);

  // Update localStorage whenever 'data' changes
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
    setData({
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
