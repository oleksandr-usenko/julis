type DayCellProps = {
    day?: number | string;
    className?: string;
    children?: React.ReactNode;
}

const DayCell = (props: DayCellProps) => {
    return (
        <div className={props.className + ` w-[14.5%]`}>
            {props.children}
        </div>
    )
}

export default DayCell;