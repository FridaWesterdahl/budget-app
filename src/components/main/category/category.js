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
        // this.useState(event.target.value)
        setOption(event.target.value);


        console.log('event.target.value ' + event.target.value)
        console.log('option: ' + option)
    }
    const value = setOption;




    return (
        <>
            <select id="category-options" name="category" value={setOption} onChange={handleOptionChange}>
                <Options id="category" class="options" name="Choose category" />
                <Options id="food" name="Food" />
                <Options id="shopping" name="Shopping" />
                <Options id="electronics" name="Electronics" value="Electronics" />
            </select>
        </>
    );
}

export default Category;