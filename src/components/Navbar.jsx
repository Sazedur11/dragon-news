import { NavLink } from "react-router-dom";
import userImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-3/12"></div>
            <div className="w-6/12 text-gray-400 space-x-4 flex justify-center">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="w-3/12 flex items-center justify-end gap-4">
                <img src={userImg} alt="user" />
                <button className="bg-black text-white py-2 px-6">Login</button>
            </div>
        </div>
    );
};

export default Navbar;