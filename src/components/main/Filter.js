import { Options } from "./category/category";
import Category from "./category/category";
import './filter.css';
import { useState } from 'react'
import { TimespanYear } from "./category/Timespan";
import TimespanMonth from './category/Timespan'
import { TimespanDate } from "./category/Timespan";
// import ExpenseItem from "./ExpenseItem";


export default function Filter({ expenses, setExpenses }) {

    const [categoryOption, setCategoryOption] = useState("");

    const handleCategoryChange = (category) => {
        setCategoryOption(category.target.value);
        console.log('Choosed category: ' + category.target.value)

        function isCategory(expenses) {
            return (expenses.category == category.target.value)
        }

        const sort = expenses.filter(isCategory);
        setExpenses(sort);


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

        // for (let li of copyArray) {
        //     let liDate = li.date;
        //     console.log("liDate:", liDate)
        //     if (!liDate.includes(event.target.value)) {
        //         let listItem = document.querySelector(".listItem");
        //         if (listItem.includes(liDate)) {
        //             listItem.classList.add("hidden");
        //         }
        //         console.log("bajs")
        //     }
        // }


        // console.log("reault:", result)
        // console.log("dates:", dates)
        // console.log('timeSpanOption: ' + timespanOption)
        // console.log('event.target.value ' + event.target.value)

    }

    // const bajs = (date) => {
    //     return date.month !== month.target.value;
    // }

    const handleTimespanChangeMonth = () => {
        // console.log('month.target.value: '+ month.target.value)
        // console.log('month: ' + month)
        // setTimespanOption(month.target.value);

        // let total = expenses.filter(bajs);
        // setExpenses(total);

        // const removeExpense = (id) => {
        //         console.log('onClick removeExpense')

        //         let newExpenses = [...expenses];
        //         let filterExpenses = newExpenses.filter(x => x.id !== id)

        //         setExpenses(filterExpenses);
        //         console.log("newExpenseArray:", newExpenses);
        //     }
    }

    const handleTimespanChangeDate = (event) => {
        event.preventDefault();
        setTimespanOption(event.target.value);

        console.log('timeSpanOption: ' + timespanOption)
        console.log('event.target.value ' + event.target.value)

    }



    return (

        <div id="filter">
            <h3 id="filter-title">Time</h3>
            <div id="filter-wrapper">
                <select className="filter-time" name="timespan-year" onChange={handleTimespanChangeYear}>
                    <TimespanYear />
                </select>

                <select className="filter-time" name="timespan-month" onChange={handleTimespanChangeMonth}>
                    <TimespanMonth />
                </select>
                <select className="filter-time" name="timespan-date" onChange={handleTimespanChangeDate}>
                    <TimespanDate />
                </select>
            </div>
            <h3 id="category-title">Category</h3>
            <select id="filter-category" name="category" onChange={handleCategoryChange}>
                <Category />
            </select>
        </div>
    );
}