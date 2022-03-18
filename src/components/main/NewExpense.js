import './newExpense.css';
import './latestExpense.css';
import Category from '../main/category/category';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Expense(props) {
    return (
        <li id={props.id}>
            <p className='purchase-date' date={props.date}>{props.date}</p>
            <p className='purchase-item' item={props.item}>{props.item}</p>
            <p className='purchase-category' category={props.category}>{props.category}</p>
            <p className='purchase-cost' cost={props.cost}>{props.cost}</p>
            <button className='remove-purchase'>❌</button>
        </li>
    );
}

function NewExpense() {

    const [expenses, setExpenses] = useState([]);
    const [addFormData, setAddFormData] = useState({
        date: '',
        item: '',
        category: '',
        cost: ''
    })

    const handleAddFormData = (event) => {
        event.preventDefault();

        const targetInput = event.target.getAttribute("name");
        const inputValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[targetInput] = inputValue;
        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newExpense = {
            id: nanoid(),
            date: addFormData.date,
            item: addFormData.item,
            category: addFormData.category,
            cost: addFormData.cost
        };

        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
    }


    return (
        <>
            <div id="new-expense">
                <p>N E W &nbsp;&nbsp; E X P E N S E:</p>
                <form onSubmit={handleAddFormSubmit}>
                    <input type="date" id="date" name="date" onChange={handleAddFormData}></input>
                    <input id="input" type="text" name="item" placeholder="Enter expense..." onChange={handleAddFormData}></input>
                    <Category name="category" />
                    <input id="cost" type="number" name="cost" placeholder="cost" onChange={handleAddFormData}></input>
                    <button type="submit" class="submit" onSubmit={handleAddFormSubmit}>add</button>
                </form>
            </div>

            <div id="expenses">
                <h3>L A T E S T &nbsp;&nbsp; E X P E N S E S</h3>
                <ul id="latest-expenses">
                    <li>
                        <p className='purchase-date'>01-03-2022</p>
                        <p className='purchase-item'>ICA</p>
                        <p className='purchase-category'>Food &amp; Beverages</p>
                        <p className='purchase-cost'>300:-</p>
                        <button className='remove-purchase'>❌</button>
                    </li>
                    <li>
                        <p className='purchase-date'>01-03-2022</p>
                        <p className='purchase-item'>dfddgfgfd</p>
                        <p className='purchase-category'>Electronics</p>
                        <p className='purchase-cost'>3000:-</p>
                        <button className='remove-purchase'>❌</button>
                    </li>
                    {expenses.map((expense) => (
                        <Expense
                            id={expense.id}
                            date={expense.date}
                            item={expense.item}
                            category={expense.category}
                            cost={expense.cost} />
                    ))}
                    <Expense date="14-03-2022" item="Car" category="Other" cost="30000:-" />
                    <Expense date="14-03-2022" item="Shoes" category="Shopping" cost="800:-" />
                    <Expense date="14-03-2022" item="Clothes" category="Shopping" cost="500:-" />
                </ul>
                <div id="show-alternative">
                    <p>s h o w:</p>
                    <button id="show-5">5</button>
                    <button id="show-10">10</button>
                    <button id="show-20">20</button>
                </div>
            </div>
        </>
    );
}

export default NewExpense;