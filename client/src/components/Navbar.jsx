import React, { useState } from 'react'
import Logo from "../resources/logo_transparent.png"
import User from "../resources/user.png"
import { NavLink } from 'react-router-dom'
import Submenu from '../components/UserSubmenu';
import "../styling/navbar.scss"

const Navbar = () => {
    // const [showSubmenu, setShowSubmenu] = useState(false);
    // const toggleSubmenu = () => {
    //     setShowSubmenu(!showSubmenu);
    // };

    return (
        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Cunoaste-ne
                        </NavLink>
                        <NavLink to="/da_pot" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Da, pot!
                        </NavLink>
                        <NavLink to="/scrisori" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Scrisori catre Prieteni
                        </NavLink>
                        <NavLink to="/lumea_imagini" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Lumea mea in imagini
                        </NavLink>
                        <NavLink to="/implica_te" className={({ isActive }) => isActive ? "link active" : 'link'}>
                            Implica-te gratuit
                        </NavLink>
                        {/* <div className="userContainer" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
                            <img
                                src={User}
                                alt=""
                                className='userImg'
                            // Show submenu on mouse enter
                            // Hide submenu on mouse leave
                            />
                            {showSubmenu && <Submenu />}
                        </div> */}
                    </div>
                </div>
                <div className='colorband'></div>
            </div>
        </div>
    );
}

export default Navbar