import React, { useState, useEffect } from 'react';
import './App.css';
import Start from './components/start/Start';
import Main from './components/main/main';
import data from './components/start/data.json'

export default function App() {
  
  const [expenses, setExpenses] = useState(data);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    let moneySpent = 0;
    for (let i = 0; i < expenses.length; i++) {
      moneySpent += parseInt(expenses[i].cost);
    }

    setTotalExpenses(moneySpent);
  });

  expenses.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })

  return (
    <>
      <Start totalExpenses={totalExpenses} />
      <Main expenses={expenses} setExpenses={setExpenses}/>
    </>
  );
} 
