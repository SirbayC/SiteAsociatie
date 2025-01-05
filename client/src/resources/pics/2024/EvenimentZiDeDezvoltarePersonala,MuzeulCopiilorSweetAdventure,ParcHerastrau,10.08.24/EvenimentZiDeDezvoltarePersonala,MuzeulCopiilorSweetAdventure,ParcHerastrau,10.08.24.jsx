
import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentZiDeDezvoltarePersonalaMuzeulCopiilorSweetAdventureParcHerastrau100824 = () => {
    const BasicRows = () => <Gallery photos={content} />;
    return (
        <div className="event">
            <div className="name">Eveniment Zi de dezvoltare personala</div>
            <div className="desc">Muzeul dulciurilor SWEET ADVENTURE si picnic parc HERASTRAU, Bucuresti, 10.08.2024</div>
            <BasicRows />
        </div>
    );
}

export default EvenimentZiDeDezvoltarePersonalaMuzeulCopiilorSweetAdventureParcHerastrau100824;
