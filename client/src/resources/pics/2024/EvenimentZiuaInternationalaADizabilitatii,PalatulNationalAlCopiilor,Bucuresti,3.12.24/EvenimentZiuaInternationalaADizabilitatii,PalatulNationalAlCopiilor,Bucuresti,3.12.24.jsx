
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentZiuaInternationalaADizabilitatiiPalatulNationalAlCopiilorBucuresti31224 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Ziua Internationala a Dizabilitatii</div>
            <div className="desc">Palatul National al Copiilor, Bucuresti, 03.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentZiuaInternationalaADizabilitatiiPalatulNationalAlCopiilorBucuresti31224;
