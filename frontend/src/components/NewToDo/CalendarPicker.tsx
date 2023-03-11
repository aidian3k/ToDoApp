import React, {FC} from "react";
import {ListElement} from "../DatePicker";
import {DateObject, days, useDate} from "../../hooks/useDate";



export const CalendarPicker: FC = () => {
    const date: DateObject = useDate();
    const createElements = (): JSX.Element[] => {
        let currentDay: number = date.dayNumber;
        let counterWeekDays: number = date.utcDate;
        let elements: JSX.Element[] = [];

        while (true) {
            elements.push(<ListElement numberDate={currentDay} dayWeek={days[counterWeekDays].substring(0, 3)}/>);

            if (counterWeekDays < 6) {
                counterWeekDays++;
            } else {
                counterWeekDays = 0;
            }

            currentDay++;

            if (currentDay >= 31) {
                break;
            }
        }

        return elements;
    };

    return (
        <div className={'flex w-full p-3 justify-center items-center'}>
            <div className="grid grid-cols-7 gap-2">
                {createElements()}
            </div>
        </div>
    )
}

export const MonthHeader: FC = () => {
    const date: DateObject = useDate();

    return (
        <div className={'flex w-full text-center justify-center flex-col gap-0'}>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl pt-2"><span
                className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{date.monthName} </span>{date.year}</h1>
            <p className="text-lg font-normal text-gray-300 lg:text-xl dark:text-gray-400 m-0">Choose deadline date!</p>
        </div>
    )
}
