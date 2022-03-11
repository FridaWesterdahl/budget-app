import './latestExpense.css';

function LatestExpense() {
    return (
        <div id="expenses">
            <h3>L A T E S T &nbsp;&nbsp; E X P E N S E S</h3>
            <ul id="latest-expenses">
                <li>
                    <p id="purchase-date">01-03-2022</p>
                    <p id="purchase-item">ICA</p>
                    <p id="purchase-category">Food & Beverages</p>
                    <p id="purchase-cost">300:-</p>
                    <button id="remove-purchase">❌</button>
                </li>
                <li>
                    <p id="purchase-date">01-03-2022</p>
                    <p id="purchase-item">ICA</p>
                    <p id="purchase-category">Food & Beverages</p>
                    <p id="purchase-cost">300:-</p>
                    <button id="remove-purchase">❌</button>
                </li>
                <li>
                    <p id="purchase-date">01-03-2022</p>
                    <p id="purchase-item">ICA</p>
                    <p id="purchase-category">Food & Beverages</p>
                    <p id="purchase-cost">300:-</p>
                    <button id="remove-purchase">❌</button>
                </li>
                <li>
                    <p id="purchase-date">01-03-2022</p>
                    <p id="purchase-item">ICA</p>
                    <p id="purchase-category">Food & Beverages</p>
                    <p id="purchase-cost">300:-</p>
                    <button id="remove-purchase">❌</button>
                </li>
                <li>
                    <p id="purchase-date">01-03-2022</p>
                    <p id="purchase-item">ICA</p>
                    <p id="purchase-category">Food & Beverages</p>
                    <p id="purchase-cost">300:-</p>
                    <button id="remove-purchase">❌</button>
                </li>
            </ul>
            <div id="show-alternative">
                <p>s h o w:</p>
                <button id="show-5">5</button>
                <button id="show-10">10</button>
                <button id="show-20">20</button>
            </div>
        </div>
    )
}

export default LatestExpense;