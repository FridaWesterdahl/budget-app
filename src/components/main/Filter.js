import { Options } from "./category/category";
import Category from "./category/category";
import './filter.css';
import { useState } from 'react'
import { TimespanYear } from "./category/Timespan";
import TimespanMonth from './category/Timespan'
import { TimespanDate } from "./category/Timespan";

let filterCategoryOption;
let filterTimespanOption;

function Filter() {

    const [categoryOption, setCategoryOption] = useState("");

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategoryOption(event.target.value);

        filterCategoryOption = event.target.value;
        console.log('event.target.value ' + event.target.value)
        console.log('option: ' + categoryOption)
    }


    const [timespanOption, setTimespanOption] = useState("");

    const handleTimespanChange = (event) => {
        event.preventDefault();
        setTimespanOption(event.target.value);

        filterTimespanOption = event.target.value;
        console.log('option: ' + filterTimespanOption)
        console.log('event.target.value ' + event.target.value)

    }

    const showYear = (e) => {
        e.preventDefault();
        console.log('onClick Year: "' + Options.name + '"')
    }


    return (
        <div id="aside">
            <div id="filter">
                <h3>Time</h3>
                <select id="time-filter" name="timespan-year" onChange={handleTimespanChange}>
                    <TimespanYear />
                </select>

                <select id="time-filter" name="timespan-month" onChange={handleTimespanChange}>
                    <TimespanMonth />
                </select>
                <select id="time-filter" name="timespan-date" onChange={handleTimespanChange}>
                    <TimespanDate />
                </select>

                <h3>Category</h3>
                <select id="category-options" name="category" onChange={handleCategoryChange}>
                    <Category />
                </select>
                <p>. . . . . . . . . . . . . . .</p>
            </div>
        </div>
    );
}


export default Filter;