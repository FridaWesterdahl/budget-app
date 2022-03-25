// import './newExpense.css';
// import './latestExpense.css';
// import Category from './category/category';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import data from '../start/data.json';

// let expenseOption;
// let keyVar;
// export let moneySpent = 0;
// export let copyArray = [];

// export default function NewExpense() {
//     const [expenses, setExpenses] = useState(data);
//     const [addFormData, setAddFormData] = useState({
//         date: '',
//         item: '',
//         category: '',
//         cost: ''
//     });

//     copyArray = [...expenses];

//     const handleAddFormData = (event) => {
//         event.preventDefault();

//         const targetInput = event.target.getAttribute("name");
//         const inputValue = event.target.value;
//         // console.log('inputValue: ' + '"' + inputValue + '"')

//         const newFormData = { ...addFormData };
//         newFormData[targetInput] = inputValue;
//         setAddFormData(newFormData);
//     }

//     const handleAddFormSubmit = (event) => {
//         event.preventDefault();

//         const newExpense = {
//             id: nanoid(),
//             date: addFormData.date,
//             item: addFormData.item,
//             category: expenseOption,
//             cost: (parseInt(addFormData.cost))
//         };

//         setExpenses([...expenses, newExpense]);

//         keyVar = newExpense.id;
//         // console.log("keyVar:", keyVar)

//         document.querySelector("#date").value = "";
//         document.querySelector("#input").value = "";
//         document.querySelector("#category-options").value = "Uncategorized";
//         document.querySelector("#cost").value = "";
//     }

//     moneySpent = expenses.reduce((total, item) => {
//         return total + item.cost;
//     }, 0);
//     // console.log("moneySpent:", moneySpent);

//     // function Expense(props) {
//     //     return (
//     //         <li id={props.id} key={keyVar} className="listItem">
//     //             <p className='purchase-date' date={props.date}>{props.date}</p>
//     //             <p className='purchase-item' item={props.item}>{props.item}</p>
//     //             <p className='purchase-category' category={props.category}>{props.category}</p>
//     //             <p className='purchase-cost' cost={props.cost} onChange={handleMoneySpent}>{props.cost} </p>
//     //             <button className='remove-purchase' onClick={() => removeExpense(props.id)}>❌</button>
//     //         </li>
//     //     );
//     // }

//     const [amount, setAmount] = useState("");
//     const handleMoneySpent = (event) => {
//         event.preventDefault();
//         setAmount(moneySpent)
//     }

//     const removeExpense = (id) => {
//         console.log('onClick removeExpense')

//         let newExpenses = [...expenses];
//         let filterExpenses = newExpenses.filter(x => x.id !== id)

//         setExpenses(filterExpenses);
//         console.log("newExpenseArray:", newExpenses);
//     }

//     const [option, setOption] = useState("");

//     const handleOptionChange = (event) => {
//         event.preventDefault();
//         setOption(event.target.value);
//         // console.log('Category(); option: ' + '"' + option + '"') //previous value
//         // console.log('Category(); event.target.value ' + '"' + event.target.value + '"') //new value set

//         expenseOption = event.target.value
//         // console.log('Our variable: ' + '"' + expenseOption + '"')
//     }

//     return (
//         <>
//             {/* <h3>ADD EXPENSE</h3>
//             <div id="new-expense">
//                 <form onSubmit={handleAddFormSubmit}>
//                     <input id="date" type="date" name="date" onChange={handleAddFormData}></input>
//                     <input required id="input" type="text" name="item" placeholder="Enter expense..." onChange={handleAddFormData}></input>
//                     <select id="category-options" name="category" onChange={handleOptionChange}>
//                         <Category />
//                     </select>
//                     <input id="cost" type="number" name="cost" placeholder="cost" onChange={handleAddFormData}></input>
//                     <button type="submit" className="submit" onSubmit={handleAddFormSubmit}>add</button>
//                 </form>
//             </div> */}

//             {/* <div id="expenses">
//                 <h3>LATEST EXPENSES</h3>
//                 <ul id="latest-expenses">
//                     {expenses.map((expense, index) => (
//                         <Expense
//                             id={expense.id}
//                             key={expense.id}
//                             date={expense.date}
//                             item={expense.item}
//                             category={expense.category}
//                             cost={expense.cost + ':-'} 
                        
//                         />
//                     ))}
//                 </ul>

//                 <div id="show-alternative">
//                     <p>s h o w:</p>
//                     <button id="show-5" className="selected" onClick={Show5Items}>5</button>
//                     <button id="show-10" onClick={Show10Items}>10</button>
//                     <button id="show-20" onClick={Show20Items}>20</button>
//                 </div>
//             </div> */}
//         </>
//     );
// }


// const Show5Items = (e) => {
//     e.preventDefault();
//     console.log('onClick Show5Items()')
// }
// const Show10Items = (e) => {
//     e.preventDefault();
//     console.log('onClick Show10Items()')
// }
// const Show20Items = (e) => {
//     e.preventDefault();
//     console.log('onClick Show20Items()')
// }
