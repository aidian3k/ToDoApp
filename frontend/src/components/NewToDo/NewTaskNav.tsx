import React, {FC, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// @ts-ignore
import logo from "../../resources/logo.png";
import {DateObject, days, useDate} from "../../hooks/useDate";
// @ts-ignore
import avatar from "../../resources/avatar.png";
import {ClickedMenu} from "../Navbar";
// @ts-ignore
import backIcon from '../../resources/back-icon.svg';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {User} from "../../model/logic/User";

export const NewTaskNav: FC = () => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);
    const date: DateObject = useDate();
    const navigate = useNavigate();
    const user = useSelector<RootState, User>(state => state.user.value);

    return (
        <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container sm:flex flex-wrap items-center justify-between mx-auto">
                <div className={'sm:flex items-center'}>
                    <Link to="/main-page" className="flex items-center">
                        <img src={logo} className="sm:h-10 mr-3 mt-1 h-8" alt={'logo'}/>
                        <h1 className="flex items-center sm:text-5xl text-xl font-extra bold dark:text-white">Edit<span
                            className="bg-blue-100 text-blue-800 text-sm font-semi-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Task</span>
                        </h1>
                    </Link>
                    <div className={'sm:ml-5 flex gap-2'}>
                        <span className={'self-end'}><h4 className="sm:text-3xl text-base font-bold dark:text-white">{days[date.utcDate]}</h4></span>
                        <span className={'self-end'}><h4 className="sm:text-2xl text-font-bold dark:text-white">{date.monthName}</h4></span>
                        <span className={'self-end'}><h4 className="sm:text-xl font-bold dark:text-white ">{date.year}</h4></span>
                    </div>
                    <button className={'flex justify-center items-center gap-2 sm:ml-5'} onClick={() => navigate('/main-page')}>
                        <img src={backIcon} className={'w-12 h-12'}/>
                        <h4 className="sm:text-xl font-bold dark:text-white ">Get back:)</h4>
                    </button>
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span> {user.email}
                    </h1>
                </div>

            </div>

        </nav>
    )
}