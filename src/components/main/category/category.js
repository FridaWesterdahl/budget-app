import './category.css';

export function Options(props) {
    return (
        <option id={props.id} className={props.class} value={props.name}>{props.name}</option>
    )
}

export default function Category() {



    const [option, setOption] = useState("");

    const handleOptionChange = (event) => {
        event.preventDefault();
        setOption(event.target.value);
        console.log('Category(); option: ' + '"' + option + '"') //previous value
        console.log('Category(); event.target.value ' + '"' + event.target.value + '"') //new value set

        chosenOption = event.target.value
        console.log('Our variable: ' + '"' + chosenOption + '"')
    }



    return (
        <>
            <Options id="category" className="options" name="Uncategorized" />
            <Options id="food" name="Food" />
            <Options id="shopping" name="Shopping" />
            <Options id="electronics" name="Electronics" />
        </>
    );
}