import Category from "./category/Category";
import './filter.css';
import { useState } from 'react'

function Filter() {

    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);

        console.log('event.target.value ' + event.target.value)
        console.log('option: ' + option)
    }
    
    return (
        <div id="aside">
            <div id="filter">
                <h3>t i m e</h3>
                <select id="time-filter" onChange={handleOptionChange}>
                    <option value="" id="category" className="options">Choose timespan</option>
                    <option value="" id="per-year">Year</option>
                    <option value="" id="per-month">Month</option>
                    <option value="" id="per-day">Day</option>
                </select>

                <h3>c a t e g o r y</h3>¨
                {/* When choosed category on filter
                and then adds new expenses
                the category choosed here will be applied to the
                latest expenses */}
                <Category /> 
                <p>. . . . . . . . . . . . . . .</p>
            </div>
        </div>
    );
}

export default Filter;