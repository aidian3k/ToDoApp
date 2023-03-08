import React, {FC} from "react";
import {Navbar} from "../components/Navbar";
import {DatePicker} from "../components/DatePicker";

export const MainPage: FC = () => {
    return (
        <>
            <Navbar/>
            <DatePicker/>
        </>
    )
}