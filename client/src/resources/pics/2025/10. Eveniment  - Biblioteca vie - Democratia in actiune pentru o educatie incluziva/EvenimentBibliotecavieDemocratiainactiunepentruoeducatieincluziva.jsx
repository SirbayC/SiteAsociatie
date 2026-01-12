import React from 'react';
import Gallery from "react-photo-gallery";
import { content } from "./photos";

const EvenimentBibliotecavieDemocratiainactiunepentruoeducatieincluziva = () => {
    return (
        <div className="event">
            <div className="name">Eveniment  - Biblioteca vie - Democratia in actiune pentru o educatie incluziva</div>
            <div className="desc">House of Europe, 4.06.2025,</div>
            <Gallery photos={content} />
        </div>
    );
}
export default EvenimentBibliotecavieDemocratiainactiunepentruoeducatieincluziva;
