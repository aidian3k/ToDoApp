import {FC, useState} from "react";
// @ts-ignore
import today from '../../resources/today.svg';
// @ts-ignore
import bellColor from '../../resources/bell-svgrepo-com.svg';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {changeDate} from "../../redux/dateSlice";
import axios from "axios";
import {User} from "../../model/logic/User";
import {useNavigate} from "react-router-dom";
import {Spinner} from "../errors/Spinner";
import {InputError} from "../errors/InputError";
import {Footer} from "../../pages/Footer";

export const ToDoCreator: FC<{ date: string, header: string, notes: string, hour: string, edit: boolean, id: number }> = (props) => {
    const date = useSelector<RootState, string>(state => state.date.value);
    const [header, setHeader] = useState<string>(props.date);
    const [notes, setNotes] = useState<string>(props.notes);
    const [hour, setHour] = useState<string>(props.hour);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const user: User = useSelector<RootState, User>(state => state.user.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAdd = async () => {
        if (header === '' || notes == '' || hour === '') {
            setError(true);
            return;
        }

        const parseDate = () => {
            if (date[0] === '0') {
                return Number(date[1]);
            } else {
                return Number(date.substring(0, 2));
            }
        }

        let currentDate = new Date();
        let toDoObject = {
            months: currentDate.getMonth(),
            description: notes,
            name: header,
            days: parseDate(),
            years: currentDate.getFullYear(),
            hours: Number(hour),
            completed: false
        };

        try {
            setLoading(true);

            if (!props.edit) {
                const {data} = await axios.post('http://localhost:8080/api/v1/tasks', toDoObject);
                await axios.post('http://localhost:8080/api/v1/users/' + user.id + '/tasks/' + data.id, toDoObject);
            } else {
                const editToDoObject = {...toDoObject, id: props.id}
                await axios.patch('http://localhost:8080/api/v1/users/' + user.id + '/tasks', editToDoObject);
            }
            await new Promise(resolve => setTimeout(resolve, 3000));

            await dispatch(changeDate(String(new Date().getDate())));
            navigate('/main-page');
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (<div className={'flex flex-col justify-center items-center w-screen'}>
            <div
                className={'flex rounded-lg p-2 sm:w-2/5 w-4/5 bg-blue-800 justify-center flex-col items-center bg-gradient-to-r bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900'}>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.edit ? 'Edit' : 'New'}</span> Task
                </h1>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 mb-2 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Task header" defaultValue={props.header} required
                       onChange={event => setHeader(event.target.value)}/>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Notes" defaultValue={props.notes} required
                       onChange={(event) => setNotes(event.target.value)}/>
                <div className="flex justify-center pt-2">
                    <button type="button"
                            className="text-white flex gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() => dispatch(changeDate(new Date().toLocaleDateString()))}
                    >
                        <img src={today} className={'w-4 h-4'} alt={'photo'}/>
                        Today
                    </button>
                    <button type="button"
                            className="text-white flex gap-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() => {
                                let tomorrow = new Date();
                                tomorrow.setDate(tomorrow.getDate() + 1);
                                dispatch(changeDate(tomorrow.toLocaleDateString()));
                            }}
                    >
                        <img src={today} className={'w-4 h-4'} alt={''}/>
                        Tomorrow
                    </button>
                </div>
                <h2 className={'font-bold flex sm:flex-row flex-col text-white text-xl p-2 text-center'}>
                    Chosen date: {date === '' ? new Date().toLocaleDateString() : date}
                </h2>
                <div className={'flex p-1 gap-3 justify-center'}>
                    <img src={bellColor} className={'w-8 h-8'} alt={''}/>
                    <input type="text" id="company"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Hour" required defaultValue={props.hour}
                           onChange={(event) => setHour(event.target.value)}/>
                    <select>
                        <option>PM</option>
                        <option>AM</option>
                    </select>
                </div>
                {error && <InputError errorMessage={'Header, notes and hours cannot be empty!'}/>}
                <button type="button"
                        className="w-full m-2 flex justify-center gap-1 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm p-2 mt-2 text-center"
                        onClick={handleAdd}
                >
                    <h1 className={'font-semibold font-mono text-xl'}>{!loading ? (props.edit ? 'EDIT TASK' : 'ADD TASK') : 'PROCESSING'}</h1>
                    {loading && <Spinner/>}
                </button>
            </div>
            <Footer/>
        </div>)
}