import './start.css';
import BigLogo from './BigLogo';
import { useState } from 'react';

function Money(props) {
    return (
        <p id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</p>
    );
}

function Start() {
    const moneySpent = 290000;
    const moneyLeft = 20000;

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            {/* <header>
                <h1 id="header">BUDGET APP</h1>
                <h2 id="h2">by NeverDontGiveUp Dev.</h2>
                <h3 id="h3">get you economy in order</h3>
            </header> */}
            <section id="graph">
                <img src="https://mb.cision.com/Public/977/3482646/aa5533be0d43e6fc_800x800ar.png"></img>
            </section>
            <div id="summary">
                <p>Budget [SEK] <input id="budget" type="number"></input></p>
                <Money id="money-spent" name="Money spent [SEK]" money={moneySpent} />
                <Money id="money-left" name="Money left [SEK]" money={moneyLeft} />
            </div>
            <button className={click ? 'details-button-clicked' : 'details-button'}
                onClick={handleClick} type="button" value="text">
                S H O W &ensp;&ensp; D E T A I L S</button>
            <BigLogo />
        </>
    );
}



export default Start;