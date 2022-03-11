import Category from "./category/Category";
import './filter.css';

function Filter() {
    return (
        <div id="aside">
            <button id="new-expense-button" type="button" value="text">n e w &nbsp;&nbsp; e x p e n s e</button>
            <button id="latest-expenses-button" type="button" value="text">l a t e s t &nbsp;&nbsp; e x p e n s e s</button>
            <button id="filter-button" type="button" value="text">f i l t e r</button>

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