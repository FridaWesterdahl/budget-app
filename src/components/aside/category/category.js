function Options(props) {
    return (
        <option id={props.id} class={props.class} value={props.name}>{props.name}</option>
    )
  }

function Category() {
    return (
        <>
            <select id="category-otions">
                <Options id="category" class="options" name="Choose category" />
                <Options id="food" name="Food" />
                <Options id="shopping" name="Shopping" />
                <Options id="electronics" name="Electronics" />
            </select>
        </>
    );
}

export default Category;