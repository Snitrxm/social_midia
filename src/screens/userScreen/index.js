import HeaderUnlogged from "../../components/HeaderUnlogged";
import { Fragment } from "react";  
import { BsArrowLeft } from "react-icons/bs"; 
import './index.css'
import { Link, useParams } from "react-router-dom";
import UserService from "../../services/user";
import { useEffect, useState } from "react";






const UserScreen = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const finder = async () => {
        try {
            const response = await UserService.findOne(id);
            setName(response.data.name)
            setUsername(response.data.username)
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        finder();
    },[])

    if(user){
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
                                    <p className="mt-2">@{username}</p>
                                </div>
                            </div>
                            <div>
                                <Link to={`/user/edit/${id}`}><button className="border border-black bg-transparent font-bold p-1 rounded-lg transition hover:bg-gray-200">Edit Profile</button></Link>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </main>
            </Fragment>
            
        );
    } else{
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
                                    <p className="mt-2">@{username}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }

    
}

export default UserScreen;