import { Navigate, Link } from "react-router-dom";

const MainScreen = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        return <Navigate to={`/home`} />
    }

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="bg-transparent h-80 w-60 rounded-lg border-solid border-2 shadow">
                <h1 className="text-center text-black font-bold text-2xl p-3">SNITTER</h1>
                <div className="flex flex-col items-center mt-10">
                    <Link to='/register'><button className="bg-blue-600 text-white font-bold w-20 p-1 rounded mb-5 hover:bg-blue-700">Sing Up</button></Link>
                    <Link to='/login'><button className="bg-blue-600 text-white font-bold w-20 p-1 rounded mb-5 hover:bg-blue-700">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;