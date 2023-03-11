import React, {FC, useState} from "react";
// @ts-ignore
import logo from '../resources/logo.png';
import {Link, useNavigate} from "react-router-dom";
// @ts-ignore
import avatar from '../resources/avatar.png'
import {DateObject, days, useDate} from "../hooks/useDate";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {User} from "../model/logic/User";
import {signOut} from "../redux/UserSlice";
export const Navbar: FC = () => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);
    const date: DateObject = useDate();
    const user: User = useSelector<RootState, User>(state => state.user.value);

    return (
        <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
            <div className="container sm:flex flex-wrap items-center justify-between mx-auto">
                <div className={'sm:flex items-center'}>
                    <Link to="/main-page" className="flex items-center">
                        <img src={logo} className="sm:h-10 mr-3 mt-1 h-8" alt={'logo'}/>
                        <h1 className="flex items-center sm:text-5xl text-xl font-extra bold dark:text-white">ToDo<span
                            className="bg-blue-100 text-blue-800 text-sm font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">App</span>
                        </h1>
                    </Link>
                    <div className={'sm:ml-5 flex gap-2'}>
                        <span className={'self-end'}><h4 className="sm:text-3xl text-base font-bold dark:text-white">{days[date.utcDate]}</h4></span>
                        <span className={'self-end'}><h4 className="sm:text-2xl text-font-bold dark:text-white">{date.monthName}</h4></span>
                        <span className={'self-end'}><h4 className="sm:text-xl font-bold dark:text-white ">{date.year}</h4></span>
                    </div>
                </div>

                <div className="flex items-center md:order-2 sm:my-0 my-2 relative sm:w-1/6 w-full">
                    <button type="button"
                            className="flex mr-3 relative text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            onClick={() => setShowingMenu(!showingMenu)}
                            >
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={avatar} alt={'hello'}/>
                    </button>

                    <div className={'absolute sm:ml-1 top-0 left-8'}>
                        {showingMenu && <ClickedMenu/>}
                    </div>

                    <h1 className="sm:ml-2 ml-0 text-xl font-extrabold text-gray-900 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span>{user.email.substring(10)}
                        </h1>
                </div>

            </div>

        </nav>)
}

export const ClickedMenu: FC = () => {
    const user = useSelector<RootState, User>(state => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div
            className="z-50 my-4 text-base list-none rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white"></span>
                <span
                    className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <Link to="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                    <button
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={() => {
                            dispatch(signOut());
                            navigate('/login');
                        }}
                    >Sign out</button>
                </li>
            </ul>
        </div>
    )
}