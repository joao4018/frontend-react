import axios from "axios";
import {getUserLocalStorage} from "../AuthProvider/utils";

export const Api = axios.create({
    baseURL: 'https://api-login-all-it.herokuapp.com/'
});

Api.interceptors.request.use(
    (config: any) => {
        const user = getUserLocalStorage();
        config.headers = {
            "Authorization":  user?.token,
            "Access-Control-Allow-Origin": "*"
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error)
    }
)