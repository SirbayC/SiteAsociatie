
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SedinteDezvoltarePersonalaAnul2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Sedinte dezvoltare personala</div>
            <div className="desc">Lazarec Lacramioara Monica, Bucuresti, anul 2024</div>
            <BasicRows />
        </div>
    );
}

export default SedinteDezvoltarePersonalaAnul2024;
