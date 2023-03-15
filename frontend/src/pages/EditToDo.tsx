import {FC} from "react";
import {NewTaskNav} from "../components/NewToDo/NewTaskNav";
import {CalendarPicker, MonthHeader} from "../components/NewToDo/CalendarPicker";
import {ToDoCreator} from "../components/NewToDo/ToDoCreator";
import {useLocation} from "react-router-dom";

export const EditToDo: FC = () => {
    const {state} = useLocation();

    return (
        <div className={'sm:w-screen sm:h-screen w-full h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'}>
            <NewTaskNav/>
            <MonthHeader/>
            <CalendarPicker/>
            <ToDoCreator date={state.days} hour={state.hours} header={state.name} notes={state.description} edit={true} id={state.id}/>
        </div>
    )
}