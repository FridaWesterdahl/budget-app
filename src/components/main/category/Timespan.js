export function TimespanOption(props) {
    return (
        <option id={props.id} className={props.class} min={props.min} max={props.max} value={props.value} date={props.name}>{props.name}</option>
    )
}
export function TimespanYear() {

    return (
        <>
            <TimespanOption id="category" class="Timespanoption" name="Years" />
            <TimespanOption id="2021" value="2021" name="2021" />
            <TimespanOption id="2022" value="2022" min="2022-01-01" max="2022-12-31" name="2022" />
        </>
    );
}
export default function TimespanMonth() {

    return (
        <>
            <TimespanOption id="category" class="Timespanoption" name="Months" />
            <TimespanOption id="january" value="1" name="January" />
            <TimespanOption id="february" value="2" name="February" />
            <TimespanOption id="march" value="3" name="March" />
            <TimespanOption id="april" value="4" name="April" />
            <TimespanOption id="may" value="5" name="May" />
            <TimespanOption id="june" value="6" name="June" />
            <TimespanOption id="july" value="7" name="July" />
            <TimespanOption id="august" value="8" name="August" />
            <TimespanOption id="september" value="9" name="September" />
            <TimespanOption id="october" value="10" name="October" />
            <TimespanOption id="november" value="11" name="November" />
            <TimespanOption id="december" value="12" name="December" />
        </>
    );
}