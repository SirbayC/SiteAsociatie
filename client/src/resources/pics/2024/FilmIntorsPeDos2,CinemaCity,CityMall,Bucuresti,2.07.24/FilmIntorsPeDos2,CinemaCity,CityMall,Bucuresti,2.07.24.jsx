
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const FilmIntorsPeDos2CinemaCityCityMallBucuresti20724 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Film Intors pe dos II</div>
            <div className="desc">Cinema City, City Mall, Bucuresti, 02.07.2024</div>
            <BasicRows />
        </div>
    );
}

export default FilmIntorsPeDos2CinemaCityCityMallBucuresti20724;
