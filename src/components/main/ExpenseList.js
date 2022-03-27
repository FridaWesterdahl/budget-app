import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './expenseList.css';

export default function ExpenseList({ expenses, setExpenses, searchItem }) {
    const [filteredList, setFilteredList] = useState([]);

    const removeExpense = i => {
        let total = expenses.filter((value, index) => index !== i);
        setExpenses(total);
    }
    
    useEffect(() => {
        if (searchItem === '') {
            setFilteredList([...expenses])
        } else {
            setFilteredList(expenses.filter(element => {
                if (element.date.toLowerCase().includes(searchItem.toLowerCase()) 
                || element.item.toLowerCase().includes(searchItem.toLowerCase()) 
                || element.category.toLowerCase().includes(searchItem.toLowerCase())
                || element.cost.toString().toLowerCase().includes(searchItem.toLowerCase())) {
                    return element
                }
            }));
        }
    }, [searchItem, expenses])

    return (
        <div id="expenses">
            <h3>LATEST EXPENSES</h3>
            <ul id="latest-expenses">
                {
            filteredList.map((value, index) => {
                    return ( <ExpenseItem
                        index={index}
                        key={index}
                        expenses={value}
                        removeExpense={removeExpense}
                    /> )
                })
            }
            </ul>
        </div>
    )
}
