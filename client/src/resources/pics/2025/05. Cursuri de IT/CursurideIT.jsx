import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const CursurideIT = () => {
    return (
        <div className="event">
            <div className="name">Cursuri de IT</div>
            <div className="desc">Asociatia SUPEREROILOR, coordonator Marius BRAILA, Bucuresti 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default CursurideIT;
