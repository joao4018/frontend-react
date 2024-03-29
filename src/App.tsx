import {ProtectedLayout} from './Components/ProtectedLayout';
import {AuthProvider} from './AuthProvider';
import {Forgot} from './Page/Forgot';
import {Profile} from './Page/Profile';
import {Login} from "./Page/Login";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./Page/Home";
import {Store} from "./Page/Store";

import {ValidateCode} from "./Page/Code";
import {RecoveryPassword} from "./Page/RecoveryPassword";
import {ValidateEmail} from "./Page/ValidateAccount";

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
                    <Route path='/recovery' element={<RecoveryPassword/>}>
                    </Route>
                    <Route path='/email-validate/*' element={<ValidateEmail/>} >
                    </Route>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/store" element={<Store/>}/>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;