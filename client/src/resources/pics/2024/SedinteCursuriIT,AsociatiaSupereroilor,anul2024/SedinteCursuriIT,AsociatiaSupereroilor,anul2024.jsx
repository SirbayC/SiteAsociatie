
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const SedinteCursuriITAsociatiaSupereroiloranul2024 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Sedinte Cursuri IT pentru tineri speciali</div>
            <div className="desc">Asociatia Supereroilor, Bucuresti, anul 2024</div>
            <BasicRows />
        </div>
    );
}

export default SedinteCursuriITAsociatiaSupereroiloranul2024;
