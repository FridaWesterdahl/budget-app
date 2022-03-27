import './filter.css';

export default function Filter({ setSearchItem }) {

    return (
        <div id="filter">
            <h3 id="filter-title">Filter</h3>
            <div id="filter-wrapper">
                <input placeholder="Search..." onChange={(e) => setSearchItem(e.target.value)} />
        </div>
        </div>
    );
}