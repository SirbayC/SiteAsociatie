
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentMosulPeLaNoiCSEInr1Bucuresti61224 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Mosul pe la noi</div>
            <div className="desc">CSEI nr. 1, Bucuresti, 06.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentMosulPeLaNoiCSEInr1Bucuresti61224;
