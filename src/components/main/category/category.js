import './category.css';

export function Options(props) {
    return (
        <option id={props.id} className={props.class} value={props.name}>{props.name}</option>
    )
}

export default function Category() {

    return (
        <>
            <Options id="category" className="options" name="Uncategorized" />
            <Options id="food" name="Food" />
            <Options id="shopping" name="Shopping" />
            <Options id="electronics" name="Electronics" />
            <Options id="other" name="Other" />
        </>
    );
}