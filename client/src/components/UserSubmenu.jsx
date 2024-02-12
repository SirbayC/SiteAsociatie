import React from 'react';
import { useSpring, animated } from 'react-spring';
import {Link} from "react-router-dom"

const Submenu = () => {
    const titleAnimation = useSpring({
        from: {
            transform: "translateY(0px) translateX(-50%)"
        },
        to: [{ transform: "translateY(10px) translateX(-50%)" }],
        config: { mass: 3, tension: 500, friction: 25 }
    });

    const customStyles = {
        left: '50%'
    };

    return (
        <animated.div className="submenu" style={{...customStyles, ...titleAnimation }}>
            <Link to="/home"><button>Adauga scrisoare</button></Link>
        </animated.div>
    );
};

export default Submenu;
