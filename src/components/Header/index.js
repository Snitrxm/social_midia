import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import { AiOutlineHome} from 'react-icons/ai'; 


const Header = () => {
    const name = JSON.parse(localStorage.getItem('user')).name;
    

    return (
        <nav className='flex justify-between bg-blue-500 h-20 flex items-center'>
            <a className='m-5 text-white font-bold'>{name}</a>
            <div className='m-5 flex flex-row'>
            <a>{<AiOutlineHome className='mr-4 text-white text-2xl cursor-pointer'/>}</a>
                <a>{<CgProfile className='text-white text-2xl cursor-pointer'/>}</a>
            </div>
        </nav>
    );
}

export default Header;