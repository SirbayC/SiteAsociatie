
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const TabaraDeIntegrareSiSocializareBusteni11131024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Tabara de integrare si socializare la munte</div>
            <div className="desc">Busteni, 11-13.10.2024</div>
            <BasicRows />
        </div>
    );
}

export default TabaraDeIntegrareSiSocializareBusteni11131024;
