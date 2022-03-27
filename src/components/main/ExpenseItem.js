import React from "react";

export default function ExpenseItem({ expenses, index, removeExpense}) {

    const handleRemove = (i) => {
        removeExpense(i);      
    }

    return (
        <li className="listItem">
            <p className="purchase-date">{expenses.date}</p>
            <p className="purchase-item">{expenses.item}</p>
            <p className="purchase-category">{expenses.category}</p>
            <p className="purchase-cost">{expenses.cost}:-</p>
            <button className="remove-purchase" onClick={() => handleRemove(index)}>❌</button>
        </li>
    );
}