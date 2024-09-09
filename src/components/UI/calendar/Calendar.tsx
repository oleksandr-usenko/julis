import {getDaysInMonth} from "date-fns";
import DayCell from "./DayCell.tsx";

// makeDateCells(fromMoment) {
//     this.daysCells = [];
//     this.month = fromMoment.getMonth();
//     this.year = fromMoment.getFullYear();
//     const FIRST_DAY = new Date(fromMoment.setDate(0));
//     const LAST_DAY = new Date(new Date(this.year, this.month + 1, 0));
//     const DAYS_OF_PREV_MONTH = FIRST_DAY.getDay();
//     const DAYS_IN_PREV_MONTH = new Date(this.year, this.month, 0).getDate();
//     const DAYS_IN_CURRENT_MONTH = LAST_DAY.getDate();
//     for (let i = DAYS_OF_PREV_MONTH; i > 0; i--) {
//         this.daysCells.push({
//             value: DAYS_IN_PREV_MONTH - i + 1,
//             month: this.month - 1,
//         });
//     }
//     for (let i = 1; i <= DAYS_IN_CURRENT_MONTH; i++) {
//         this.daysCells.push({ value: i, month: this.month });
//     }
//     // 35 is the number of days for 5-weeks calendar view;
//     // 42 is the number of days for 6-weeks view
//     const EXTRA_DAYS_TO_FILL =
//         42 - (DAYS_OF_PREV_MONTH + DAYS_IN_CURRENT_MONTH);
//     for (let i = 1; i <= EXTRA_DAYS_TO_FILL; i++) {
//         this.daysCells.push({ value: i, month: this.month + 1 });
//     }
// },

const Calendar = () => {

    const days = Array(getDaysInMonth(new Date())).fill(0);
    console.log(days);
    return (
        <div>
            <div className="flex text-center">
                <DayCell className="grow">Mon</DayCell>
                <DayCell className="grow">Tue</DayCell>
                <DayCell className="grow">Wed</DayCell>
                <DayCell className="grow">Thu</DayCell>
                <DayCell className="grow">Fri</DayCell>
                <DayCell className="grow">Sat</DayCell>
                <DayCell className="grow">Sun</DayCell>
            </div>
            <div className="flex flex-wrap">
                {days.map((_, index) => <DayCell key={index}>{index}</DayCell>)}
            </div>
        </div>
    )
}

export default Calendar;