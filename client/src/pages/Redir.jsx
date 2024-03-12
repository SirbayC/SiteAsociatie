import React from 'react'
import "../styling/redir.scss"

const Redir = () => {
  const pdfUrl = "https://asociatiaprieteniidariei.ro/230.pdf"

  const download = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop()
        const a = document.createElement("a")
        a.href = blobURL
        a.setAttribute("download", fileName)
        document.body.appendChild(a)
        a.click()
        a.remove()
      })
  }
  return (
    <div className="redir">
      <div className="centered">
        <div className='desc'>
          <h2>Redirectioneaza 3,5% din impozitul pe venit</h2>
          <p>Ca persoana fizica este simplu si total gratuit sa te implici!</p>
          <p>Completeaza formularul 230 alaturat.</p>
          <p>Aceasta nu este o donatie, este doar alegerea ta despre cum sa folosesti o mica parte din banii pe care i-ai virat deja statului, sub forma de impozit pe venitul obtinut anul precedent.</p>
          <p>Trimite formularul pe adresa prieteniidariei@gmail.com pana la data 25 aprilie 2024.</p>
          <p>Incepand din anul 2022, organizatiile non-profit pot depune formularele 230, in numele contribuabilului, exclusiv online.</p>
          <p>Prin completarea formularului 230 iti exprimi acordul ca Asociatia Prietenii D.A.R.I.E.I. sa prelucreze datele tale cu caracter personal, din acest formular, cu scopul inregistrarii acestuia on line, pe platforma e-guvernare, cu semnatura electronica autorizata, conform reglementarilor legale in vigoare</p>
          <p><i>Iti multumim!</i></p>
          <p><i>Fii bun cu tine, fii bun cu ceilalti!Fii bun cu tine, fii bun cu ceilalti!</i></p>
        </div>
        <div className="textWrap">
          <h4>Cerere privind destinatia sumei reprezentand pana la 3,5% din impozitul anual datorat</h4>
        </div>
        <div className="pdf">
          <iframe
              src='https://drive.google.com/file/d/1C_f4fyPWBMROZpwSIRWN1f4XepvsF72l/preview'
              title="brosura"
              width="100%"
              height="600"
              allow="autoplay"
              allowFullScreen={true}
            ></iframe>
        </div>
        <button onClick={() => {
          download(pdfUrl)
        }} > Descarca </button>
      </div>
    </div>
  );
}

export default Redir