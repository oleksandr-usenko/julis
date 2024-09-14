import {addDays, endOfMonth, endOfWeek, format, isSameDay, startOfMonth, startOfWeek} from "date-fns";
import DayCell from "./DayCell.tsx";
import {useEffect, useState} from "react";

type CalendarProps = {
    date: Date;
}

const Calendar = (props: CalendarProps) => {
    const today = new Date();
    let monthStart: Date;
    let monthEnd: Date;
    let startDate: Date;
    let endDate: Date;

    const [days, setDays] = useState<Date[]>([]);

    useEffect(() => {
        monthStart = startOfMonth(props.date);
        monthEnd = endOfMonth(props.date);

        startDate = startOfWeek(monthStart, { weekStartsOn: 1 });

        endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

        const generateDays = () => {
            const _days = [];
            let day = startDate;

            while (day <= endDate) {
                _days.push(day);
                day = addDays(day, 1);
            }

            return _days;
        };

        setDays(generateDays());
    }, [props.date]);

    return (
        <div>
            <div className="flex text-center">
                <DayCell>Mon</DayCell>
                <DayCell>Tue</DayCell>
                <DayCell>Wed</DayCell>
                <DayCell>Thu</DayCell>
                <DayCell>Fri</DayCell>
                <DayCell>Sat</DayCell>
                <DayCell>Sun</DayCell>
            </div>
            <div className="flex flex-wrap">
                {days.map((day, index) => <DayCell isToday={isSameDay(today, day)} day={day} key={index}>{format(day, "d")}</DayCell>)}
            </div>
        </div>
    )
}

export default Calendar;