import React, {FC, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// @ts-ignore
import logo from '../resources/logo.png';
import {ErrorLogin} from "../model/authentication/ErrorLogin";
import User from "../model/authentication/User";
import {Spinner} from "../components/errors/Spinner";
import {InputError} from "../components/errors/InputError";
import axios from "axios";
import {Footer} from "./Footer";
import {useDispatch} from "react-redux";
import {login} from "../redux/UserSlice";

export const LoginPage: FC = () => {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const initialState: ErrorLogin = {internal: false, message: ''};
    const [error, setError] = useState<ErrorLogin>(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkData = async () => {
        if (emailInput.current === null || passwordInput.current === null) {
            setError({...error, message: 'Wrong data was given!'});
            return;
        }

        let newError: ErrorLogin = initialState;
        const email: string = emailInput.current.value;
        const password: string = passwordInput.current.value;

        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            const {data} = await axios.get('http://localhost:8080/api/v1/users');
            const foundUser = data.find((value: User) => value.email === email);

            if (foundUser === undefined || foundUser.password !== password) {
                newError = {...error, message: 'Invalid email or password!', internal: true};
            } else {
                await dispatch(login({email: foundUser.email, password: foundUser.password, tasks: foundUser.tasks, id: foundUser.id}));
                await navigate('/main-page');
            }
        } catch (error: any) {
            await new Promise(resolve => setTimeout(resolve, 2000));
            newError = {...newError, message: 'There is a problem with server!', internal: true};
        } finally {
            setLoading(false);
            setError(newError);
        }
    }

    return (
        <>
        <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/login"
                  className="flex items-center mb-6 text-2xl font-semi-bold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                To do App
            </Link>

            <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Sign in to
                        your account</h1>

                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" name="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@company.com" required={true} ref={emailInput}/>
                    </div>

                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••••••••••"
                               className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700"
                               required={true} ref={passwordInput}/>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                                       required={false}/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-white-500 dark:text-gray-300">Remember
                                    me</label>
                            </div>
                        </div>
                        <Link to="/forgot-password" className="text-sm font-medium text-white hover:underline">Forgot
                            password?</Link>
                    </div>

                    <button
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700"
                        onClick={checkData}>
                        {loading ? 'Processing' : 'Sign in'}
                        {loading && <Spinner/>}
                    </button>

                    {error.internal && <InputError errorMessage={error.message}/>}

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?
                        <Link to="/register"
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign
                            up</Link>
                    </p>

                </div>
            </div>
        </div>
    </section>
            <Footer/>
            </>)
}
