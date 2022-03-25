export function TimespanOption(props) {
    return (
        <option id={props.id} className={props.class} value={props.value} date={props.name}>{props.name}</option>
    )
}
export function TimespanYear() {

    return (
        <>
            <TimespanOption id="category" class="Timespanoption" name="Years" />
            <TimespanOption id="2021" value="2" name="2021" />
            <TimespanOption id="2022" value="2" name="2022" />
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

export function TimespanDate() {

    return (
        <>
            <TimespanOption id="category" className="Timespanoption" name="Date" />
            <TimespanOption id="1" value="1" name="1" />
            <TimespanOption id="2" value="2" name="2" />
            <TimespanOption id="3" value="3" name="3" />
            <TimespanOption id="4" value="4" name="4" />
            <TimespanOption id="5" value="5" name="5" />
            <TimespanOption id="6" value="6" name="6" />
            <TimespanOption id="7" value="7" name="7" />
            <TimespanOption id="8" value="8" name="8" />
            <TimespanOption id="9" value="9" name="9" />
            <TimespanOption id="10" value="10" name="10" />
            <TimespanOption id="11" value="11" name="11" />
            <TimespanOption id="12" value="12" name="12" />
            <TimespanOption id="13" value="13" name="13" />
            <TimespanOption id="14" value="14" name="14" />
            <TimespanOption id="15" value="15" name="15" />
            <TimespanOption id="16" value="16" name="16" />
            <TimespanOption id="17" value="17" name="17" />
            <TimespanOption id="18" value="18" name="18" />
            <TimespanOption id="19" value="19" name="19" />
            <TimespanOption id="20" value="20" name="20" />
            <TimespanOption id="21" value="21" name="21" />
            <TimespanOption id="22" value="22" name="22" />
            <TimespanOption id="23" value="23" name="23" />
            <TimespanOption id="24" value="24" name="24" />
            <TimespanOption id="25" value="25" name="25" />
            <TimespanOption id="26" value="26" name="26" />
            <TimespanOption id="27" value="27" name="27" />
            <TimespanOption id="28" value="28" name="28" />
            <TimespanOption id="29" value="29" name="29" />
            <TimespanOption id="30" value="30" name="30" />
            <TimespanOption id="31" value="31" name="31" />
        </>
    );
}