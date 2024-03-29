import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {MainPage} from "./pages/MainPage";
import {NewToDo} from "./pages/NewToDo";
import store from "./redux/store";
import {ToDoCreator} from "./components/NewToDo/ToDoCreator";
import {NewTaskNav} from "./components/NewToDo/NewTaskNav";
import {CalendarPicker, MonthHeader} from "./components/NewToDo/CalendarPicker";
import {EditToDo} from "./pages/EditToDo";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    },
    {
        path: '/main-page',
        element: <MainPage/>
    },
    {
        path: '/new-todo',
        element: <NewToDo/>
    },
    {
        path: '/edit-task',
        element: <EditToDo/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    </React.StrictMode>
);