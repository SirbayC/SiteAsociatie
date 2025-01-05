
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Eveniment18Ani2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment MAJORAT</div>
            <div className="desc">DARIA SI DIANA</div>
            <BasicRows />
        </div>
    );
}

export default Eveniment18Ani2024;
