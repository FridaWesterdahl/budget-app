import './start.css';
import React, { useState } from 'react';


function Money(props) {
    return (
        <p id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</p>
    );
}



function Start() {
    const [budget, setBudget] = useState("");

    const handleBudgetChange = (event) => {
        event.preventDefault();
        setBudget(event.target.value);
        console.log(budget)
    }

    const handleBudgetSubmit = (event) => {
        event.preventDefault();
        console.log("submit", budget)
    }


    const moneySpent = 1000;
    const moneyLeft = (budget - moneySpent);


    return (
        <>
            {/* <header>
                    <h1 id="header">BUDGET APP</h1>
                    <h2 id="h2">by NeverDontGiveUp Dev.</h2>
                </header> */}
            <section id="graph">
                <img src="https://mb.cision.com/Public/977/3482646/aa5533be0d43e6fc_800x800ar.png"></img>
            </section>
            <div id="summary">
                <form onSubmit={handleBudgetSubmit}>
                    <p>Budget in SEK:
                        <input
                            id="budget"
                            name="budget"
                            type="number"
                            value={budget}
                            onChange={handleBudgetChange}
                        >
                        </input></p>
                    {/* <input type="submit" id="submit" onSubmit={handleBudgetSubmit}>submit</input> */}
                </form>
                <Money id="money-spent" name="Money spent" money={moneySpent + ':-'} />
                <Money id="money-left" name="Money left" money={moneyLeft + ':-'} />
            </div>

        </>
    );
}


export default Start;