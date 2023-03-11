import React, {FC} from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import logo from '../resources/logo.png';

export const Footer: FC = () => {
    return (
        <footer className="bg-gray-900 sticky">
            <div className="p-5 flex sm:flex-row flex-col sm:justify-evenly items-stretch">
                <Link to="/login" className="flex items-center self-start">
                    <img src={logo} className="h-8 mr-3" />
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo App</span>
                </Link>
                <span className="text-sm text-gray-500  dark:text-gray-400 self-center">App created by aidian3k. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
                    <li>
                        <Link to="#" className="hover:underline">About</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}