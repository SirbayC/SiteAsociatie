import React, { useEffect, useRef, useState } from 'react'
import "../styling/dapot.scss"
import pdf from "../resources/brosura.pdf"
import LoadingSpinner from "../components/Spinner";

const DaPot = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="dapot">
      <div className="centeredDapot">
        <div className="generalPres">
          <h2>Brosura Da, Pot!</h2>
          <div className="prestext">
            <p>Cand Daria noastra a implinit 10 ani, in anul 2016, ca un fel de incununare a acestui deceniu de viata, intr-o pornire de solidaritate si incredere, am simtit nevoia de a impartasi in scris povestea noastra.</p>
            <p>Asa a luat nastere brosura "Da,pot!" - asa am numit-o, dupa spusele Dariei (mai mica fiind, urcata sus pe tobogan, ca sa-si faca curaj in a cobori, imita muscatul dintr-un morcov, mesteca in gol, inghitea aer si-si spunea singura "Da, pot!", dupa care isi da drumul pe tobogan… si topoganul era din ce in ce mai inalt si mai ondulat…). Aceste materiale tiparite au ajuns la medici de familie si specialisti aflati in interactiune directa cu parinti de copii cu Sindrom Down si sper din suflet sa fi fost si sa fie in continuare macar o picatura de speranta in marea lor de intrebari si nelinisti. </p>
          </div>
        </div>
        <div className="pdf">
        {
            isLoading ? <LoadingSpinner /> : null
          } 
          <iframe
            src='https://drive.google.com/file/d/1AdxNm1A0rL9Ruiot33OIm5BntVJMRuSp/preview'
            title="brosura"
            width="100%"
            height="600"
            allow="autoplay"
            allowFullScreen={true}
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DaPot