function Header() {
    return (
        <>
            <header>
                <h1 id="header">BUDGET APP</h1>
                <h2 id="h2">by NeverDontGiveUp Dev.</h2>
                <h3 id="h3">get you economy in order</h3>
            </header>

            <section id="graph">
                <img src="https://mb.cision.com/Public/977/3482646/aa5533be0d43e6fc_800x800ar.png" alt=""></img>
            </section>

            <div id="summary">
                <ul id="numbers">
                    <li>Budget:<input id="budget" type="number"></input>:-</li>
                    <li id="money-spent">Money spent: 15 000:-</li>
                    <li id="money-left">Money left: 10 000:-</li>
                </ul>
            </div>
        </>
    );
}

export default Header;