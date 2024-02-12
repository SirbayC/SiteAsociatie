import { React, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSpring, animated } from "react-spring";

function Accordion(props) {

    const durCalc = props.height.substring(0, props.height.length - 2);

    const [open, setOpen] = useState(false);
    let toggleOpen = e => {
        setOpen(prev => !prev)
    };

    const [hover, setHover] = useState(false);
    let toggleHover = e => {
        setHover(prev => !prev)
    };

    const styles = {
        accordionTitle: {
            color: (open || hover) ? props.color : "#000"
        }
    };

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "25px" },
        to: { opacity: "1", maxHeight: open ? props.height : "25px" },
        config: { duration: durCalc / 2.5 }
    });

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)",
            color: "#000"
        },
        to: {
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: (open || hover) ? props.color : "#000"
        },
        config: { duration: "120" }
    });

    return (
        <animated.div className="accordion__item" style={openAnimation}>
            <div className="accordion__header" onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={toggleOpen}>
                <div className="dotTitle">
                    <span className="circleDot" style={{ backgroundColor: props.color }}></span>
                    <h4 style={styles.accordionTitle}>{props.title}</h4>
                </div>

                <animated.i style={iconAnimation}>
                    <ExpandMoreIcon />
                </animated.i>
            </div>
            <div className="accordion__content">{props.content}</div>
        </animated.div>
    );
}

export default Accordion;