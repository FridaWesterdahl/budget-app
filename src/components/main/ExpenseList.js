import React from 'react';
import ExpenseItem from './ExpenseItem';
import './latestExpense.css';

export default function ExpenseList({ expenses, setExpenses }) {

    const removeExpense = i => {
        let total = expenses.filter((value, index) => index !== i);
        setExpenses(total);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    
    return (
        <div id="expenses">
            <h3>LATEST EXPENSES</h3>
            <ul id="latest-expenses">
            {
                expenses.sort(sortByDate).map((value, index) => (
                    <ExpenseItem
                        index={index}
                        key={index}
                        expenses={value}
                        removeExpense={removeExpense}
                    />
                ))
            } 
            </ul>
        </div>
    )
}
