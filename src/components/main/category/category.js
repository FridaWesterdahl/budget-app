import './category.css';
import { useState } from 'react';

function Options(props) {
    return (
        <option id={props.id} class={props.class} value={props.name}>{props.name}</option>
    )
}

function Category() {

    const [state, setState] = useState({
        ...
        categoryOption: ""
    });

    const handleOptionChange = (event) => {
        event.preventDefault();

        setState(event.target.value);


        console.log('event.target.value: ' + event.target.value)
    }




    return (
        <>
            <form>
                <select id="category-options" name="categoryOption" value={state.categoryOption} onChange={handleOptionChange}>
                    <Options id="category" class="options" name="Choose category" />
                    <Options id="food" name="Food" />
                    <Options id="shopping" name="Shopping" />
                    <Options id="electronics" name="Electronics" value="Electronics" />
                </select>
            </form>
        </>
    );
}

export default Category;