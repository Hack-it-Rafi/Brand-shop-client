import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../public/pngwing.com.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
    const location = useLocation();
    const { user, loading, logOut } = useContext(AuthContext);
    // if (loading) {
    //     return;
    // }
    console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const Navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li className="mx-2"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>

    </>


    return (
        <div>
            <div className="navbar bg-base-200 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <img className="w-20 hidden md:block" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {location.pathname != "/login" ? (
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <span>{user?.displayName}</span>
                                <button onClick={handleLogOut} className="btn z">
                                    Sign Out
                                </button>
                            </>
                            :
                            <Link to="/login">
                                <button className="btn z">Log In</button>
                            </Link>

                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Navbar;