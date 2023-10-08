import React from 'react';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { useSpring, animated } from 'react-spring';



const Submenu = () => {
    const titleAnimation = useSpring({
        from: {
            transform: "translateY(0px) translateX(-50%)"
        },
        to: [{ transform: "translateY(10px) translateX(-50%)" }],
        config: { mass: 3, tension: 500, friction: 25 }
    });
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    const customStyles = {
        left: '50%'
    };

    return (
        <animated.div className="submenu" style={{...customStyles, ...titleAnimation }}>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleLogout}>Adauga scrisoare</button>
        </animated.div>
    );
};

export default Submenu;
