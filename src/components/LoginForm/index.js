import './index.css';
import { useState } from 'react';
import UserService from '../../services/user';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await UserService.login({email: email , password: password})
            setRedirectToHome(true);
        } catch(error){
            console.log(error);
        }
    }

    if(redirectToHome){
        return <Navigate to='/home'/>
    }

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                    </label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                    </label>
                    <input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                    </a>
                </div>
            </form>
        </div>
        
    );
}

export default LoginForm;