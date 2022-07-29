import {iCode, iUser} from "./types";
import {Api} from "../Services/api";

export function setUserLocalStorage(user: iUser | null){
    localStorage.setItem("US", JSON.stringify(user));
}

export function setCodeLocalStorage(code: iCode | null | String ){
    localStorage.setItem("COD", JSON.stringify(code));
}

export function cleanCodeLocalStorage(){
    localStorage.removeItem("COD");
}

export function getUserLocalStorage(){
    const json = localStorage.getItem("US");
    if(!json) return null;
    const user = JSON.parse(json)
    return user ?? null;
}

export function getCodeLocalStorage(){
    const json = localStorage.getItem("COD");
    if(!json) return null;
    const user = JSON.parse(json)
    return user ?? null;
}

export async function LoginRequest(username: string, password: string) {
    try {
        const request = await Api.post("auth/login", { username, password });
        return request.data;
    } catch (error) {
        return null;
    }
}

export async function CreateRequest(username: string, email: string, password: string) {
    try {
        const role = 'ROLE_USER'
        const request = await Api.post("auth/signup", { username, email, password, role });
        return request.data;
    } catch (error) {
        // @ts-ignore
        return error.response;
    }
}

export async function RecoveryPasswordRequest(code: string, email: string, password: string) {
    try {
        const request = await Api.post("auth/recoveryPassword", { code, email, password });
        cleanCodeLocalStorage()
        return request.data;
    } catch (error) {
        // @ts-ignore
        return error.response;
    }
}

export async function CodeValidateRequest(code: string) {
    try {
        const request = await Api.post("auth/validateAccessCode", { code });
        return request.data;
    } catch (error) {
        // @ts-ignore
        return error.response;
    }
}

export async function EmailValidateRequest(email: string | null) {
    try {
        const request = await Api.get("auth/validateUserAccount?email="+email, );
        return request.data;
    } catch (error) {
        // @ts-ignore
        return error.response;
    }
}

export async function EmailValidateSendRequest(email: string) {
    try {
        const request = await Api.post("email/api/email-validate-send", { email } );
        return request.data;
    } catch (error) {
        // @ts-ignore
        return error.response;
    }
}

export async function ForgotRequest(email: string) {
    try {
        const request = await Api.post("email/api/email-send?email=" + email);
        return request.data;
    } catch (error) {
        return null;
    }
}