import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {configureStore} from "@reduxjs/toolkit";
import {MainPage} from "./pages/MainPage";
import {NewToDo} from "./pages/NewToDo";

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
    }
])

const store = configureStore({
    reducer: {}
});


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    </React.StrictMode>
);

export default store;
export type RootState = ReturnType<typeof store.getState>;