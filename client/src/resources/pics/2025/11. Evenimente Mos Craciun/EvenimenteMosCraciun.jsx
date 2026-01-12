import React from 'react';
import Gallery from "react-photo-gallery";
import { content as c1 } from "./1Mosulnuneuita/photos";
import { content as c2 } from "./2MosuliubesteSupereroii/photos";

const EvenimenteMosCraciun = () => {
    return (
        <div className="event">
            <div className="name">Evenimente Mos Craciun</div>
            <div className="subName">Mosul nu ne uita!</div>
            <div className="subDesc">Centrul Scolar de Educatie Incluziva nr. 1, str. Traian 160, Bucuresti</div>
            <Gallery photos={c1} />
            <br />
            <div className="subName">Mosul iubeste Supereroii!</div>
            <div className="subDesc">Asociatia Supereroilor, coordonator Marius BRAILA, 2025</div>
            <Gallery photos={c2} />
            <br />
        </div>
    );
}
export default EvenimenteMosCraciun;
