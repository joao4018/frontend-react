import { iUser } from "./types";
import {Api} from "../Services/api";

export function setUserLocalStorage(user: iUser | null){
    localStorage.setItem("US", JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("US");
    if(!json) return null;
    const user = JSON.parse(json)
    return user ?? null;
}

export async function LoginRequest(userName: string, password: string) {
    try {
        const request = await Api.post("auth/login", { userName, password });
        return request.data;
    } catch (error) {
        return null;
    }
}

export async function CreateRequest(userName: string, email: string, password: string) {
    try {
        const role = 'ROLE_USER'
        const request = await Api.post("auth/signup", { userName, email, password, role });
        return request.data;
    } catch (error) {
        return error;
    }
}

export async function ForgotRequest(email: string) {
    try {
        const request = await Api.post("email/api/email-send", { email });
        return request.data;
    } catch (error) {
        return null;
    }
}