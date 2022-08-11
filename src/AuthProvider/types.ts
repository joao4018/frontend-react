export interface iUser {
    email?: string;
    token?: string;
}

export interface iCode {
    email?: string;
    token?: string;
}

export interface iContext extends iUser {
    authenticate: (email: string, password: string) => Promise<void>;
    forgot: (email: string) => Promise<void>;
    logout: () => void;
    create: (name: string, email: string, password: string) => Promise<void>;
    codeValidate: (name: string) => Promise<void>;
    recovery: (email: string, password: string) => Promise<void>;
    emailValidate: (email: string | null) => Promise<void>;
    emailValidateSend: (email: string) => Promise<void>;
}

export interface iAuthProvider {
    children: JSX.Element;
}