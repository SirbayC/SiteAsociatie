import React from 'react';
import Gallery from "react-photo-gallery";
import { content as c1 } from "./EvenimentFederatiaSindromDowndinRomania/photos";
import { content as c2 } from "./EvenimentSpecialOlympicsRomania/photos";

const EvenimentZiuaInternationalaaSindromuluiDown = () => {
    return (
        <div className="event">
            <div className="name">Eveniment - Ziua Internationala a Sindromului Down</div>
            <div className="subName">EvenimentFederatiaSindromDowndinRomania</div>
            <div className="subDesc">Institutul National de Statistica, Palatul Cotroceni, Bucuresti, 27.03.2025</div>
            <Gallery photos={c1} />
            <br />
            <div className="subName">EvenimentSpecialOlympicsRomania</div>
            <div className="subDesc">World Class Piata Sudului, 21.03.2025</div>
            <Gallery photos={c2} />
            <br />
        </div>
    );
}
export default EvenimentZiuaInternationalaaSindromuluiDown;
