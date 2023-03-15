import React, {FC, useState} from "react";
import {Navbar} from "../components/Navbar";
import {DatePicker} from "../components/DatePicker";
import {MenuType} from "../components/MenuType";
import {AddButton} from "../components/AddButton";
import {MainPageElements} from "../components/MainPageElements";
import {Footer} from "./Footer";

export const MainPage: FC = () => {
    return (
        <div>
            <Navbar/>
            <MenuType/>
            <MainPageElements/>
            <div className={'flex items-center justify-center p-10'}>
                <AddButton/>
            </div>
            <Footer/>
        </div>
    )
}