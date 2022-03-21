import Filter from './Filter';
import NewExpense from './Expense';
import BigLogo from '../start/BigLogo';
import './main.css'
import { useState } from 'react';

function Main() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div id="show">
            <button id="details-button" className={click ? 'details-button-clicked' : 'details-button'}
                onClick={handleClick} type="button" value="text">
                SHOW DETAILS</button>

            <div id="wrapper" className={click ? '' : 'hidden'}>
                <Filter />
                <div id="expense-area">
                    <NewExpense />
                </div>
            </div>
            <div className={click ? 'hidden' : ''}>
                <BigLogo />
            </div>
        </div>

    );
}

export default Main;