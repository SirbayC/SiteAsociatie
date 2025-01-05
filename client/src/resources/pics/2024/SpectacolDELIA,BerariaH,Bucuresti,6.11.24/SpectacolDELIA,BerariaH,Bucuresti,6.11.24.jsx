
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SpectacolDELIABerariaHBucuresti61124 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Spectacol DELIA</div>
            <div className="desc">Beraria H, Bucuresti, 06.11.2024</div>
            <BasicRows />
        </div>
    );
}

export default SpectacolDELIABerariaHBucuresti61124;
