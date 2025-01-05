
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SedinteInotComplexOlimpicDeNatatieOtopenianul2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Sedinte inot</div>
            <div className="desc">Complexul Olimpic de Natatie Otopeni, anul 2024</div>
            <BasicRows />
        </div>
    );
}

export default SedinteInotComplexOlimpicDeNatatieOtopenianul2024;
