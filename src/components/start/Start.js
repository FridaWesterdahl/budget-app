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

    const handleBudgetChange = (event) => {
        event.preventDefault();
        setBudget(event.target.value);
    }

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
                <Money id="money-spent" name="Total money spent" money={totalExpenses + ':-'} />
                <Money id="money-left" name="Total money left" money={moneyLeft + ':-'} />
            </div>

        </>
    );
}
