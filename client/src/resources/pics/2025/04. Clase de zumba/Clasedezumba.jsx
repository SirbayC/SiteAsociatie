import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Clasedezumba = () => {
    return (
        <div className="event">
            <div className="name">Clase de zumba</div>
            <div className="desc">Clase de zumba, instructor Andrei OSANU, Bucuresti, 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Clasedezumba;
