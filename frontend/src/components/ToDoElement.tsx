import {FC} from "react";
import {ToDo} from "../model/logic/ToDo";
// @ts-ignore
import photo from '../resources/todobackground.jpg';
// @ts-ignore
import bell from '../resources/bell.webp';
// @ts-ignore
import checkList from '../resources/check-list.svg';

export const ToDoElement: FC<ToDo> = (props: ToDo) => {
    return (
        <div className={'flex gap-3 rounded-lg border border-gray-300 sm:p-0 p-5 sm:w-1/2 w-8/10 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'}>
            <div className={'flex items-center sm:w-1/6 justify-center'}>
                <Checkbox/>
            </div>
            <div className={'flex flex-col sm:w-3/6 sm:p-5 p-0 gap-1'}>
                    <p className=" font-semi-bold text-gray-500 dark:text-gray-400 italic ">03:00 PM</p>
                    <h5 className="sm:text-xl text-base font-bold text-black">Meeting Ux Case</h5>
                    <p className="font-bold text-gray-400 sm:text-base text-sm">Discuss Milton website</p>
            </div>
            <div className={'flex flex-col items-center sm:w-1/6 gap-8 p-5'}>
                <p className={'font-bold text-gray-900 italic'}>Edit</p>
                <img src={bell} className={'w-8 h-8 self-center'} alt={'image'}/>
            </div>
            <div className={'sm:w-1/6 hidden rounded-lg hidden bg-gradient-to-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:flex items-center justify-center'}>
                <img src={checkList} className={'w-8 h-8'} alt={'photo'}/>
            </div>
        </div>
    )
}

export const Checkbox: FC = () => {
    return (
        <button>
            <span
                className="bg-gray-100 text-gray-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                          clipRule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
            </span>
        </button>)
}