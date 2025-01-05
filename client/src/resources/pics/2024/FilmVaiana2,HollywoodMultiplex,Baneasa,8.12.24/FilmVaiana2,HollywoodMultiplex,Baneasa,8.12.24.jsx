
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const FilmVaiana2HollywoodMultiplexBaneasa81224 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Film Vaiana II</div>
            <div className="desc">Cinema Hollywood Multiplex, Baneasa, Bucuresti, 08.12.2024</div>
            <BasicRows />
        </div>
    );
}

export default FilmVaiana2HollywoodMultiplexBaneasa81224;
