import { useSpring, animated } from 'react-spring';
import {Link} from "react-router-dom"

const Submenu = () => {
    const titleAnimation = useSpring({
        from: {
            transform: "translateY(110px) translateX(-50%)"
        },
        to: [{ transform: "translateY(90px) translateX(-50%)" }],
        config: { mass: 3, tension: 500, friction: 25 }
    });

    const customStyles = {
        left: '50%'
    };

    return (
        <animated.div className="submenu" style={{...customStyles, ...titleAnimation }}>
            <Link to="/redirectioneaza"><button>Redirectioneaza 3.5%</button></Link>
            <Link to="/sponsorizeaza"><button>Sponsorizeaza</button></Link>
        </animated.div>
    );
};

export default Submenu;
