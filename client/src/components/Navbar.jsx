import React, { useEffect, useRef, useState } from 'react'
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
    
    // const Hamburger = () => (
    //   <label htmlFor="check" >
    //         <input type="checkbox" id="check" checked={showNavbar} />
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </label>
    // );


    return (
        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    </div>
                    {/* <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div> */}
                    <div className="menu-toggle" onClick={handleShowNavbar}>
                        <div className={`hambox ${showNavbar && "hamboxOpen"}`}>
                            <span className= {`lineTop ${showNavbar && "spin"}`}></span>
                            <span className={`lineBottom ${showNavbar && "spin"}`}></span>
                        </div>
                    </div>
                    <div className={`links ${showNavbar && "showMenu"}`}>
                        <NavLink to="/" className={`link ${({ isActive }) => isActive ? "active" : ''} ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Cunoaste-ne
                        </NavLink>
                        <NavLink to="/da_pot" className={`link ${showNavbar && "visibleLink"} ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Da, pot!
                        </NavLink>
                        <NavLink to="/scrisori" className={`link ${showNavbar && "visibleLink"} ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Scrisori catre Prieteni
                        </NavLink>
                        <NavLink to="/lumea_imagini" className={`link ${({ isActive }) => isActive ? "active" : ''} ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Lumea mea in imagini
                        </NavLink>
                        <NavLink to="/implica_te" className={`link ${({ isActive }) => isActive ? "active" : ''} ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
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