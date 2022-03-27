import { Options } from "./category/category";
import Category from "./category/category";
import './filter.css';
import { useState, useRef } from 'react'
import { TimespanYear } from "./category/Timespan";
import TimespanMonth from './category/Timespan'
import { TimespanDate } from "./category/Timespan";
// import ExpenseItem from "./ExpenseItem";

export default function Filter({ setFilter, expenses }) {

    const handleCategoryChange = (category) => {
        clearFiltersForCategory()
        // category.preDefault();
        console.log('category: ' + category)

        const filterCategory = expenses.filter(e => e.category === category);
        setFilter(filterCategory);
        console.log('number of filterCategory: ' + filterCategory.length)
        // console.log('category: ' + category.target.value)
    }

    const handleTimespanChangeYear = (year) => {
        clearFiltersForYear()
        // year.preDefault();
        console.log('year: ' + year)

        const filterYears = expenses.filter(e => e.date === year);
        console.log('filterYears: ' + filterYears)

        switch (year) {
            case "2021":
                console.log('case 2021')
                // setFilter(year)
                break;
            case "2022":
                console.log('case 2022')
                // setFilter(year)
                break;
        }
    }

    const handleTimespanChangeMonth = (month) => {
        clearFiltersForMonth()
        // month.preDefault()
        console.log('month: ' + month)

        let date = new Date(expenses.date);
        let months;


        console.log('months before switch: ' + months)
        console.log('date: ' + date)
        // const filterMonths = expenses.filter(e => e.months === month);
        // console.log('filterMonths: ' + filterMonths)



        switch (month) {
            case "1":
                console.log('case 1')
                months = date.getMonth();
                console.log('months in case 1: ' + months)
                // setFilter(month)
                break;
            case "2":
                console.log('case 2')
                break;
            case "3":
                console.log('case 3')
                break;
            case "4":
                console.log('case 4')
                break;
            case "5":
                console.log('5')
                break;
            case "6":
                console.log('6')
                break;
            case "7":
                console.log('7')
                break;
            case "8":
                console.log('8')
                break;
            case "9":
                console.log('9')
                break;
            case "10":
                console.log('10')
                break;
            case "11":
                console.log('11')
                break;
            case "12":
                console.log('12')
                break;

            default:

        }
    }


    const filterYear = useRef(null);
    const filterMonth = useRef(null);
    const filterCategory = useRef(null);

    function clearFiltersForCategory() {
        filterYear.current.value = "Years";
        filterMonth.current.value = "Months";
        // filterCategory.current.value = "Uncategorized";
        // setFilter('All')
    }
    function clearFiltersForYear() {
        // filterYear.current.value = "Years";
        filterMonth.current.value = "Months";
        filterCategory.current.value = "Uncategorized";
        // setFilter('All')
    }
    function clearFiltersForMonth() {
        filterYear.current.value = "Years";
        // filterMonth.current.value = "Months";
        filterCategory.current.value = "Uncategorized";
        // setFilter('All')
    }
    function clearFilters() {
        filterYear.current.value = "Years";
        filterMonth.current.value = "Months";
        filterCategory.current.value = "Uncategorized";
        setFilter('All')
        console.log('clears all filter')
    }

    return (
        <div id="filter">
            <h3 id="filter-title">Time</h3>
            <div id="filter-wrapper">
                <select className="filter-time" ref={filterYear} name="timespan-year" onChange={(e) => handleTimespanChangeYear(e.target.value)}>
                    <TimespanYear />
                </select>

                <select className="filter-time" ref={filterMonth} name="timespan-month" onChange={(e) => handleTimespanChangeMonth(e.target.value)}>
                    <TimespanMonth />
                </select>
            </div>
            <h3 id="category-title">Category</h3>
            <select id="filter-category" ref={filterCategory} name="category" onChange={(e) => handleCategoryChange(e.target.value)}>
                <Category />
            </select>
            <button id="clear-filters" onClick={clearFilters}>Clear filter</button>
        </div>
    );
}