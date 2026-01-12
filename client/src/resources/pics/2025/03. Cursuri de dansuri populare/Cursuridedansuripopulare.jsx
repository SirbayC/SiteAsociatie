import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Cursuridedansuripopulare = () => {
    return (
        <div className="event">
            <div className="name">Cursuri de dansuri populare</div>
            <div className="desc">Scoala de dans BUCURIA, instructor de dans Radu SAVALACHE, Bucuresti, 2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Cursuridedansuripopulare;
