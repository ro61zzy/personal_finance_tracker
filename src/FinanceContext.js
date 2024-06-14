//let's use useContext to manage state throughout the app

import React, { createContext, useContext, useState, useEffect } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
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
    console.log('Data updated in FinanceContext:', data);
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

  return (
    <FinanceContext.Provider value={{ data, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  return useContext(FinanceContext);
};
