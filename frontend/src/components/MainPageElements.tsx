import React, {FC, useEffect, useLayoutEffect, useState} from "react";
import {ToDoElement} from "./ToDoElement";
import {ToDo} from "../model/logic/ToDo";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {User} from "../model/logic/User";
import axios from "axios";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

export const MainPageElements: FC = () => {
    const [elementsData, setElementsData] = useState<ToDo[]>([]);
    const user: User = useSelector<RootState, User>(state => state.user.value);

    useLayoutEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('http://localhost:8080/api/v1/users/' + user.id + '/tasks');
            setElementsData(data);
        };

        fetchData();
    }, []);

    const jsxElements: JSX.Element[] = elementsData.map(element => {
        return <ToDoElement days={element.days} months={element.months} years={element.years} name={element.name}
                     description={element.description} completed={element.completed} hours={element.hours}/>
    });

    return (
        <div className={'flex flex-col items-center gap-2'}>
            {jsxElements}
        </div>
    )
}