import {FC, useRef} from "react";
import {DateObject, days, useDate} from "../hooks/useDate";


export const DatePicker: FC = () => {
    const date: DateObject = useDate();
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const numberOfListElements = windowSize.current[0] > 700 ? 7 : 4;

    const createElements = (): JSX.Element[] => {
        let currentDay: number = date.dayNumber;
        let counterWeekDays: number = date.utcDate;
        let elements: JSX.Element[] = [];

        for (let i = 0; i < numberOfListElements; ++i) {
            elements.push(<ListElement numberDate={currentDay} dayWeek={days[counterWeekDays].substring(0, 3)}/>);

            if (counterWeekDays < 6) {
                counterWeekDays++;
            } else {
                counterWeekDays = 0;
            }

            currentDay++;
        }

        return elements;
    };

    const displayElements: JSX.Element[] = createElements();

    return (
        <div className={'w-full flex justify-center p-3 bg-blue-800'}>
            <ul className={'inline-flex items-center gap-1'}>
                <LeftPointer/>
                {displayElements}
                <RightPointer/>
            </ul>
        </div>
    )
}

const ListElement: FC<{ numberDate: number, dayWeek: string }> = (props) => {
    return (
        <button
            className="w-14 h-14 flex flex-col p-3 border border-sky-500 rounded-md bg-pink-800 text-center items-center hover:bg-pink-600">
            <p className="text-xs font-medium text-gray-800 dark:text-white">{props.numberDate}</p>
            <p className="text-xs font-medium text-gray-800 dark:text-white">{props.dayWeek}</p>
        </button>
    )
}

const LeftPointer: FC = () => {
    return (
        <button
            className="block w-12 h-12 px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"></path>
            </svg>
        </button>
    )
}

const RightPointer: FC = () => {
    return (
        <button
            className="block px-3 py-2 w-12 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
            </svg>
        </button>
    )
}