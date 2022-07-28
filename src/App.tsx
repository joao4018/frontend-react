import {ProtectedLayout} from './Components/ProtectedLayout';
import {AuthProvider} from './AuthProvider';
import {Forgot} from './Page/Forgot';
import {Profile} from './Page/Profile';
import {Login} from "./Page/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ValidateCode} from "./Page/Code";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/profile' element={
                        <Profile/>
                    }>
                    </Route>
                    <Route path='/login' element={<Login/>}>
                    </Route>
                    <Route path='/validate-code' element={<ValidateCode/>}>
                    </Route>
                    <Route path='/forgot' element={<Forgot/>}>
                    </Route>
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;