import axios from "axios";
import {getUserLocalStorage} from "../AuthProvider/utils";

export const Api = axios.create({
    baseURL: 'https://fast-lake-01538.herokuapp.com/'
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