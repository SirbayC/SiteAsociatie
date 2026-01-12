import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Vizionarifilme = () => {
    return (
        <div className="event">
            <div className="name">Vizionari filme</div>
            <div className="desc">Sirenele II, Cinema Holywood Multiplex, Baietii Rai II, Cinema City, Bucuresti 2025 </div>
            <Gallery photos={content} />
        </div>
    );
}
export default Vizionarifilme;
