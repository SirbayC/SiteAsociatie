
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SpectacolRaoulSiMirabelaPalatulNationalAlCopiilorBucuresti221224 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Spectacol Raoul Si Mirabela</div>
            <div className="desc">Palatul National al Copiilor, Bucuresti, 22.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default SpectacolRaoulSiMirabelaPalatulNationalAlCopiilorBucuresti221224;
