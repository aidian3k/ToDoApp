import React, {FC} from "react";
import {Navbar} from "../components/Navbar";
import {DatePicker} from "../components/DatePicker";
import {ToDoElement} from "../components/ToDoElement";
import {MenuType} from "../components/MenuType";
import {AddButton} from "../components/AddButton";

export const MainPage: FC = () => {
    return (
        <div className={'sm:w-screen sm:h-screen w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'}>
            <Navbar/>
            <DatePicker/>
            <MenuType/>
            <div className={'flex flex-col items-center gap-2'}>
                <ToDoElement date={new Date(11)} name={'Pass books'} description={'hello'} completed={false}/>
                <ToDoElement date={new Date(11)} name={'Pass books'} description={'hello'} completed={false}/>
                <ToDoElement date={new Date(11)} name={'Pass books'} description={'hello'} completed={false}/>
            </div>
            <div className={'flex items-center justify-center p-10'}>
                <AddButton/>
            </div>
        </div>
    )
}