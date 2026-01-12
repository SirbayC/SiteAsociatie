import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Erin = () => {
    return (
        <div className="event">
            <div className="name">Erin</div>
            <div className="desc">Erin, medaliata cu aur la 100 m liber, concurs natatie, Special Olympics, 30-31 mai 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Erin;
