function Money(props) {
return(
    <li id={props.id} name={props.name} money={props.money}>{props.name}: {props.money}</li>
    
)
}

function Header() {
    const moneySpent = 19000;
    return (
        <>
            <header>
                <h1 id="header">BUDGET APP</h1>
                <h2 id="h2">by NeverDontGiveUp Dev.</h2>
                <h3 id="h3">get you economy in order</h3>
            </header>

            <div id="summary">
                <ul id="numbers">
                    <li>Budget [SEK] <input id="budget" type="number"></input></li>
                    <Money id="money-spent"name="Money spent [SEK]"money={ moneySpent } />
                    <Money id="money-left"name="Money left [SEK]"money="1000" />
                </ul>
            </div>
        </>
    );
}



export default Header;