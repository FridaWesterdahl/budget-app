import Category from "./category/category";
import './filter.css';

function Filter() {
    return (
        <div id="aside">
            <button id="show-details-button" type="button" value="text">
                S H O W &ensp;&ensp; D E T A I L S</button>

            <div id="filter">
                <h3>t i m e</h3>
                <select id="time-filter">
                    <option value="" id="category" class="options">Choose timespan</option>
                    <option value="" id="per-year">Year</option>
                    <option value="" id="per-month">Month</option>
                    <option value="" id="per-day">Day</option>
                </select>

                <h3>c a t e g o r y</h3>
                <Category />
                <p>. . . . . . . . . . . . . . .</p>
            </div>
        </div>
    );
}

export default Filter;