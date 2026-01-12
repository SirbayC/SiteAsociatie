import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Cursurideinot = () => {
    return (
        <div className="event">
            <div className="name">Cursuri de inot</div>
            <div className="desc">Complexul Olimpic de Natatie Otopeni, Euro Swimming Club, 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Cursurideinot;
