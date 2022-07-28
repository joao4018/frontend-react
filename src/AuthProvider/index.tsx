import { createContext, useEffect, useState } from "react";
import { iAuthProvider, iContext, iUser } from "./types";
import {
    getUserLocalStorage,
    LoginRequest,
    setUserLocalStorage,
    ForgotRequest,
    CreateRequest,
    CodeValidateRequest, getCodeLocalStorage, setCodeLocalStorage, RecoveryPasswordRequest
} from "./utils";

export const AuthContext = createContext<iContext>({} as iContext)

export const AuthProvider = ({ children }: iAuthProvider) => {
    const [user, setUser] = useState<iUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = { token: response.data.token, email };
        setUser(payload);
        setUserLocalStorage(payload);
    }

    async function create(username: string, email: string, password: string) {
        const response = await CreateRequest(username, email, password);
        let payload = null
        if (response.status){
            payload = { detail: response.data.details, email};
            throw  payload;
        }
    }

    async function recovery(email: string, password: string) {
        const response = await RecoveryPasswordRequest(getCodeLocalStorage(), email, password);
        let payload = null
        console.log(response)
        if (response.status){
            payload = { detail: response.data.details, email};
            throw  payload;
        }
    }

    async function forgot(email: string) {
        const response = await ForgotRequest(email);
        const payload = { email: response.email };
        setUser(payload);
        setUserLocalStorage(payload);
    }

    async function codeValidate(code: string) {
        const response = await CodeValidateRequest(code);
        setCodeLocalStorage(code);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout, forgot, create, codeValidate, recovery }}>
            {children}
        </AuthContext.Provider>
    )
}