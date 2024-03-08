import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addProduct">Add Product</Link></li>
                        <li><Link to="/myCart">My Cart</Link></li>
                        <ToggleTheme></ToggleTheme>
                        <li>
                            {
                                user ?
                                    <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                                    :
                                    <Link to="/login">Login</Link>

                            }
                        </li>
                        <li>{user?.displayName || user?.email}</li>

                    </ul>
                </div>
                <img src="/public/gadget.png" alt="" width="20px" />
                <a className="btn btn-ghost text-xl">GadgetHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/addProduct">Add Product</Link></li>
                    <li><Link to="/myCart">My Cart</Link></li>
                    <ToggleTheme></ToggleTheme>
                    <li>
                        {
                            user ?
                                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                                :
                                <Link to="/login">Login</Link>

                        }
                    </li>
                    <li>{user?.displayName || user?.email}</li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;