import './category.css';
import { useState } from 'react';

export function Options(props) {
    return (
        <option id={props.id} className={props.class} value={props.name}>{props.name}</option>
    )
}

export let chosenOption; //exported to Expense.js

export default function Category() {

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);
        console.log('Category(); option: ' + '"' + option + '"') //previous value
        console.log('Category(); event.target.value ' + '"' + event.target.value + '"') //new value set

        chosenOption = event.target.value
        console.log('Our variable: ' + '"' + chosenOption + '"')
    }


    return (
        <>
            <select id="category-options" onChange={handleOptionChange}>
                <Options id="category" className="options" name="Choose category" />
                <Options id="food" name="Food" />
                <Options id="shopping" name="Shopping" />
                <Options id="electronics" name="Electronics" />
            </select>
        </>
    );
}

// export default Category;