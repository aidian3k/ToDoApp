import {FC, useRef, useState} from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import logo from '../resources/logo.png';
import {InputError} from "./LoginPage";
import axios from "axios";

interface ErrorRegistration {
    email: boolean,
    password: boolean,
    internal: boolean,
    secondPassword: boolean,
    message: string,
    any: boolean
}

interface User {
    email: string,
    password: string
}

export const RegisterPage: FC = () => {
    const [error, setError] = useState<ErrorRegistration>({
        email: false, password: false, internal: false, secondPassword: false, message: '', any: false
    });

    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const secondPasswordInput = useRef<HTMLInputElement>(null);

    function validateRegistrationData(): boolean {
        if (emailInput.current === null || passwordInput.current === null || secondPasswordInput.current === null) {
            setError({
                email: false,
                password: false,
                internal: true,
                message: 'Wrong data was given in the registration form!',
                secondPassword: false,
                any: false
            });

            return true;
        }

        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        const secondPassword = secondPasswordInput.current.value;
        let errorObject = {email: false, password: false, internal: false, message: '', secondPassword: false, any: false};

        if (password.length === 0) {
            errorObject = {...errorObject, password: true, any: true};
        }

        if (secondPassword !== password && password.length !== 0) {
            errorObject = {...errorObject, secondPassword: true, any: true};
        }

        if (!email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$') || email.length <= 3) {
            errorObject = {...errorObject, email: true, any: true};
        }

        setError(errorObject);

        return errorObject.any;
    }

    function registerUser(): void {
        // @ts-ignore
        const newUser: User = {email: emailInput.current.value, password: passwordInput.current.value};
    }

    function handleRegistration(): void {
        if(!validateRegistrationData()) {
            return;
        } else {
            registerUser();
        }
    }

    return (<section className="bg-gray-50 dark:bg-gray-900">
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
                            <input type = 'password' name="password" id="password" placeholder="••••••••••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   ref={passwordInput}
                            />
                            {error.password && <InputError errorMessage={'Given password cannot be empty!'}/>}
                        </div>
                        <div>

                            <label htmlFor="confirm-password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                password</label>

                            <input type="password"  name="confirm-password" id="confirm-password"
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
                            onClick={handleRegistration}>Create
                            an account
                        </button>
                        {error.internal && <InputError errorMessage={'Internal error while signing up!'}/>}

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            <span>Already have an account? </span>
                            <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>

                </div>
            </div>
        </div>
    </section>)
}