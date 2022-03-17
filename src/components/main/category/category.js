import './category.css';
import { useState } from 'react';

function Options(props) {
    return (
        <option id={props.id} className={props.class} value={props.value}>{props.name}</option>
    )
}

function Category() {

    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);


        console.log('event.target.value ' + event.target.value)
        console.log('option: ' + option)
    }


    return (
        <>
            <select id="category-options" onChange={handleOptionChange}>
                <Options id="category" className="options" name="Choose category" />
                <Options id="food" value="food" name="Food"/>
                <Options id="shopping" value="shopping" name="Shopping" />
                <Options id="electronics" value="electronics" name="Electronics" />
            </select>
        </>
    );
}

export default Category;