import "../styling/redir.scss"

const Redir = () => {
  const pdfUrl = "/D230_precompletat_asociatia_prietenii_dariei_2025.pdf"
  const previewUrl = "/230_preview.png"

  const linkDescarcare = <>
    <a href={pdfUrl} download="D230_precompletat_asociatia_prietenii_dariei_2025.pdf" target="_blank" rel="noopener noreferrer">
      aici
    </a>
  </>

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
        <div className="textWrap">
          <h4>
            Cerere privind destinatia sumei reprezentand pana la 3,5% din impozitul anual datorat </h4>
        </div>

        <div className="info-banner">
          <div className="content">
            <strong>Important:</strong> Formularul descarcat este inteligent si
            trebuie deschis cu <strong><a href="https://get.adobe.com/reader/">Adobe Acrobat Reader</a></strong> pentru a putea fi completat.
          </div>
        </div>

        <div className="preview-group">
          <p className="preview-label">Previzualizare formular (click {linkDescarcare} sau pe imagine pentru descărcare):</p>
          {/* Am șters textul roșu redundant de aici */}

          <div className="pdf-preview-container" >
            <a
              href={pdfUrl}
              download="D230_precompletat_asociatia_prietenii_dariei_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={previewUrl}
                alt="Previzualizare Formular 230 - Click pentru descarcare"
              // Am mutat stilurile inline în SCSS pentru curățenie
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Redir