import {Button} from "@mui/material";
import Calendar from "../../UI/calendar/Calendar.tsx";
import {useEffect, useState} from "react";
import {addMonths, format, subMonths} from "date-fns";
import {getBookings} from "../../../services/api.ts";
import TimeSlots from "./TimeSlots.tsx";

const Booking = () => {
    const [date, setDate] = useState(new Date());

    let bookings: any[];

    useEffect(() => {
        getBookings().then(res => {
            bookings = res.data;
            console.log(bookings);
        });
    }, []);

    return (
        <>
            <div className="flex justify-evenly bg-blue-500 p-4">
                <Button onClick={() => setDate(subMonths(date, 1))} variant="contained">Prev</Button>
                <div>{format(date, "LLLL yy")}</div>
                <Button onClick={() => setDate(addMonths(date, 1))} variant="contained">Next</Button>
            </div>
            <Calendar date={date}/>
            <TimeSlots />
        </>
    )
}

export default Booking;