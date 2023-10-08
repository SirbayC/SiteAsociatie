import React, { useContext, useState } from 'react'
import Logo from "../resources/logo_transparent.png"
import User from "../resources/user.png"
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import Submenu from '../components/UserSubmenu';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    const [showSubmenu, setShowSubmenu] = useState(false);

    // Function to toggle the submenu
    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (

        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Acasa
                        </NavLink>
                        <NavLink to="/campanii" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Scrisori catre prieteni
                        </NavLink>
                        <NavLink to="/galerie" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Galerie
                        </NavLink>
                        <NavLink to="/implica_te" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Implica-te
                        </NavLink>
                        <NavLink to="/autorizari" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Autorizari
                        </NavLink>
                        {user === process.env.REACT_APP_ADMIN_USERNAME && (
                            <div className="userContainer" onMouseEnter={toggleSubmenu}  onMouseLeave={toggleSubmenu}>
                                <img
                                    src={User}
                                    alt=""
                                    className='userImg'
                                    // Show submenu on mouse enter
                                    // Hide submenu on mouse leave
                                />
                                {showSubmenu && <Submenu/>}
                            </div>
                        )}
                    </div>
                </div>
                <div className='colorband'></div>
            </div>

        </div>
    )
}

export default Navbar