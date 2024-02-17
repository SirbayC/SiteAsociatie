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

    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };


    const Hamburger = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="24"
            viewBox="0 0 52 24"
        >
            <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
                <rect
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    width="42"
                    height="4"
                    rx="2"
                    transform="translate(304 47)"
                    fill="#574c4c"
                />
                <rect
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    width="42"
                    height="4"
                    rx="2"
                    transform="translate(304 67)"
                    fill="#574c4c"
                />
                <rect
                    id="Rectangle_4"
                    data-name="Rectangle 4"
                    width="52"
                    height="4"
                    rx="2"
                    transform="translate(294 57)"
                    fill="#574c4c"
                />
            </g>
        </svg>
    );


    return (
        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                    <div className={`links ${showNavbar && "showMenu"}`}>
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