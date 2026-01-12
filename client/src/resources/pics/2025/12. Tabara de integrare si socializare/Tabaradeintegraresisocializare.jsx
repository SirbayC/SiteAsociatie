import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Tabaradeintegraresisocializare = () => {
    return (
        <div className="event">
            <div className="name">Tabara de integrare si socializare</div>
            <div className="desc">Statiunea Saturn, Hotel Sirena, 01-05.09.2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Tabaradeintegraresisocializare;
