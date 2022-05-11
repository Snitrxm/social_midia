import HeaderUnlogged from "../../components/HeaderUnlogged";
import { Fragment } from "react";  
import { BsArrowLeft } from "react-icons/bs"; 
import './index.css'
import { Link, useParams } from "react-router-dom";
import UserService from "../../services/user";
import { useEffect, useState } from "react";
import Header from "../../components/Header";




const UserScreen = () => {
    const { username } = useParams();
    const [name, setName] = useState('');
    const [usernameState, setUsernameState] = useState('');
    const [bio, setBio] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [followers, setFollowers] = useState(0);
    const [id, setId] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    

    const finder = async () => {
        try {
            const response = await UserService.findOne(username);
            setName(response.data.name)
            setUsernameState(response.data.username)
            setId(response.data._id)
            const date = new Date(response.data.createdAt);
            const month = (monthNames[date.getMonth()]);
            const year = date.getFullYear();
            setMonth(month)
            setYear(year)
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        finder();
    },[]);
     
    
    const handleFollow = async () => {
        setFollowers(past => past + 1);
        const t = await UserService.addFollower(id)
        console.log(t);

    }

    if(user && user.username === username){
        return (
            <Fragment>
                <Header></Header>
                <main className="flex justify-center">
                    <div className="h-[calc(100vh-80px)] w-4/5 border-l border-r md:w-3/5">
                        <div className="h-20 flex m-4 items-center justify-between">
                            <div className="flex items-center">
                                <Link to='/home'><span className="flex items-center">{<BsArrowLeft className="cursor-pointer p-1 text-3xl transition hover:bg-gray-200 round"/>}</span></Link>
                                <div className="m-5">
                                    <h1 className="flex items-center font-bold text-2xl">{name}</h1>
                                    <p className="mt-2">@{usernameState}</p>
                                </div>
                            </div>
                            <div>
                                <Link to={`/user/edit/${user.username}`}><button className="border border-black bg-transparent font-bold p-1 rounded-lg transition hover:bg-gray-200">Edit Profile</button></Link>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="mx-16">
                            {bio ? <p className="">{bio}</p> : null}
                            <p className="font-light text-sm"><span className="font-bold text-1xl">{followers}</span> Followers</p>
                            <p className="font-light text-1xl">Joined {month} {year}</p>
                        </div>
                    </div>
                </main>
            </Fragment>
            
        );
    } else if(user && user.username !== username){
        return (
            <Fragment>
                <Header></Header>
                <main className="flex justify-center">
                    <div className="h-[calc(100vh-80px)] w-4/5 border-l border-r md:w-3/5">
                        <div className="h-20 flex m-4 items-center justify-between">
                            <div className="flex items-center">
                                <Link to='/home'><span className="flex items-center">{<BsArrowLeft className="cursor-pointer p-1 text-3xl transition hover:bg-gray-200 round"/>}</span></Link>
                                <div className="m-5">
                                    <h1 className="flex items-center font-bold text-2xl">{name}</h1>
                                    <p className="mt-2">@{usernameState}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="mx-16">
                            {bio ? <p className="">{bio}</p> : null}
                            <p className="font-light text-sm"><span className="font-bold text-1xl">{followers}</span> Followers</p>
                            <p className="font-light text-1xl">Joined {month} {year}</p>
                            <button onClick={handleFollow} className="border border-black bg-transparent font-bold p-1 rounded-lg transition hover:bg-gray-200">Follow</button>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <HeaderUnlogged></HeaderUnlogged>
                <main className="flex justify-center">
                    <div className="h-[calc(100vh-80px)] w-3/5 border-l border-r">
                        <div className="h-20 flex m-4 items-center justify-between">
                            <div className="flex items-center">
                                <Link to='/home'><span className="flex items-center">{<BsArrowLeft className="cursor-pointer p-1 text-3xl transition hover:bg-gray-200 round"/>}</span></Link>
                                <div className="m-5">
                                    <h1 className="flex items-center font-bold text-2xl">{name}</h1>
                                    <p className="mt-2">@{usernameState}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="mx-16">
                            {bio ? <p className="">{bio}</p> : null}
                            <p className="font-light text-sm"><span className="font-bold text-1xl">{followers}</span> Followers</p>
                            <p className="font-light text-1xl">Joined {month} {year}</p>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }

    
}

export default UserScreen;