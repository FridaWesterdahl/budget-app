import { Options } from "./category/category";
import Category from "./category/category";
import './filter.css';
import { useState } from 'react'
import { TimespanYear } from "./category/Timespan";
import TimespanMonth from './category/Timespan'
import { TimespanDate } from "./category/Timespan";
import Expense, { copyArray } from './Expense';

let filterCategoryOption;
let filterTimespanOption;

function Filter() {
    console.log("copyArray:", copyArray)
    const [categoryOption, setCategoryOption] = useState("");

    const handleCategoryChange = (event) => {
        event.preventDefault();
        setCategoryOption(event.target.value);

        filterCategoryOption = event.target.value;
        console.log('event.target.value ' + event.target.value)
        console.log('option: ' + categoryOption)
    }

    const [timespanOption, setTimespanOption] = useState("");

    const handleTimespanChangeYear = (event) => {
        event.preventDefault();
        setTimespanOption(event.target.value);

        // let items = document.querySelector("#latest-expenses").querySelectorAll("li");
        // for (let li of items) {
        //     let dates = li.querySelector(".purchase-date");
        //         if (dates !== dates) {
        //             li.className = "hidden";
        //         }
        // }

        // let hideList = document.querySelectorAll("li");
        // let dates = document.querySelectorAll(".purchase-date");
        // for (let date of dates) {
        //     console.log("date for-loop:", date)


        // }

        for (let li of copyArray) {
            let liDate = li.date;
            console.log("liDate:", liDate)
            if (!liDate.includes(event.target.value)) {
                let listItem = document.querySelector(".listItem");
                if (listItem.includes(liDate)) {
                    listItem.classList.add("hidden");
                }
                console.log("bajs")
            }
        }


        // console.log("reault:", result)
        // console.log("dates:", dates)
        console.log('timeSpanOption: ' + timespanOption)
        console.log('event.target.value ' + event.target.value)

    }

    const handleTimespanChangeMonth = (event) => {
        event.preventDefault();
        setTimespanOption(event.target.value);

        console.log('timeSpanOption: ' + timespanOption)
        console.log('event.target.value ' + event.target.value)

    }

    const handleTimespanChangeDate = (event) => {
        event.preventDefault();
        setTimespanOption(event.target.value);

        console.log('timeSpanOption: ' + timespanOption)
        console.log('event.target.value ' + event.target.value)

    }



    return (
        <div id="aside">
            <div id="filter">
                <h3>Time</h3>
                <select className="filter-time" name="timespan-year" onChange={handleTimespanChangeYear}>
                    <TimespanYear />
                </select>

                <select className="filter-time" name="timespan-month" onChange={handleTimespanChangeMonth}>
                    <TimespanMonth />
                </select>
                <select className="filter-time" name="timespan-date" onChange={handleTimespanChangeDate}>
                    <TimespanDate />
                </select>

                <h3>Category</h3>
                <select id="filter-category" name="category" onChange={handleCategoryChange}>
                    <Category />
                </select>
                <p>. . . . . . . . . . . . . . .</p>
            </div>
        </div>
    );
}


export default Filter;