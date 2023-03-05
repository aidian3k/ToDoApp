import {FC} from "react";
import {Link} from "react-router-dom";

export const RegisterPage: FC = () => {
    const imageLogo: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAdVBMVEX///9+0/MkSXTK7Pp30fKB2PjE6vkbPGogQ28eQG1yweJ2yOhUkrVcnsFNh6xtuNkxXIRmrtAZOml5y+stVn8lS3Y2Y4s7bJIrVH1gpcdIf6Rwvd5SjrLl9vxosdMkSnVCdptZmr0RMGI5aI+G3/9UkbVBc5ni/pRZAAAEhElEQVR4nO2dC2+jOBRGB2bu2oaEh3kEQyZNMm3//09cmwAx7UrpatkG7O9IrSqgqk+vX3C57Y8fAAAAAAAAAAAAAAAAAAAAAAAAwH/g5xP4/VTjX0/gr+caB98OjGEMYxjDGMYwhjGMYQxjGDtnTERfkPjSRas0jieim0icqzye+QznLUkK0lylwZelV2XMJRu4agE61ZIJwerT3Yaa/hLJD/l4MOHmIp5s0rjh4QCjgBIWhpzrQ3J3D2g2XMDZoT9QVNxcpT+aeIPGWVmW2qYpy4por4VF3dZCK6tR2RhXZdnog+IP3X5J/OV81t686S942LtXZaznqZiFIn017Tbx7l7pNX0JwxcrxjzRp6OahywnuohQtPrbKNFf6K5AlzbakrEmMsZGTekv+rFKShg5y9iM8UL34wOZkJf9KdK/gpJoJ3m1VeOEh2Pbtdzxg3FAbX+ehfw2yGnPQxnQ2XzeqLFue3bTpDLk7SfjnR65QSFDcRvjlOueEFMUyuODkbxa4/aLMRYXK8aa4tHUtVpjPXpFvxD30fs8jnk/jvXUnk3juOkvfyC8WuNAK4VVp2fhziy/4+lxru60KlNEb8L0eGuujk6bNaaLWY8PyeHzepxlJdMhntbjpm2b23pMuZTvGx3HZraWvN9zcWsysvZcdX8gfhHDnqvSey565+F1azG+suvQMSnP9I5ZsMzeV1e3rTevp7AP++rWjGBSktUbi7G5OZr0KFIqj2Ybx64nKux7p5NSp2HGolQ9CPH6jOf8+/vjzc3V/z8whjGMYQxjGMMYxjCGMYxh7IDxh/tDWob1GlOslLKfAaj9IkQrNaauNs95ZJ1OT/JKsQQyp1Ua054N6VS2uz+fXgKxTmPK5dTE8Xmt28YBt9rIC/eNTd7FauOQTnLa+DyL8R8PjDPbeEyEe2SceWDcznr1uwfGObPbqNw3DqixglyNXd1l46C7L08y9WIHQml4izLnuRe7TPN2R8IZY6KNpzuJhi3Bda3Gfco4nSWMu3QRimCtxt8AjGEMYxjDGMYwhjGMYQxjGMN4e8Yfs72u548pOF2SXX5/SZrekkXoVmpMqmKCC1YpK3/MF2C1+eNkTKfK1osne329z8CYMnfbuLBzEix239jUElttPLqfhTHVWRa1B8ZzOR/yx/WskT7kj5NZ/vjsvnFwklYbh4pjt41N0fQIL31Yj4OYj8pcRP84nblmTHEjemdRRdMukz+y2bKxeTMz44Jnl/sBt99ENYb0Ky7s29l4GawfsTLjbwDGMIYxjGEMYxjDGMYwhjGMYbxBY/Kr/pio27/tU+vPjV3edgtwXG398amUJn/c5L7kj3dyrD9O/MgfK6v++OLF8+pZNtWH+uO9bTz+yWKnjef5Y9Qfu2hce15/7EH+mE6zd328qD/OvMsfR2JSll3ggzFF1W1JFmHqxS7TvHp7LCWTzXF6+Xb4PzBO1x8X8/xxtAyoP4YxjGEMYxjDGMYwhjGMYQxjGK/a+Ak81/jnE/j9VGMAAAAAAAAAAAAAAAAAAAAAAABO8TfXPavsNpPr8AAAAABJRU5ErkJggg==';

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to="/login" className="flex items-center mb-6 text-2xl font-semi-bold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={imageLogo} alt="logo"/>
                    To do Application
                </Link>

                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required={true}/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required={true}/>
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password"
                                       placeholder="••••••••••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required={true}/>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                           required={false}/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the
                                        <Link
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            to="/terms-and-conditons">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700">Create
                                an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                <span>Already have an account? </span>
                                <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}