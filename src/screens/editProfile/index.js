import { useState } from "react";
import UserService from "../../services/user";
import { Navigate } from "react-router-dom";

const EditProfile = () => {
    const [newName, setNewName] = useState('');
    const [bio, setBio] = useState('');
    const [redirectBack, setRedirectBack] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const r = await UserService.update(user._id, {newName: newName});
            console.log(r);
            setRedirectBack(true);
        } catch(error){
            console.log(error);
        }
    }

    if(redirectBack){
        return <Navigate to={`/user/${user._id}`} />
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-full max-w-xs">
                <form onSubmit={HandleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                        </label>
                        <input value={newName} onChange={e => setNewName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Bio
                        </label>
                        <input value={bio} onChange={e => setBio(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Bio"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;