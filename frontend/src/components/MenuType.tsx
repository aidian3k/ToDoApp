import {FC} from "react";
// @ts-ignore
import play from '../resources/play.svg';
// @ts-ignore
import completed from '../resources/completed.svg';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {RootState} from "../redux/store";
import {User} from "../model/logic/User";
import {initializeAllElements} from "../redux/elementsSlice";

export const MenuType: FC = () => {
    const dispatch = useDispatch();
    const user = useSelector<RootState, User>(state => state.user.value);

    const handleAllClick = async () => {
        const {data} = await axios.get('http://localhost:8080/api/v1/users/' + user.id + '/tasks');
        dispatch(initializeAllElements(data));
    };

    const handleCompletedClick = async () => {
        const {data} = await axios.get('http://localhost:8080/api/v1/users/' + user.id + '/tasks/completed');
        dispatch(initializeAllElements(data));
    };

    const handleActiveClick = async () => {
        const {data} = await axios.get('http://localhost:8080/api/v1/users/' + user.id + '/tasks/active');
        dispatch(initializeAllElements(data));
    }

    return (
        <div className={'w-full flex p-4 justify-center'}>
            <div className="flex rounded-md shadow-sm">
                <button type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => handleAllClick()}
                >
                    <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"></path>
                    </svg>
                    All
                </button>
                <button type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => handleCompletedClick()}
                >
                    <img src={play} className={'w-4 h-4 mr-2 fill-current'} alt={'photo'}/>
                    Complete
                </button>
                <button type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        onClick={() => handleActiveClick()}
                >
                    <img src={completed} className={'w-4 h-4 mr-2 fill-current'} alt={'photo'}/>
                    Active
                </button>
            </div>
        </div>
    )
}
