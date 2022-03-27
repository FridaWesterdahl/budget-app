import Filter from './Filter';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import BigLogo from '../start/BigLogo';
import Footer from '../footer/Footer';
import './main.css'
import { useState } from 'react';

export default function Main({expenses, setExpenses}) {
    const [click, setClick] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const handleClick = () => setClick(!click);

    return (
        <div id="show">
            <button id="details-button" className={click ? 'details-button-clicked' : 'details-button'}
                onClick={handleClick} type="button" value="text">
                SHOW DETAILS</button>

            <div id="wrapper" className={click ? '' : 'hidden'}>
                <Filter setSearchItem={setSearchItem} />
                <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
                <ExpenseList expenses={expenses} setExpenses={setExpenses} searchItem={searchItem} />
            </div>
            <div className={click ? 'hidden' : ''}>
                <BigLogo />
            </div>
            <div className={click ? '' : 'hidden'}>
                <Footer />
            </div>
        </div>

    );
}
