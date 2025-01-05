
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentBusinessDisabilitySummitPalatulParlamentului17052024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Bussiness DisAbility Summit</div>
            <div className="desc">Sala Palatului, 17.05.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentBusinessDisabilitySummitPalatulParlamentului17052024;
