import React from 'react';
import ExpenseItem from './ExpenseItem';
import './latestExpense.css';

export default function ExpenseList({ expenses, setExpenses, filter }) {

    const removeExpense = i => {
        let total = expenses.filter((value, index) => index !== i);
        setExpenses(total);
    }

    const filterExpense = expenses.filter(event => event.category === filter);
    const result = filter === 'All' ? expenses : filterExpense;

    return (
        <div id="expenses">
            <h3>LATEST EXPENSES</h3>
            <ul id="latest-expenses">
                {
                    result.map((value, index) => (
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
