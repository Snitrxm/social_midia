import { useState } from "react";
import UserService from "../../services/user";
import { Navigate , Link} from "react-router-dom";
import Calendar from "react-calendar";

const EditProfile = () => {
    const [newName, setNewName] = useState('');
    const [bio, setBio] = useState('');
    const [bornYear, setBornYear] = useState('');
    const [redirectBack, setRedirectBack] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(newName !== ''){
                await UserService.update(user.user._id, {newName: newName});
                setRedirectBack(true);
                user.user.name = newName;
                localStorage.setItem('user', JSON.stringify(user));
            }
            if(bio !== ''){
                await UserService.update(user.user._id, {bio: bio});
                setRedirectBack(true);
                user.user.bio = bio;
                localStorage.setItem('user', JSON.stringify(user));
            }
            if(bornYear !== ''){
                await UserService.update(user.user._id, {bornyear: bornYear});
                user.user.bornyear = bornYear;
                setRedirectBack(true);
                localStorage.setItem('user', JSON.stringify(user));
            }
        } catch(error){
            console.log(error);
        }
    }

    const handleDeleteBio = async () => {
        await UserService.deleteBio(user.user._id); 
        user.user.bio = '';
        localStorage.setItem('user', JSON.stringify(user));
        setRedirectBack(true);
        
    }

    if(redirectBack){
        return <Navigate to={`/user/${user.user.username}`} />
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
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Bio
                        </label>
                        <input value={bio} onChange={e => setBio(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Bio"/>
                        {user.user.bio !== '' ? <button onClick={handleDeleteBio} className="border p-1.5 mt-4 font-bold rounded bg-red-500 text-white transition hover:bg-transparent text-black border-red-500">Delete Bio</button> : null}  
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Born Year
                        </label>
                        <input value={bornYear} onChange={e => setBornYear(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" placeholder="Born Year"/>
                        {user.user.bornyear !== null ? <button className="border p-1.5 mt-4 font-bold rounded bg-red-500 text-white transition hover:bg-transparent text-black border-red-500">Delete Bio</button> : null}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update
                        </button>
                        <Link to={`/user/${user.user.username}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;