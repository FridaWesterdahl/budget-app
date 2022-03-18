import './newExpense.css';
import './latestExpense.css';
import Category from './category/category';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { chosenOption } from './category/category';

let array = [];

function Expense(props) {
    return (
        <li id={props.id}>
            <p className='purchase-date' date={props.date}>{props.date}</p>
            <p className='purchase-item' item={props.item}>{props.item}</p>
            <p className='purchase-category' category={props.category}>{props.category}</p>
            <p className='purchase-cost' cost={props.cost}>{props.cost}</p>
            <button className='remove-purchase' onClick={removeExpense}>❌</button>
        </li>
    );
}

const removeExpense = (event) => {
    event.preventDefault();
    console.log('onClick removeExpense')
    // remove li item
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
        console.log('inputValue: ' + '"' + inputValue + '"')

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
            category: chosenOption,
            cost: addFormData.cost
        };

        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        array.push(newExpense)
        console.log('My array ' + array.length)
    }


    return (
        <>
            <div id="new-expense">
                <p>N E W &nbsp;&nbsp; E X P E N S E:</p>
                <form onSubmit={handleAddFormSubmit}>
                    <input required type="date" id="date" name="date" onChange={handleAddFormData}></input>
                    <input required id="input" type="text" name="item" placeholder="Enter expense..." onChange={handleAddFormData}></input>
                    <Category name="category" onChange={handleAddFormData} />
                    <input required id="cost" type="number" name="cost" placeholder="cost" onChange={handleAddFormData}></input>
                    <button type="submit" className="submit" onSubmit={handleAddFormSubmit}>add</button>
                </form>
            </div>

            <div id="expenses">
                <h3>L A T E S T &nbsp;&nbsp; E X P E N S E S</h3>
                <ol start={1} id="latest-expenses">


                    {expenses.map((expense) => (
                        <Expense
                            id={expense.id}
                            date={expense.date}
                            item={expense.item}
                            category={expense.category}
                            cost={expense.cost + ':-'} />
                    ))}

                    {/* Example data */}
                    <Expense date="2022-01-03" item="Car" category="Other" cost="30000:-" />
                    <Expense date="2022-01-03" item="Shoes" category="Shopping" cost="800:-" />
                    <Expense date="2022-01-03" item="Clothes" category="Shopping" cost="500:-" />
                </ol>

                <div id="show-alternative">
                    <p>s h o w:</p>
                    <button id="show-5" className="selected" onClick={Show5Items}>5</button>
                    <button id="show-10" onClick={Show10Items}>10</button>
                    <button id="show-20" onClick={Show20Items}>20</button>
                </div>
            </div>
        </>
    );
}

export default NewExpense;
export let moneySpent; //export to Start.js


const Show5Items = (e) => {
    e.preventDefault();
    console.log('onClick Show5Items()')
}
const Show10Items = (e) => {
    e.preventDefault();
    console.log('onClick Show10Items()')
}
const Show20Items = (e) => {
    e.preventDefault();
    console.log('onClick Show20Items()')
}