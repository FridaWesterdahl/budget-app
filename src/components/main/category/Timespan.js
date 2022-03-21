export function TimespanOption(props) {
    return (
        <option id={props.id} className={props.class} date={props.name}>{props.name}</option>
    )
}
export function TimespanYear() {

    return (
        <>
            <TimespanOption id="category" className="Timespanoption" name="Years" />
            <TimespanOption id="2021" name="2021" />
            <TimespanOption id="2022" name="2022" />
        </>
    );
}
export default function TimespanMonth() {

    return (
        <>
            <TimespanOption id="category" className="Timespanoption" name="Months" />
            <TimespanOption id="january" name="January" />
            <TimespanOption id="february" name="February" />
            <TimespanOption id="march" name="March" />
            <TimespanOption id="april" name="April" />
            <TimespanOption id="may" name="May" />
            <TimespanOption id="june" name="June" />
            <TimespanOption id="july" name="July" />
            <TimespanOption id="august" name="August" />
            <TimespanOption id="september" name="September" />
            <TimespanOption id="october" name="October" />
            <TimespanOption id="november" name="November" />
            <TimespanOption id="december" name="December" />
        </>
    );
}

export function TimespanDate() {

    return (
        <>
            <TimespanOption id="category" className="Timespanoption" name="Date" />
            <TimespanOption id="1" name="1" />
            <TimespanOption id="2" name="2" />
            <TimespanOption id="3" name="3" />
            <TimespanOption id="4" name="4" />
            <TimespanOption id="5" name="5" />
            <TimespanOption id="6" name="6" />
            <TimespanOption id="7" name="7" />
            <TimespanOption id="8" name="8" />
            <TimespanOption id="9" name="9" />
            <TimespanOption id="10" name="10" />
            <TimespanOption id="11" name="11" />
            <TimespanOption id="12" name="12" />
        </>
    );
}