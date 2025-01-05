
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SedinteDansuriPopulareScoalaDeDansuriBUCURIABucurestianul2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Sedinte dansuri populare</div>
            <div className="desc">Scoala de dans si muzica BUCURIA, Bucuresti, anul 2024</div>
            <BasicRows />
        </div>
    );
}

export default SedinteDansuriPopulareScoalaDeDansuriBUCURIABucurestianul2024;
