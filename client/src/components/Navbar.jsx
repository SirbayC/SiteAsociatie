import React from 'react'
import Logo from "../resources/logo_transparent.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <NavLink to="/" className={({ isActive }) => isActive? "link active": 'link'}>
                        Acasa
                    </NavLink>
                    <NavLink to="/campanii" className={({ isActive }) => isActive? "link active": 'link'}>
                        Campanii
                    </NavLink>
                    <NavLink to="/galerie" className={({ isActive }) => isActive? "link active": 'link'}>
                        Galerie
                    </NavLink>
                    <NavLink to="/implica_te" className={({ isActive }) => isActive? "link active": 'link'}>
                        Implica-te
                    </NavLink>
                    <NavLink to="/autorizari" className={({ isActive }) => isActive? "link active": 'link'}>
                        Autorizari
                    </NavLink>
                </div>
            </div>
            <div className='colorband'></div>
        </div>
    )
}

export default Navbar