import React, { useRef } from 'react';
import Category from './category/Category';
import './expenseForm.css';

export default function ExpenseForm({ expenses, setExpenses }) {
    const date = useRef(null);
    const item = useRef(null);
    const category = useRef(null);
    const cost = useRef(null);

    const AddExpense = (event) => {
        event.preventDefault();

        setExpenses([...expenses, {
            "date": date.current.value,
            "item": item.current.value,
            "category": category.current.value,
            "cost": cost.current.value,
        }]);

        date.current.value = null;
        item.current.value = null;
        category.current.value = "Uncategorized";
        cost.current.value = null;
    }

    return (
        <div id="new-expense">
            <h3 id="add">ADD EXPENSE</h3>
            <form onSubmit={AddExpense}>
                <input required id="date" ref={date} type="date" name="date"></input>
                <input required id="input" ref={item} type="text" name="item" placeholder="Enter expense..."></input>
                <select id="category-options" ref={category} name="category">
                    <Category />
                </select>
                <input required id="cost" ref={cost} type="number" name="cost" placeholder="Cost..."></input>
                <button type="submit" className="submit">add</button>
            </form>
        </div>
    )
}

