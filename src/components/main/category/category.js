import './category.css';
import { useState } from 'react';

function Options(props) {
    return (
        <option id={props.id} class={props.class} value={props.name}>{props.name}</option>
    )
}

function Category() {

    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);
    }

    return (
        <>
            <select id="category-options" name="category" value={option} onChange={handleOptionChange}>
                <Options id="category" class="options" name="Choose category" value={option} />
                <Options id="food" name="Food" value={option} />
                <Options id="shopping" name="Shopping" value={option} />
                <Options id="electronics" name="Electronics" value={option} />
            </select>
        </>
    );
}

export default Category;