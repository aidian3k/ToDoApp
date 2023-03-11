import React, {FC, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// @ts-ignore
import logo from '../resources/logo.png';
import ErrorRegistration from "../model/authentication/RegistrationError";
import User from "../model/authentication/User";
import {validateRegistrationData} from "../features/authentication/validateRegistration";
import {Spinner} from "../components/errors/Spinner";
import {InputError} from "../components/errors/InputError";
import axios, {AxiosError} from "axios";
import {Footer} from "./Footer";

export const RegisterPage: FC = () => {
    const [error, setError] = useState<ErrorRegistration>({
        email: false, password: false, internal: false, secondPassword: false, message: '', any: false
    });

    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const secondPasswordInput = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    async function handleRegistration() {
        if (validateRegistrationData(emailInput, secondPasswordInput, passwordInput, setError)) {
            return;
        } else {
            // @ts-ignore
            const newUser: User = {email: emailInput.current.value, password: passwordInput.current.value};
            let newError: ErrorRegistration = {
                email: false, password: false, internal: false, secondPassword: false, message: '', any: false
            };

            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await axios.post("http://localhost:8080/api/v1/createUser", newUser);
            } catch (error: any) {
                const axiosError = error as AxiosError;

                // @ts-ignore
                const errorData: AuthError = axiosError.response.data;
                await new Promise(resolve => setTimeout(resolve, 2000));
                newError = {...newError, any: true, message: errorData.message, internal: true};
            } finally {
                setLoading(false);
                setError(newError);
            }

            if (!newError.any) {
                navigate('/login');
            }
        }
    }

    return (
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/login"
                  className="flex items-center mb-6 text-2xl font-semi-bold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                To do App
            </Link>

            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>

                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            email</label>
                        <input type="email" name="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@company.com" ref={emailInput}/>
                        {error.email && <InputError errorMessage={'Given email is wrong!'}/>}
                    </div>
                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type='password' name="password" id="password" placeholder="••••••••••••••••"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               ref={passwordInput}
                        />
                        {error.password && <InputError errorMessage={'Given password cannot be empty!'}/>}
                    </div>
                    <div>

                        <label htmlFor="confirm-password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                            password</label>

                        <input type="password" name="confirm-password" id="confirm-password"
                               placeholder="••••••••••••••••"
                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               ref={secondPasswordInput}
                        />

                        {error.secondPassword && <InputError errorMessage={'Both passwords must match!'}/>}
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox"
                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I
                                accept the
                                <Link
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    to="/terms-and-conditions">Terms and Conditions</Link></label>
                        </div>
                    </div>


                    <button
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700"
                        onClick={handleRegistration}>
                        {!loading ? 'Create an account' : 'Processing'}
                        {loading && <Spinner/>}
                    </button>

                    {error.internal && <InputError errorMessage={error.message}/>}

                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        <span>Already have an account? </span>
                        <Link to={'/login'}
                              className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                            here</Link>
                    </p>

                </div>
            </div>
        </div>
    </section>
            <Footer/>
            </>)
}