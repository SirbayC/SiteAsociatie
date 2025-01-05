
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const TabaraDeIntegrareSiSocializareSaturn270924 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Tabara de integrare si socializare la mare</div>
            <div className="desc">Statiunea Saturn, 02-07.09.2024</div>
            <BasicRows />
        </div>
    );
}

export default TabaraDeIntegrareSiSocializareSaturn270924;
