
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentMosulLaSupereroiCotroceni141224 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Mosul la Supereroi</div>
            <div className="desc">Asociatia Supereroilor, Bucuresti, 14.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentMosulLaSupereroiCotroceni141224;
