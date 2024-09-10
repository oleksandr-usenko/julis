import styles from "./DayCell.module.css";

type DayCellProps = {
    day?: Date | string;
    className?: string;
    children?: React.ReactNode;
    isToday?: boolean;
}

const DayCell = (props: DayCellProps) => {
    return (
        <div className={`${styles.dayCell} ${props.isToday && styles.today}`}>
            {props.children}
        </div>
    )
}

export default DayCell;