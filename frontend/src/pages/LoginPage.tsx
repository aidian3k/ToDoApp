import {FC, useRef, useState} from "react";
import {Link} from "react-router-dom";

interface ErrorRegistration {
    email: boolean,
    password: boolean,
    internal: boolean
}

export const LoginPage: FC = () => {
    const imageLogo: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAdVBMVEX///9+0/MkSXTK7Pp30fKB2PjE6vkbPGogQ28eQG1yweJ2yOhUkrVcnsFNh6xtuNkxXIRmrtAZOml5y+stVn8lS3Y2Y4s7bJIrVH1gpcdIf6Rwvd5SjrLl9vxosdMkSnVCdptZmr0RMGI5aI+G3/9UkbVBc5ni/pRZAAAEhElEQVR4nO2dC2+jOBRGB2bu2oaEh3kEQyZNMm3//09cmwAx7UrpatkG7O9IrSqgqk+vX3C57Y8fAAAAAAAAAAAAAAAAAAAAAAAAwH/g5xP4/VTjX0/gr+caB98OjGEMYxjDGMYwhjGMYQxjGDtnTERfkPjSRas0jieim0icqzye+QznLUkK0lylwZelV2XMJRu4agE61ZIJwerT3Yaa/hLJD/l4MOHmIp5s0rjh4QCjgBIWhpzrQ3J3D2g2XMDZoT9QVNxcpT+aeIPGWVmW2qYpy4por4VF3dZCK6tR2RhXZdnog+IP3X5J/OV81t686S942LtXZaznqZiFIn017Tbx7l7pNX0JwxcrxjzRp6OahywnuohQtPrbKNFf6K5AlzbakrEmMsZGTekv+rFKShg5y9iM8UL34wOZkJf9KdK/gpJoJ3m1VeOEh2Pbtdzxg3FAbX+ehfw2yGnPQxnQ2XzeqLFue3bTpDLk7SfjnR65QSFDcRvjlOueEFMUyuODkbxa4/aLMRYXK8aa4tHUtVpjPXpFvxD30fs8jnk/jvXUnk3juOkvfyC8WuNAK4VVp2fhziy/4+lxru60KlNEb8L0eGuujk6bNaaLWY8PyeHzepxlJdMhntbjpm2b23pMuZTvGx3HZraWvN9zcWsysvZcdX8gfhHDnqvSey565+F1azG+suvQMSnP9I5ZsMzeV1e3rTevp7AP++rWjGBSktUbi7G5OZr0KFIqj2Ybx64nKux7p5NSp2HGolQ9CPH6jOf8+/vjzc3V/z8whjGMYQxjGMMYxjCGMYxh7IDxh/tDWob1GlOslLKfAaj9IkQrNaauNs95ZJ1OT/JKsQQyp1Ua054N6VS2uz+fXgKxTmPK5dTE8Xmt28YBt9rIC/eNTd7FauOQTnLa+DyL8R8PjDPbeEyEe2SceWDcznr1uwfGObPbqNw3DqixglyNXd1l46C7L08y9WIHQml4izLnuRe7TPN2R8IZY6KNpzuJhi3Bda3Gfco4nSWMu3QRimCtxt8AjGEMYxjDGMYwhjGMYQxjGMN4e8Yfs72u548pOF2SXX5/SZrekkXoVmpMqmKCC1YpK3/MF2C1+eNkTKfK1osne329z8CYMnfbuLBzEix239jUElttPLqfhTHVWRa1B8ZzOR/yx/WskT7kj5NZ/vjsvnFwklYbh4pjt41N0fQIL31Yj4OYj8pcRP84nblmTHEjemdRRdMukz+y2bKxeTMz44Jnl/sBt99ENYb0Ky7s29l4GawfsTLjbwDGMIYxjGEMYxjDGMYwhjGMYbxBY/Kr/pio27/tU+vPjV3edgtwXG398amUJn/c5L7kj3dyrD9O/MgfK6v++OLF8+pZNtWH+uO9bTz+yWKnjef5Y9Qfu2hce15/7EH+mE6zd328qD/OvMsfR2JSll3ggzFF1W1JFmHqxS7TvHp7LCWTzXF6+Xb4PzBO1x8X8/xxtAyoP4YxjGEMYxjDGMYwhjGMYQxjGK/a+Ak81/jnE/j9VGMAAAAAAAAAAAAAAAAAAAAAAABO8TfXPavsNpPr8AAAAABJRU5ErkJggg==';
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<ErrorRegistration>({email: true, password: false, internal: false});
    const checkData = () => {

    }

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/login" className="flex items-center mb-6 text-2xl font-semi-bold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={imageLogo} alt="logo"/>
                        To do Application
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
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700"
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

export const InputError: FC<{errorMessage: string}> = (props) => {
    return (
        <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 m-2" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
            </svg>
            <p>{props.errorMessage}</p>
        </div>
    )
}