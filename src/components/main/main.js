import Filter from './Filter';
import NewExpense from './NewExpense';
import LatestExpense from './LatestExpense';
import './main.css'

function Main() {
    return (
        <div id="wrapper">
            <Filter />
            <div id="expense-area">
                <NewExpense />
                <LatestExpense />
            </div>
        </div>

    );
}

export default Main;