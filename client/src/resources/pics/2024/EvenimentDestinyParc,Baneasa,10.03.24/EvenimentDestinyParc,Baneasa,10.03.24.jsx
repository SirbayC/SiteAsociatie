
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentDestinyParcBaneasa100324 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Destiny Parc</div>
            <div className="desc">Baneasa, 10.03.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentDestinyParcBaneasa100324;
