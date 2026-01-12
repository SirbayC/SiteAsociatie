import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Instantanee = () => {
    return (
        <div className="event">
            <div className="name">Instantanee 2025</div>
            <div className="desc"></div>
            <Gallery photos={content} />
        </div>
    );
}
export default Instantanee;
