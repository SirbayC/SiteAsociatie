import React from 'react'
import "../styling/spons.scss"

const Spons = () => {
  return (
    <div className="spons">
      <div className="centered">
        <div className="desc">
          <h2>Sponsorizeaza</h2>
          <p>De vrei sa ne sustii, chiar o poti face, e simplu si e gratuit: ca persoana juridica impozabila, poti alege sa redirectionezi din impozitul datorat statului, catre cauza noastra.</p>
          <p>Asteptam vesti de la tine pe adresa prieteniidariei@gmail.com.</p>
          <p>Asociatia Prietenii D.A.R.I.E.I. este inregistrata in Registrul Special al Asociatiilor si Fundatiilor, Judecatoria sectorului 1, cu nr. 32/24.02.2015 si este inscrisa in Registrul entitatilor pentru care se acorda deduceri fiscale conform Decizie Anaf nr. 311133/19.12.2019.</p>
          <p> <i>Iti multumim!</i> </p>
          <p> <i>Fii bun cu tine, fii bun cu ceilalti!</i></p>
        </div>
        <div className="pdf">
          <iframe
              src='https://drive.google.com/file/d/1fekJcg40XhmN8jRZ5Zid-sinh61mwY-e/preview'
              title="brosura"
              width="100%"
              height="600"
              allow="autoplay"
              allowFullScreen={true}
            ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Spons