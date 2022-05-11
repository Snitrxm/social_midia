import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRouter from './components/auth/privateRouter';
import RegisterScreen from './screens/registerScreen/index';
import LoginScreen from './screens/loginScreen';
import MainScreen from './screens/mainScreen';
import MainLoggedScreen from './screens/mainLoggedScreen';
import UserScreen from './screens/userScreen';
import EditProfile from './screens/editProfile';

const RouterFile = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainScreen/>}/>
                <Route path="register" exact element={<RegisterScreen />} />
                <Route path='login' element={<LoginScreen/>}/>
                <Route path='home' element={<PrivateRouter children={<MainLoggedScreen/>}/>}/>
                <Route path='user/:username' element={<UserScreen/>}/>
                <Route path='user/edit/:username' element={<PrivateRouter children={<EditProfile/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterFile;