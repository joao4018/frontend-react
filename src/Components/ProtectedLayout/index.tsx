import {useAuth} from "../../AuthProvider/useAuth";
import {Login} from "../../Page/Login";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

    if (!auth.email) {
        return <Login/>;
    }

    return children;
}