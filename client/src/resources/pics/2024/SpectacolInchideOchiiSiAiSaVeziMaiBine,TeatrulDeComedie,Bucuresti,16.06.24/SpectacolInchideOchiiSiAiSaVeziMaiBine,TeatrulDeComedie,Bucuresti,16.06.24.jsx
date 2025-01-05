
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SpectacolInchideOchiiSiAiSaVeziMaiBineTeatrulDeComedieBucuresti160624 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Spectacol Inchide ochii si ai sa vezi mai bine</div>
            <div className="desc">Teatrul de Comedie, Bucuresti, 16.06.2024</div>
            <BasicRows />
        </div>
    );
}

export default SpectacolInchideOchiiSiAiSaVeziMaiBineTeatrulDeComedieBucuresti160624;
