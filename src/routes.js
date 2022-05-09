import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRouter from './components/auth/privateRouter';
import RegisterScreen from './screens/registerScreen/index';
import LoginScreen from './screens/loginScreen';
import MainScreen from './screens/mainScreen';
import MainLoggedScreen from './screens/mainLoggedScreen';
import UserConfigScreen from './screens/userConfig';

const RouterFile = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainScreen/>}/>
                <Route path="register" exact element={<RegisterScreen />} />
                <Route path='login' element={<LoginScreen/>}/>
                <Route path='home' element={<PrivateRouter children={<MainLoggedScreen/>}/>}/>
                <Route path='config' element={<PrivateRouter children={<UserConfigScreen/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterFile;