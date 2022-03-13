import './newExpense.css';
import Category from '../main/category/category';

function NewExpense() {
    return (
        <div id="new-expense">
            <p>N E W &nbsp;&nbsp; E X P E N S E:</p>
            <form>
                <input type="date" id="date"></input>
                <input id="input" type="text" placeholder="Enter expense..."></input>
            <Category />
            <button type="submit" id="submit">add</button>
            </form>
        </div>
    );
}

export default NewExpense;