import {Button} from "@mui/material";
import Calendar from "../UI/calendar/Calendar.tsx";
import {useState} from "react";
import {addMonths, format, subMonths} from "date-fns";

const Booking = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            Booking <br/>
            <Button onClick={() => setDate(subMonths(date, 1))} variant="contained">Prev</Button>
            {format(date, "LLLL yy")}
            <Button onClick={() => setDate(addMonths(date, 1))} variant="contained">Next</Button>
            <Calendar date={date}/>
        </>
    )
}

export default Booking;