
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentZiuaInternationalaASindromuluiDownPalatulParlamentuluiBucuresti210324 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Ziua Internationala a Sindromului Down</div>
            <div className="desc">Palatul Parlamentului, Bucuresti, 21.03.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentZiuaInternationalaASindromuluiDownPalatulParlamentuluiBucuresti210324;
