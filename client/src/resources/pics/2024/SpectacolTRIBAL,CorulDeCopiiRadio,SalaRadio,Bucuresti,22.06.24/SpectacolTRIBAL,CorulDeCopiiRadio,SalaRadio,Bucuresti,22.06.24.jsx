
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SpectacolTRIBALCorulDeCopiiRadioSalaRadioBucuresti220624 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Spectacol TRIBAL</div>
            <div className="desc">Corul de Copii Radio, Sala Radio, Bucuresti, 22.06.2024</div>
            <BasicRows />
        </div>
    );
}

export default SpectacolTRIBALCorulDeCopiiRadioSalaRadioBucuresti220624;
