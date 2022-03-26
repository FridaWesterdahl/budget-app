import './start.css';
import React, { useState } from 'react';

function Money(props) {
    return (
        <p id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</p>
    );
}


export default function Start({totalExpenses}) {
    const [budget, setBudget] = useState(500000);

    let moneyLeft = (budget - totalExpenses);
    // // console.log("start moneySpent:", moneySpent);

    const handleBudgetChange = (event) => {
        event.preventDefault();


        setBudget(event.target.value);
    }

    // const handleBudgetSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log("submit", budget)
    //     // console.log("BudgetSubmit moneySpent:", moneySpent)
    // }

    // const [amount, setAmount] = useState("");
    // const handleMoneySpentChange = (event) => {
    //     event.preventDefault();
 
    //     setAmount(event.target.value)
    // }

    // const handleMoneyLeftChange = (event) => {
    //     event.preventDefault();
        
    // }

    // console.log("handleBudgetChange() moneySpent:", moneySpent)



    // const handleBudgetSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("submit", budget)
    //     console.log("BudgetSubmit moneySpent:", moneySpent)
    // }



    // let moneySpent2 = newArray.reduce((total, item) => {
    //     return total + item.cost;
    // }, 0);
    // console.log("moneySpent2:", moneySpent2);


    return (
        <>
            {/* <section id="graph">
                <img src="https://mb.cision.com/Public/977/3482646/aa5533be0d43e6fc_800x800ar.png"></img>
            </section> */}
            <h1>Budget calculator</h1>
            <div id="summary">
                <form>
                    <p>Budget in SEK:
                        <input
                            id="budget"
                            name="budget"
                            type="number"
                            value={budget}
                            onChange={handleBudgetChange}
                        >
                        </input></p>
                    {/* <button type="submit" id="submit" onSubmit={handleBudgetSubmit}>submit</button> */}
                </form>
                <Money id="money-spent" name="Money spent" money={totalExpenses + ':-'} />
                <Money id="money-left" name="Money left" money={moneyLeft + ':-'} />
            </div>

        </>
    );
}
