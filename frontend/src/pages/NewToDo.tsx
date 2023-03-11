import {FC} from "react";
import {NewTaskNav} from "../components/NewTaskNav";
import {CalendarPicker, MonthHeader} from "../components/CalendarPicker";
import {ToDoCreator} from "../components/ToDoCreator";

export const NewToDo: FC = () => {
    return (
        <div className={'sm:w-screen sm:h-screen w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'}>
            <NewTaskNav/>
            <MonthHeader/>
            <CalendarPicker/>
            <ToDoCreator/>
        </div>
    )
}