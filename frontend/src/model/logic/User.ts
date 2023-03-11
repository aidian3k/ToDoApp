import {ToDo} from "./ToDo";

export interface User {
    email: string,
    password: string,
    tasks: ToDo[],
    id: number
}