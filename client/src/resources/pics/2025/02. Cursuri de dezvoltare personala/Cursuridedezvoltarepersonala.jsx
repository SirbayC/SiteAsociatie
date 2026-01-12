import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Cursuridedezvoltarepersonala = () => {
    return (
        <div className="event">
            <div className="name">Cursuri de dezvoltare personala</div>
            <div className="desc">Coordonator Monica LAZAREC, Bucuresti, 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Cursuridedezvoltarepersonala;
