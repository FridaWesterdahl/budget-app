import React from "react";

export default function ExpenseItem({ expenses, index, removeExpense}) {
    let date = new Date(expenses.date);
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();

    const handleRemove = i => {
        removeExpense(i);
        console.log('moonth: ' + month)        
    }

    return (
        <li className="listItem">
            <p className="purchase-date">{year + "-" + month + "-" + day}</p>
            {/* <p className="purchase-date">{expenses.date}</p> */}
            <p className="purchase-item">{expenses.item}</p>
            <p className="purchase-category">{expenses.category}</p>
            <p className="purchase-cost">{expenses.cost}</p>
            <button className="remove-purchase" onClick={() => handleRemove(index)}>❌</button>
        </li>

    );
}