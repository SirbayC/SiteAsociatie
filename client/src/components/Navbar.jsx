import React, { useContext } from 'react'
import Logo from "../resources/logo_transparent.png"
import User from "../resources/user.png"
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Navbar = () => {
    const { user,accessToken, login, logout  } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="navbar">
            <div className='centeredCont'>
                <div className="container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="links">
                    <NavLink to="/" className={({ isActive }) => isActive? "link active": 'link'}>
                        Acasa
                    </NavLink>
                    <NavLink to="/campanii" className={({ isActive }) => isActive? "link active": 'link'}>
                        Scrisori catre prieteni
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
                    {user===process.env.REACT_APP_ADMIN_USERNAME && 
                        <div>
                            <img src={User} alt="" className='userImg' />
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    }
                </div>
            </div>
           <div className='colorband'></div>
            </div>
            
        </div>
    )
}

export default Navbar