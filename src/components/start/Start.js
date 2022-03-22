import './start.css';
import React, { useState } from 'react';
import { moneySpent } from '../main/Expense.js';

function Money(props) {
    return (
        <p id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</p>
    );
}

let getBudget;

export default function Start() {
    const [budget, setBudget] = useState("");

    const handleBudgetChange = (event) => {
        event.preventDefault();
        
        //setBudget triggas på en onChange() dvs när setBudget ÄNDRAS
        //Betyder att moneyLeft visas NÄR man ändrar {budget}

        //CONCLUSION:
        //Det bör ändras när man lägger till en utgift/expense =>
        //Dvs när man trycker på Add i NEW EXPENSE

        setBudget(event.target.value);
        console.log(budget)
        console.log("handleBudgetChange() moneySpent:", moneySpent)
        console.log('--------------------')
    }

    // const handleBudgetSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("submit", budget)
    //     console.log("BudgetSubmit moneySpent:", moneySpent)
    // }

    
    let moneyLeft = (budget - moneySpent);
    console.log('budget in Start(): ' + budget)
    console.log('moneyLeft in Start(): ' + moneyLeft)
    console.log('moneySpent in Start(): ' + moneySpent)


    return (
        <>
            <section id="graph">
                <img src="https://mb.cision.com/Public/977/3482646/aa5533be0d43e6fc_800x800ar.png"></img>
            </section>
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
                <Money id="money-spent" name="Money spent" money={moneySpent + ':-'} />
                <Money id="money-left" name="Money left" money={moneyLeft + ':-'} />
            </div>

        </>
    );
}
