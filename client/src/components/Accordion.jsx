import { React, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSpring, animated } from "react-spring";

function Accordion(props) {

    const [open, setOpen] = useState(false)
    let toggleHandler = e => {
        setOpen(!open)
    }

    const styles = {
        accordionTitle: {
            color: open ? "#10d6f5" : "#fff"
        }
    }

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "25px" },
        to: { opacity: "1", maxHeight: open ? props.height : "25px" },
        config: { duration: "300" }
    })

    const iconAnimation = useSpring({
        from: {
          transform: "rotate(0deg)",
          color: "#ffff"
        },
        to: {
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          color: open ? "#10d6f5" : "#fff"
        },
        config: { duration: "120" }
      });

    return (
        <animated.div className="accordion__item" style={openAnimation}>
            <div className="accordion__header" onClick={toggleHandler}>
                <h4 style={styles.accordionTitle}>{props.title}</h4>
                <animated.i style={iconAnimation}>
                    <ExpandMoreIcon />
                </animated.i>
            </div>
            <div className="accordion__content">{props.content}</div>
        </animated.div>
    );
}

export default Accordion;