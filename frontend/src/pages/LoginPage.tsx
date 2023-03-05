import {FC, useRef, useState} from "react";
import {Link} from "react-router-dom";
// @ts-ignore
import logo from '../resources/logo.png';

interface ErrorRegistration {
    email: boolean,
    password: boolean,
    internal: boolean
}

export const LoginPage: FC = () => {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<ErrorRegistration>({email: true, password: false, internal: false});
    const checkData = () => {

    }

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/login" className="flex items-center mb-6 text-2xl font-semi-bold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                        To do App
                </Link>

                <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Sign in to your account</h1>
                        <form className="space-y-4 md:space-y-6">
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
                                        <label htmlFor="remember" className="text-white-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/forgot-password" className="text-sm font-medium text-white hover:underline">Forgot password?</Link>
                            </div>

                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" onClick={checkData}>Sign in
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
