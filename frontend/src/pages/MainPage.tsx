import React, {FC} from "react";
import {Navbar} from "../components/Navbar";
import {DatePicker} from "../components/DatePicker";
import {MenuType} from "../components/MenuType";
import {AddButton} from "../components/AddButton";
import {Footer} from "./Footer";
import {MainPageElements} from "../components/MainPageElements";

export const MainPage: FC = () => {
    return (
        <div className={'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'}>
            <Navbar/>
            <DatePicker/>
            <MenuType/>
            <MainPageElements/>
            <div className={'flex items-center justify-center p-10'}>
                <AddButton/>
            </div>
            <Footer/>
        </div>
    )
}