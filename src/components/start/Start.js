import './start.css';
import React, { useState } from 'react';

function Money(props) {
    return (
        <p id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</p>
    );
}


export default function Start({ totalExpenses }) {
    const [budget, setBudget] = useState(500000);

    let moneyLeft = (budget - totalExpenses);

    const handleBudgetChange = (event) => {
        event.preventDefault();
        setBudget(event.target.value);
    }

    return (
        <>
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
                </form>
                <Money id="money-spent" name="Total money spent" money={totalExpenses + ':-'} />
                <Money id="money-left" name="Total money left" money={moneyLeft + ':-'} />
            </div>

        </>
    );
}
