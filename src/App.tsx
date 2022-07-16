import {ProtectedLayout} from './Components/ProtectedLayout';
import {AuthProvider} from './AuthProvider';
import {Forgot} from './Page/Forgot';
import {Profile} from './Page/Profile';
import {Login} from "./Page/Login";
import {BrowserRouter,  Route, Routes} from "react-router-dom";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/profile' element={<ProtectedLayout>
                        <Profile/>
                    </ProtectedLayout>}>
                    </Route>
                    <Route path='/' element={<Login/>}>
                    </Route>
                    <Route path='/forgot' element={<Forgot/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;