import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const Vizionarispectacole = () => {
    return (
        <div className="event">
            <div className="name">Vizionari spectacole</div>
            <div className="desc">Doctorul Croitor, regizor Monica LAZAREC, Teatrul Evreiesc, Bucuresti, 01.11.2025</div>
            <Gallery photos={content} />
        </div>
    );
}
export default Vizionarispectacole;
