import styles from "./TimeSlots.module.css";

const TimeSlots = () => {
    const slots: string[] = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

    return (<>
        <div className={styles.justifyEvenly + " mt-4 flex flex-wrap justify-evenly gap-2"}>
            {slots.map(slot => <div className={styles.timeslot} key={slot}>{slot}</div>)}
        </div>
        </>)
}

export default TimeSlots;