import User from "../../model/authentication/User";
import axios from "axios";


export const postUser = async (user: User, setLoading: any, setError: any) => {
    try {
        setLoading(true);
        await axios.post("http://localhost:8080/api/v1/createUser", user);
        await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
        console.log(error);
    } finally {
        await setLoading(false);
    }
}