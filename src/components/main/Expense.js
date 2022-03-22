import './newExpense.css';
import './latestExpense.css';
import Category from './category/category';
import { useState } from 'react';
import { nanoid } from 'nanoid';

let expenseOption;
let expensesArray = [];
export let moneySpent = 0;

export default function NewExpense() {
    const [expenses, setExpenses] = useState([]);
    const [addFormData, setAddFormData] = useState({
        date: '',
        item: '',
        category: '',
        cost: ''
    });

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
            category: expenseOption,
            cost: addFormData.cost
        };

        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);

        let itemCost = (parseInt(addFormData.cost));
        expensesArray.push({ id: newExpense.id, cost: itemCost });

        moneySpent = expensesArray.reduce((total, item) => {
            return total + item.cost;
        }, 0);
        console.log("moneySpent:", moneySpent)

        document.querySelector("#date").value = "";
        document.querySelector("#input").value = "";
        document.querySelector("#category-options").value = "Uncategorized";
        document.querySelector("#cost").value = "";
    }

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


    const removeExpense = (expenseId) => {
        console.log('onClick removeExpense')

        const newExpenses = [...expenses];
        const index = expenses.findIndex((expense) => expense.id === expenseId);
        newExpenses.splice(index, 1);

        setExpenses(newExpenses);
        console.log("expensesArray:", expensesArray);
    }

    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);
        console.log('Category(); option: ' + '"' + option + '"') //previous value
        console.log('Category(); event.target.value ' + '"' + event.target.value + '"') //new value set

        expenseOption = event.target.value
        console.log('Our variable: ' + '"' + expenseOption + '"')
    }

    return (
        <>
            <h3>ADD EXPENSE</h3>
            <div id="new-expense">
                <form onSubmit={handleAddFormSubmit}>
                    <input required type="date" id="date" name="date" onChange={handleAddFormData}></input>
                    <input required id="input" type="text" name="item" placeholder="Enter expense..." onChange={handleAddFormData}></input>
                    <select id="category-options" name="category" onChange={handleOptionChange}>
                        <Category />
                    </select>
                    <input required id="cost" type="number" name="cost" placeholder="cost" onChange={handleAddFormData}></input>
                    <button type="submit" className="submit" onSubmit={handleAddFormSubmit}>add</button>
                </form>
            </div>

            <div id="expenses">
                <h3>LATEST EXPENSES</h3>
                <ul id="latest-expenses">
                    {expenses.map((expense) => (
                        <Expense
                            id={expense.id}
                            date={expense.date}
                            item={expense.item}
                            category={expense.category}
                            cost={expense.cost + ':-'} />
                    ))}

                    {/* Example data */}
                    <Expense id="1" date="2022-01-03" item="Car" category="Other" cost="30000:-" />
                    <Expense id="2" date="2022-01-03" item="Shoes" category="Shopping" cost="800:-" />
                    <Expense id="3" date="2022-01-03" item="Clothes" category="Shopping" cost="500:-" />
                </ul>

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