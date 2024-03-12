import React, { useState } from 'react'
import Logo from "../resources/logo_transparent.png"
import { NavLink } from 'react-router-dom'
import Submenu from '../components/UserSubmenu';
import "../styling/navbar.scss"

const Navbar = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    const [showNavbar, setShowNavbar] = React.useState(false);
    
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };

    return (
        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    </div>
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
                        <NavLink to="/lumea_imagini" className={`link ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Lumea mea in imagini
                        </NavLink>
                        <div className={`mobileOnly TextY ${ showNavbar ? "visibleLink" : 'invisibleLink'}`}>
                            <span className='LLine'></span>
                            <span className='implText'>Implica-te gratuit</span>
                        </div>
                        <NavLink to="/redirectioneaza" className={`mobileOnly link ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Redirectioneaza 3.5%
                        </NavLink>
                        <NavLink to="/sponsorizeaza" className={`mobileOnly link ${ showNavbar ? "visibleLink" : 'invisibleLink'}`} onClick={handleShowNavbar}>
                            Sponsorizeaza 20%
                        </NavLink>
                        <div className="submenuContainer" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
                            <span className='navText'>Implica-te gratuit</span>
                            {showSubmenu && <Submenu />}
                        </div>
                    </div>
                </div>
                <div className='colorband'></div>
            </div>
        </div>
    );
}

export default Navbar