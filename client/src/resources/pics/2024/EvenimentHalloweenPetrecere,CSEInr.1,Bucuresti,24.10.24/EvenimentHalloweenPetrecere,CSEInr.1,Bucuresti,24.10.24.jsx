
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentHalloweenPetrecereCSEInr1Bucuresti241024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment petrecere Halloween</div>
            <div className="desc">CSEI nr. 1, Bucuresti, 24.10.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentHalloweenPetrecereCSEInr1Bucuresti241024;
