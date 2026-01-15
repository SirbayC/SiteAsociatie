import { useState } from 'react';
import "../styling/redir.scss";
import LoadingSpinner from "../components/Spinner"; 

const Redir = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pdfUrl = "/formulare/230_Asociatia_Prietenii_D.A.R.I.E.I._valabil_in_2026_pentru_an_raportare_2025.pdf";

  const linkDescarcare = (
    <a 
      href={pdfUrl} 
      download="230_Asociatia_Prietenii_D.A.R.I.E.I._valabil_in_2026_pentru_an_raportare_2025.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      aici
    </a>
  );

  return (
    <div className="redir">
      <div className="centered">
        <div className='desc'>
          <h2>Redirectioneaza 3,5% din impozitul pe venit</h2>
          <p>Ca persoana fizica este simplu si total gratuit sa te implici!</p>
          <p>Completeaza formularul 230 alaturat, precompletat cu datele asociatiei.</p>
          <p>Aceasta nu este o donatie, este doar alegerea ta despre cum sa folosesti o mica parte din banii pe care i-ai virat deja statului, sub forma de impozit pe venitul obtinut anul precedent.</p>
          <p>Trimite formularul pe adresa <a href="mailto:prieteniidariei@gmail.com">prieteniidariei@gmail.com</a> pana la data de <strong>20 mai</strong>.</p>
          <p>Incepand din anul 2022, organizatiile non-profit pot depune formularele 230, in numele contribuabilului, exclusiv online.</p>
          <p>Prin completarea formularului 230 iti exprimi acordul ca Asociatia Prietenii D.A.R.I.E.I. sa prelucreze datele tale cu caracter personal, din acest formular, cu scopul inregistrarii acestuia on line, pe platforma e-guvernare, cu semnatura electronica autorizata, conform reglementarilor legale in vigoare</p>
          <p><i>Iti multumim!</i></p>
          <p><i>Fii bun cu tine, fii bun cu ceilalti!</i></p>
        </div>
        <hr />
        <div className="textWrap">
          <h3>
            Cerere privind destinatia sumei reprezentand pana la 3,5% din impozitul anual datorat </h3>
        </div>
        <div className="preview-group">
          <p className="preview-label">Previzualizare formular (click {linkDescarcare} pentru descărcare):</p>
          
          <div className="pdf-preview-container">
            {isLoading && (
               <div className="spinner-container">
                 <LoadingSpinner />
               </div>
            )}
            
            <iframe
              src={pdfUrl}
              title="Formular 230 Preview"
              width="90%"
              height="800px"
              onLoad={() => setIsLoading(false)}
              style={{ 
                  display: isLoading ? 'none' : 'block',
                  border: '1px solid #ccc',
                  borderRadius: '5px'
              }} 
            >
                <p>Browser-ul tau nu poate afisa PDF-ul. Te rugam sa il <a href={pdfUrl}>descarci de aici.</a></p>
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Redir;