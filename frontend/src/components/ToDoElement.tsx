import {FC, useState} from "react";
import {ToDo} from "../model/logic/ToDo";
// @ts-ignore
import photo from '../resources/todobackground.jpg';
// @ts-ignore
import bell from '../resources/bell-svgrepo-com.svg';
// @ts-ignore
import checkList from '../resources/check-list.svg';
// @ts-ignore
import delImage from '../resources/delete-svgrepo-com.svg';
// @ts-ignore
import edit from '../resources/edit-svgrepo-com.svg';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {deleteOneElement, updateOneElement} from "../redux/elementsSlice";
// @ts-ignore
import doneCheckbox from '../resources/DoneCheckbox.svg';
// @ts-ignore
import unDoneCheckbox from '../resources/checkbox-svgrepo-com.svg';
import {RootState} from "../redux/store";
import {User} from "../model/logic/User";
import {Navigate, NavigateFunction, useNavigate} from "react-router-dom";
import {months} from "../hooks/useDate";

export const ToDoElement: FC<ToDo> = (props: ToDo) => {
    const dispatch = useDispatch();
    const [isCompleted, setIsCompleted] = useState<boolean>(props.completed);
    const navigate: NavigateFunction = useNavigate()
    const decorationStyles = [
        {textDecoration: 'line-through'},
        {textDecoration: 'none'}
    ];

    const handleDelete = async () => {
        const elementId = props.id;
        await axios.delete('http://localhost:8080/api/v1/tasks/' + elementId);
        dispatch(deleteOneElement(elementId));
    }

    const handleEdit = () => {
        navigate('/edit-task', {state: props});
    }

    return (
        <div className={'flex gap-3 rounded-lg border border-gray-300 sm:p-0 p-5 sm:w-1/2 w-8/10 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'}>
            <div className={'flex items-center sm:w-1/6 justify-center'}>
                <Checkbox task={props} setIsCompleted={setIsCompleted} completed={isCompleted}/>
            </div>
            <div className={'flex flex-col sm:w-3/6 sm:p-5 p-0 gap-1s'}>
                    <div className={'flex gap-2'}>
                        <span className=" font-semi-bold text-gray-500 dark:text-gray-400 italic ">{months[props.months - 1]}</span>
                        <span className=" font-semi-bold text-gray-500 dark:text-gray-400 italic ">{props.days}</span>
                    </div>
                    <p className=" font-semi-bold text-gray-500 dark:text-gray-400 italic ">{props.hours}:00 PM</p>
                    <h5 className="sm:text-xl text-base font-bold text-black"
                        style={!isCompleted ? decorationStyles[1] : decorationStyles[0]}>{props.name}</h5>
                    <p className="font-bold text-gray-400 sm:text-base text-sm">{props.description}</p>
            </div>
            <div className={'flex flex-col items-center sm:w-1/6 gap-5 p-3'}>
                <button type="button"
                        className="flex text-white justify-center gap-2 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  p-2 text-center"
                        onClick={() => handleEdit()}
                >
                    <img src={edit} className={'w-4 h-4'} alt={''}/>
                    Edit
                </button>
                <button type="button"
                        className="text-white bg-gradient-to-r flex gap-2 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm p-2 text-center"
                        onClick={() => handleDelete()}
                >
                    <img src={delImage} className={'w-4 h-4'} alt={''}/>
                    Delete
                </button>
            </div>
            <div className={'sm:w-1/6 hidden rounded-lg hidden bg-gradient-to-r bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:flex items-center justify-center'}>
                <img src={checkList} className={'w-8 h-8'} alt={'photo'}/>
            </div>
        </div>
    )
}

export const Checkbox: FC<{task: ToDo, setIsCompleted: any, completed: boolean}> = (props) => {
    const {id} = useSelector<RootState, User>(state => state.user.value);
    const dispatch = useDispatch();
    const {task, setIsCompleted, completed} = props;

    const handleCompletedButton = async () => {
        const elementId = task.id;
        setIsCompleted(!completed);

        await axios.patch('http://localhost:8080/api/v1/users/' + id + '/tasks'
            , {...task, completed: !task.completed} as ToDo);

        dispatch(updateOneElement(elementId));
    }

    return (
        <button onClick={() => handleCompletedButton()}>
            {completed ? <img className={'w-10 h-10'} src={doneCheckbox} alt={''}/>
                : <img className={'w-10 h-10 hover:transition-all'} src={unDoneCheckbox} alt={'hello'}/>}
        </button>)
}