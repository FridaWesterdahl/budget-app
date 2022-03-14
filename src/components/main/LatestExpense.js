import './latestExpense.css';


function Expense(props) {
    return (
        <li>
            <p className='purchase-date' date={props.date}>{props.date}</p>
            <p className='purchase-item' item={props.item}>{props.item}</p>
            <p className='purchase-category' category={props.category}>{props.category}</p>
            <p className='purchase-cost' cost={props.cost}>{props.cost}</p>
            <button className='remove-purchase'>❌</button>
        </li>
    );
}

function LatestExpense() {

    // const removeExpense = () =>

    return (
        <div id="expenses">
            <h3>L A T E S T &nbsp;&nbsp; E X P E N S E S</h3>
            <ul id="latest-expenses">
                <li>
                    <p className='purchase-date'>01-03-2022</p>
                    <p className='purchase-item'>ICA</p>
                    <p className='purchase-category'>Food &amp; Beverages</p>
                    <p className='purchase-cost'>300:-</p>
                    <button className='remove-purchase'>❌</button>
                </li>
                <li>
                    <p className='purchase-date'>01-03-2022</p>
                    <p className='purchase-item'>dfddgfgfd</p>
                    <p className='purchase-category'>Electronics</p>
                    <p className='purchase-cost'>3000:-</p>
                    <button className='remove-purchase'>❌</button>
                </li>
                <Expense date="14-03-2022" item="Car" category="Other" cost="30000:-" />
                <Expense date="14-03-2022" item="Shoes" category="Shopping" cost="800:-" />
                <Expense date="14-03-2022" item="Clothes" category="Shopping" cost="500:-" />

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