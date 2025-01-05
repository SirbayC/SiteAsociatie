
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SedinteBowlingIdmClubBucurestiMos2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Mos Bowling</div>
            <div className="desc">IDM Club, Bucuresti, 21.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default SedinteBowlingIdmClubBucurestiMos2024;
