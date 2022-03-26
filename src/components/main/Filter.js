import { Options } from "./category/category";
import Category from "./category/category";
import './filter.css';
import { useState, useRef } from 'react'
import { TimespanYear } from "./category/Timespan";
import TimespanMonth from './category/Timespan'
import { TimespanDate } from "./category/Timespan";
// import ExpenseItem from "./ExpenseItem";

export default function Filter({ setFilter }) {

    const handleCategoryChange = (category) => {
        category.preventDefault();
        setFilter(category.target.value);
    }

    const handleTimespanChangeYear = (year) => {
        year.preventDefault();
        setFilter(year.target.value);
    }

    const handleTimespanChangeMonth = (month) => {
        month.preventDefault()
        setFilter(month.target.value);
    }


    const filterYear = useRef(null);
    const filterMonth = useRef(null);
    const filterCategory = useRef(null);

    function clearFilters() {
        filterYear.current.value = "Years";
        filterMonth.current.value = "Months";
        filterCategory.current.value = "Uncategorized";
        setFilter('All')
        
    }

    return (
        <div id="filter">
            <h3 id="filter-title">Time</h3>
            <div id="filter-wrapper">
                <select className="filter-time" ref={filterYear} name="timespan-year" onChange={(e) => handleTimespanChangeMonth(e)}>
                    <TimespanYear />
                </select>

                <select className="filter-time" ref={filterMonth} name="timespan-month" onChange={(e) => handleTimespanChangeYear(e)}>
                    <TimespanMonth />
                </select>
            </div>
            <h3 id="category-title">Category</h3>
            <select id="filter-category" ref={filterCategory} name="category" onChange={(e) => handleCategoryChange(e)}>
                <Category />
            </select>
            <button id="clear-filters" onClick={clearFilters}>Clear filter</button>
        </div>
    );
}