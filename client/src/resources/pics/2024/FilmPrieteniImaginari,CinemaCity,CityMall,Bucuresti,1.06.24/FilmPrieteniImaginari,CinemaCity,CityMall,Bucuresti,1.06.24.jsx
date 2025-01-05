
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const FilmPrieteniImaginariCinemaCityCityMallBucuresti10624 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Film Prieteni Imaginari</div>
            <div className="desc">Cinema City, City Mall, Bucuresti, 01.06.2024</div>
            <BasicRows />
        </div>
    );
}

export default FilmPrieteniImaginariCinemaCityCityMallBucuresti10624;
