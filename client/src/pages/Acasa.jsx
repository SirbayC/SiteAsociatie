import React from 'react'
import Accordion from '../components/Accordion'
import { useSpring, animated } from "react-spring";

const Acasa = () => {

  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)"
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 }
  });

  return (
    <div className="acasa">
      <div className='generalPresentation'>
        <h1>Permiteti-ne sa ne prezentam:</h1>
        <div className="paragraphs">
          <div className="parCol">
            <p>Asociatia Prietenii D.A.R.I.E.I. suntem noi, o asociatie mica cu suflet urias, asa cum este cel al Dariei, fetita noastra care s-a nascut cu acest fel de-a fi numit Sindrom Down.</p>
            <p>De ce "PRIETENII D.A.R.I.E.I"? Pentru ca vedem prietenia ca pe o optiune de bucurie a sufletului, care leaga oameni si povestile lor, pentru ca numim “prieteni” valori precum: Diversitate, Acceptare, Rabdare, Integrare, Empatie si Iubire.</p>
            <p>Pana sa ne confruntam fata in fata cu problematica Sindromului Down, nu am realizat cat de multi copii sunt in jurul nostru si se nasc in continuare cu acest diagnostic (nu-i spunem boala, il consideram asadar un anumit fel de-a fi, caruia stiinta medicala nu i-a descoperit cauzele, inca). </p>
            <p>Incercand sa dam sens provocarii de a fi parintii unui copil cu Sindrom Down, am infiintat in anul 2015 Asociatia Prietenii D.A.R.I.E.I. cu gandul de a oferi sprijin mai departe si altor copii si familiilor lor, care traiesc povesti similare noua.</p>
            <p>Dorim sa inlesnim accesul unor copii cu nevoi speciale, copii diagnosticati cu Sindrom Down, la servicii medico-socio-info-educationale, care sa le maximizeze sansele integrarii, demne si cat mai independente in aceasta societate, din care si ei fac parte.</p>
          </div>
          <div className='line'></div>
          <div className="parCol"><p>Cand Daria noastra a implinit 10 ani, in anul 2016, ca un fel de incununare a acestui deceniu de viata, intr-o pornire de solidaritate si incredere, am simtit nevoia de a impartasi in scris povestea noastra.</p>
            <p>Asa a luat nastere brosura "Da,pot!" - asa am numit-o, dupa spusele Dariei (mai mica fiind, urcata sus pe tobogan, ca sa-si faca curaj in a cobori, imita muscatul dintr-un morcov, mesteca in gol, inghitea aer si-si spunea singura ”Da, pot!”, dupa care isi da drumul pe tobogan… si topoganul era din ce in ce mai inalt si mai ondulat…). Aceste materiale tiparite au ajuns la medici de familie si specialisti aflati in interactiune directa cu parinti de copii cu Sindrom Down si sper din suflet sa fi fost si sa fie in continuare macar o picatura de speranta in marea lor de intrebari si nelinisti. </p>
            <p>Asociatia Prietenii D.A.R.I.E.I. s-a dovedit parte din comunitate inca de la infiintarea sa, a fost si continua sa fie alaturi de copii cu nevoi speciale, copii cu Sindrom Down, dar si de parintii acestora.</p>
          </div>
        </div>
      </div>

      <div className='accordPresentation'>
        <animated.h2 style={titleAnimation}>Ariile generale de implicare ale Asociatiei Prietenii D.A.R.I.E.I.</animated.h2>
        <div className="accordion">
          <Accordion
            title="Terapia limbajului. Servicii logopedice de specialitate."
            content={
              <div>
                <p>2017, 2018, 2019 - sedintele terapeutice de logopedie, cu frecventa saptamanala, decontate de Asociatia Prietenii D.A.R.I.E.I. au fost sustinute de catre specialist logoped, in spatiul apartinand Asociatiei de Interventie Terapeutica in Criza, Bucuresti, Sector 2. Beneficiar 1 copil special.</p>
                <p>2020 - 2024 - Asociatia mareste numarul copiilor cu Sindrom Down care beneficiaza de sedinte terapeutice de logopedie si terapie ocupationala prestate prin Cabinetul Individual de Psihologie Burlacu Nicoleta, Sector 1, Bucuresti, conform contract existent intre parti. Sedintele se desfasoara saptamanal, cu prezenta fizica sau online. Beneficiari 3 copii speciali.</p>
              </div>
            }
            height = "250px"
          />
          <Accordion
            title="Tabere de integrare, excursii, ateliere."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
          />
          <Accordion
            title="Materiale didactice educative. Tiparituri, Jocuri."
            content={
              <div>
                <p>Am oferit copiilor cu Sindrom Down si parintilor acestora o multime de jocuri si materiale didactice educative care sa le fie de un real ajutor, de-a lungul anilor.</p>
                <p>21.03.2017 - Ziua Internationala a Sindromului Down- Asociatia Prietenii D.A.R.I.E.I. achizitioneaza kituri Montesori (”Descopar Literele” - kit de invatare rapida a scrisului si cititului la o varsta frageda, ”Descopar cifrele” - kit pentru invatarea numeratiei si pentru introducerea in aritmetica) in sprijinul unor copii cu Sindrom Down din cadrul Centrului de zi Down al Complexului de Servicii Sociale ”Sfanta Ecaterina”, apartinand Directiei Generale de Asistenta Sociala si Protectia Copilului Sector 1, Bucuresti.</p>
                <p>25.01.2018 - CAIETUL PENTRU DICTIE SI COMUNICARE - MINIGHID LOGOPEDIC - Autor Valeria Balaban, INDREPTAR PENTRU CORECTAREA DIFICULTATILOR DE SCRIS-CITIT LA COPII - Autori Mihai BOLDAN si Steluta BOLDAN</p>
                <p>11.07.2018 - SA VORBIM CU … PLACERE - carte autor coordonator prof dr Ecaterina VRASMAS, presedinta Asociatia RENINCO Romania, SA INVATAM CU … PLACERE - carte autor coordonator prof dr Ecaterina VRASMAS</p>
                <p>25.09.2019 - CAIETUL PENTRU DICTIE SI COMUNICARE - MINIGHID LOGOPEDIC - Autor Valeria Balaban, INDREPTAR PENTRU CORECTAREA DIFICULTATILOR DE SCRIS-CITIT LA COPII - Autori Mihai BOLDAN si Steluta BOLDAN, GHIDUL PRONUNTARII CORECTE LA COPII – Autor Mihai BOLDAN, SA INVATAM CU …PLACERE (Fise de excercitii logopedice in comunicarea orala si scrisa) - realizator Asociatia RENINCO Romania, SA VORBIM CU …PLACERE ((Fise de excercitii logopedice in comunicarea orala si scrisa) - realizator Asociatia RENINCO Romania</p>
                <p>01.10.2019 - Asociatia Prietenii D.A.R.I.E.I. daruieste pentru copiii Scolii Gimnaziale Speciale nr 2, Bucuresti produse de la SC OMFAL EDUCATIONAL SRL constand in jocuri si materiale educative, printre care:  Calendarul naturii, Piramida alimentatiei sanatoase, Provocare gandire critica, Balanta din lemn cu talere</p>
                <p>4.03.2020 -  “Matematica”  - Manual clasa a IV a pentru scoli speciale - ajutatoare, Editura Didactica si Pedagogica, Bucuresti 1994, * “Limba Romana” – Marioara Popescu  - Manual clasa a IV a pentru scoli speciale , pentru elevi cu deficiente mintale moderate, Editura Didactica si Pedagogica</p>
              </div>
            }
            height = "750px"
          />
          <Accordion
            title="Sarbatorile prin ochii copiilor nostri."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <Accordion
            title="Dezvoltare prin miscare si inot."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <Accordion
            title="Socializare prin muzica, dans, film."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <Accordion
            title="Conferinte. Cursuri."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <Accordion
            title="IT-ul, indragit si de copiii speciali."
            content={
              <div>
                <h5>Taberele de integrare</h5>
                <p>Organizate de catre Asociatia CONIL, ele au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
                <ul>
                  <li>02-07.08.2021 (6 zile), VADUL ANEI, Branesti, jud Ilfov - 3 copii cu Sindrom Down sustinuti de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de aceasta tabara de integrare</li>
                  <li>15-19.08.2022 (5 zile), MIHAILESTI - 2 fetite cu Sindrom Down sustinute de Asociatia Prietenii D.A.R.I.E.I. au beneficiat de tabara de integrare, in locatia COUNTRY CLUB MIHAILESTI - hotel si club sportiv, judetul GIURGIU.</li>
                </ul>
                <h5>Atelier de pictura si grup de socializare </h5>
                <ul>
                  <li>04.12.2021 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile implicate de sustinerea acestui atelier prin Asociatia CONIL, in str Bascov, Bucuresti. Beficiari 4 copii cu nevoi speciale.</li>
                </ul>
                <h5>Excursie la Ferma Cocosul Rosu</h5>
                <ul>
                  <li>05.10.2022 - Asociatia sustine financiar participarea a 6 copii cu cerinte educationale speciale din clasa a VIII a A la excursia organizata de Scoala Gimnaziala Speciala nr.2, Sector 2, Bucuresti. Deplasarea copiilor se face cu autocar autorizat, acestia avand ocazia sa participe activ la toate activitatile ce au loc intr-o ferma: sa impleteasca propria paine, sa vada cum se prepara branza, dar si sa savureze din bucatele traditionale ce au la baza carne, legume si fructe obtinute in cadrul fermei.</li>
                </ul>
              </div>
            }
            height = "600px"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />

        </div>
      </div>

    </div>
  )
}

export default Acasa