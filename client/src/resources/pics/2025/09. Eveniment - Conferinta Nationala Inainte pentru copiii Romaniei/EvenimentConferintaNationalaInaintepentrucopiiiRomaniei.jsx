import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentConferintaNationalaInaintepentrucopiiiRomaniei = () => {
    return (
        <div className="event">
            <div className="name">Eveniment - Conferinta Nationala Inainte pentru copiii Romaniei</div>
            <div className="desc">Biblioteca Nationala, Bucuresti, 14.04.2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default EvenimentConferintaNationalaInaintepentrucopiiiRomaniei;
