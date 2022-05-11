import { CgProfile } from 'react-icons/cg';
import { AiOutlineHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';
import './index.css';


const Header = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return (
        <nav className='flex bg-blue-500 h-20 flex items-center justify-between	'>
            <div className='m-5 flex flex-row md:m-40'>
                <Link to='/home'><a>{<AiOutlineHome className='text-white text-3xl cursor-pointer hover:text-gray-200'/>}</a></Link>
            </div>
            <div className='mr-10 flex'>
                <Link to={`/user/${user.username}`}><a>{<CgProfile className='mr-8 text-white text-3xl cursor-pointer hover:text-gray-200'/>}</a></Link>
                <Link to=''><a>{<BsGear className='mr-10 text-white text-3xl cursor-pointer hover:text-gray-200'/>}</a></Link>
                <input className='rounded pl-3 w-100 focus:outline-none input' placeholder='Search Snitter'></input>
            </div>
        </nav>
    );
}

export default Header;