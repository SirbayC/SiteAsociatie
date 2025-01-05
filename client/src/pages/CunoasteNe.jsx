import React from 'react'
import Accordion from '../components/Accordion'
import { useSpring, animated } from "react-spring";
import Fetita from "../resources/fetita.png"
import "../styling/cunoastene.scss"
import Pic from '../resources/decEnd.png';

const CunoasteNe = () => {

  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)"
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 }
  });

  return (
    <div className="acasa">
      <div className="centeredAcasa">
        <div className='generalPresentation'>
          <h2>TESTAcestia suntem noi:</h2>
          <div className="paragraphs">
            <div className="parCol pc1">
              <p>Asociatia Prietenii D.A.R.I.E.I. suntem noi, o asociatie mica cu suflet urias, asa cum este cel al Dariei, fetita noastra care s-a nascut cu acest fel de-a fi numit Sindrom Down.</p>
              <p>De ce "PRIETENII D.A.R.I.E.I"? Pentru ca vedem prietenia ca pe o optiune de bucurie a sufletului, care leaga oameni si povestile lor, pentru ca numim "prieteni" valori precum: Diversitate, Acceptare, Rabdare, Integrare, Empatie si Iubire.</p>
              <p>Pana sa ne confruntam fata in fata cu problematica Sindromului Down, nu am realizat cat de multi copii sunt in jurul nostru si se nasc in continuare cu acest diagnostic (nu-i spunem boala, il consideram asadar un anumit fel de-a fi, caruia stiinta medicala nu i-a descoperit cauzele, inca). </p>
              </div>
            <div className='desktopOnly line'></div>
            <div className="parCol pc2">
              <p>Incercand sa dam sens provocarii de a fi parintii unui copil cu Sindrom Down, am infiintat in anul 2015 Asociatia Prietenii D.A.R.I.E.I. cu gandul de a oferi sprijin mai departe si altor copii si familiilor lor, care traiesc povesti similare noua.</p>
              <p>Dorim sa inlesnim accesul unor copii cu nevoi speciale, copii diagnosticati cu Sindrom Down, la servicii medico-socio-info-educationale, care sa le maximizeze sansele integrarii, demne si cat mai independente in aceasta societate, din care si ei fac parte.</p>
              <p>Asociatia Prietenii D.A.R.I.E.I. s-a dovedit parte din comunitate inca de la infiintarea sa, a fost si continua sa fie alaturi de copii cu nevoi speciale, copii cu Sindrom Down, dar si de parintii acestora.</p>
              <div className='imgFetita'>
                <img src={Fetita} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='accordPresentation'>
          <animated.h2 style={titleAnimation}>Arii de interes ale Asociatiei Prietenii D.A.R.I.E.I. <span>in perioada 2015 - 2023</span> </animated.h2>
          <div className="accordion">
            <Accordion
              title="Terapia limbajului. Servicii logopedice de specialitate."
              content={
                <div>
                  <p>2017, 2018, 2019 - sedintele terapeutice de logopedie, cu frecventa saptamanala, decontate de Asociatia Prietenii D.A.R.I.E.I. au fost sustinute de catre specialist logoped, in spatiul apartinand Asociatiei de Interventie Terapeutica in Criza, Bucuresti, Sector 2. Beneficiar 1 copil special.</p>
                  <p>2020 - 2023 - Asociatia mareste numarul copiilor cu Sindrom Down care beneficiaza de sedinte terapeutice de logopedie si terapie ocupationala prestate prin Cabinetul Individual de Psihologie Burlacu Nicoleta, Sector 1, Bucuresti, conform contract existent intre parti. Sedintele se desfasoara saptamanal, cu prezenta fizica sau online. Beneficiari 3 copii speciali.</p>
                </div>
              }
              height={`500px`}
              color="#00a696"
            />
            <Accordion
              title="Tabere de integrare, ateliere, excursii."
              content={
                <div>
                  <h5>Taberele de integrare</h5>
                  <p>Organizate de catre Asociatia CONIL, acestea au avut ca obiective: expunerea copilului cu nevoi speciale la diversitate, cresterea stimei de sine, adaptarea copilului in natura, dezvoltarea independentei si a autonomiei, crearea de amintiri de neuitat, copiii experimentand viata la tara.</p>
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
              height={`1100px`}
              color="#147e96"
            />
            <Accordion
              title="Materiale didactice educative. Tiparituri, Jocuri."
              content={
                <div>
                  <p>Am oferit copiilor cu Sindrom Down si parintilor acestora o multime de jocuri si materiale didactice educative care sa le fie de un real ajutor, de-a lungul anilor.</p>
                  <ul>
                    <li>21.03.2017 - Ziua Internationala a Sindromului Down- Asociatia Prietenii D.A.R.I.E.I. achizitioneaza kituri Montesori ("Descopar Literele" - kit de invatare rapida a scrisului si cititului la o varsta frageda, "Descopar cifrele" - kit pentru invatarea numeratiei si pentru introducerea in aritmetica) in sprijinul unor copii cu Sindrom Down din cadrul Centrului de zi Down al Complexului de Servicii Sociale "Sfanta Ecaterina", apartinand Directiei Generale de Asistenta Sociala si Protectia Copilului Sector 1, Bucuresti.</li>
                    <li>25.01.2018 - CAIETUL PENTRU DICTIE SI COMUNICARE - MINIGHID LOGOPEDIC - Autor Valeria Balaban, INDREPTAR PENTRU CORECTAREA DIFICULTATILOR DE SCRIS-CITIT LA COPII - Autori Mihai BOLDAN si Steluta BOLDAN</li>
                    <li>11.07.2018 - SA VORBIM CU … PLACERE - carte autor coordonator prof dr Ecaterina VRASMAS, presedinta Asociatia RENINCO Romania, SA INVATAM CU … PLACERE - carte autor coordonator prof dr Ecaterina VRASMAS</li>
                    <li>25.09.2019 - CAIETUL PENTRU DICTIE SI COMUNICARE - MINIGHID LOGOPEDIC - Autor Valeria Balaban, INDREPTAR PENTRU CORECTAREA DIFICULTATILOR DE SCRIS-CITIT LA COPII - Autori Mihai BOLDAN si Steluta BOLDAN, GHIDUL PRONUNTARII CORECTE LA COPII - Autor Mihai BOLDAN, SA INVATAM CU …PLACERE (Fise de excercitii logopedice in comunicarea orala si scrisa) - realizator Asociatia RENINCO Romania, SA VORBIM CU …PLACERE ((Fise de excercitii logopedice in comunicarea orala si scrisa) - realizator Asociatia RENINCO Romania</li>
                    <li>01.10.2019 - Asociatia Prietenii D.A.R.I.E.I. daruieste pentru copiii Scolii Gimnaziale Speciale nr 2, Bucuresti produse de la SC OMFAL EDUCATIONAL SRL constand in jocuri si materiale educative, printre care:  Calendarul naturii, Piramida alimentatiei sanatoase, Provocare gandire critica, Balanta din lemn cu talere</li>
                    <li>4.03.2020 -  "Matematica"  - Manual clasa a IV a pentru scoli speciale - ajutatoare, Editura Didactica si Pedagogica, Bucuresti 1994, * "Limba Romana" - Marioara Popescu  - Manual clasa a IV a pentru scoli speciale , pentru elevi cu deficiente mintale moderate, Editura Didactica si Pedagogica</li>
                  </ul>
                </div>
              }
              height={`1700px`}
              color="#2d4e97"
            />
            <Accordion
              title="Sarbatorile prin ochii copiilor nostri."
              content={
                <div>
                  <p>Cu ocazia diverselor sarbatori de peste ani, Asociatia Asociatia Prietenii D.A.R.I.E.I. a pus bucurie in fiecare dar oferit copiilor speciali:</p>
                  <ul>
                    <li>6.06.2017 - 20 copii cu cerinte educationale speciale din cadrul Scolii Speciale nr 8, Bucuresti, primesc pachete cu daruri " Mos Nicolae" constand in: 20 cani ceai cu  poze reni, 20 buc. fructe (banane si mandarine), 20 pungi dulciuri haribo, 20 pungi cadou;</li>
                    <li>14.12.2017 - "Seara de aur a faptelor bune", Sala Ronda - Parcul Tei, Bucuresti -  Asociatia Prietenii D.A.R.I.E.I. ofera celor 100 de copii cu nevoi speciale prezenti la eveniment cate o carte tridimensionala cu denumirea "Mos Craciun si Ingerasii" sau "Activitati vesele de Craciun cu abtipilduri si felicitari" - produse magazin Jumbo</li>
                    <li>16.12.2017 - Asociatia Prietenii D.A.R.I.E.I. ofera persoanelor cu dizabilitati mentale gazduite de Caminul pentrul Ingrijirea Persoanelor cu Dizabilitati Mentale din orasul Voluntari, urmatoarele produse: 20 rucsaci  - magazinul Decathlon si 48 pachete napolitane - produse magazin LIDL.</li>
                    <li>12.12.2018 -  Asociatia PRIETENII D.A.R.I.E.I. participa la cea de-a doua editie a evenimentului numit "Seara de aur a faptelor bune" Sala Ronda - Parcul Tei, Bucuresti. Beneficiarii directi ai acestui eveniment sunt 100 copii cu cerinte educationale speciale, cu varste cuprinse intre 2 si 12 ani, invitati de catre organizatiile nonprofit participante. Asociatia PRIETENII D.A.R.I.E.I. ofera celor 100 de copii prezenti la eveniment, prin intermediul "Mosului": 100 farfurii metalice "Mos Craciun" si 100 prosopele "Mos Craciun", obiecte achizitionate de Asociatie in folosul copiilor, de la magazinul Jumbo.</li>
                    <li>18.12.2018 - Asociatia Prietenii D.A.R.I.E.I. ofera pentru copiii cu cerinte educationale speciale din cadrul Scolii Speciale nr 8, Bucuresti, materiale didactice cu scopul imbunataririi calitatii educationale: 17 seturi de carioca (pentru fiecare din cele 17 clase ale scolii) - 12 carti de colorat - 3 seturi educationale STIINTE NATURALE, OMUL SI MEDIUL INCONJURATOR si MATEMATICA SI ABILITATI NUMERICE;</li>
                    <li>01.11.2019 -  Asociatia Prietenii D.A.R.I.E.I. decide sa achizitioneze, spre incantarea si bucuria tuturor copiilor cu nevoi speciale care invata la Scoala Speciala nr 2, decoratiuni de iarna, ce urmeaza sa fie folosite la vedere, de catre scoala, doar in acest scop. Astfel, Asociatia va achizitiona de la SC JUMBO EC.RS SRL si va preda, cu titlu gratuit, reprezentantilor Scolii Gimnaziale Speciale nr 2 materiale decorative tipice sarbatorilor de iarna (* 25 fundite mari de Craciun si 25 fundite mici de Craciun pentru scara copiilor, * doua felinare cu miniproiector, * om de zapada luminous,* doua pergole luminoase)</li>
                    <li>01.12.2019 - spre bucuria celor 12 copii cu nevoi speciale care invata in clasa a V a A, Scoala Speciala nr 2, Asociatia daruieste decoratiuni de iarna, ce urmeaza sa fie folosite la vedere, in incinta clasei, dar si cadouri de Mos Nicolae pentru toti cei 12 copii ai clasei a V a A * brad artificial 122 cm (cu instalatie luminoasa) * Mos Craciun in picioare si decoratiuni brad (globulete - 4 modele, panglici de Craciun - doua modele, sort suport brad * panza decorativa din lana cu stelute rosii* 12 dosare cu elastic* 12 pachete coli groase de desen * 12 brelocuri paiete (smile si stea)* 12 seturi creative * 12 pungi de cadou. Achizitiile se fac de la urmatoarele magazine: JUMBO, BRICO DEPOT si LIDL</li>
                    <li>6.12.2019 - Asociatia se implica in actiunea organizata de Scoala Speciala nr 2,  intitulata "PRINTI SI PRINTESE LA BAL, de Mos Nicolae" - concurs de dans si alte abilitati artistice sustinut de catre copiii cu nevoi speciale din scoala, atat din ciclul primar, cat si din cel gimnazial, in acest sens, presedintele Asociatiei participa si in juriul acestui concurs si ofera copiilor participanti la concurs (aprox 40), globulete personalizabile, pe care Asociatia le achizitioneaza cu acest scop de la magazinul LIDL.</li>
                    <li>29.11.2021 - "MOS NICOLAE VINE LA CLASA!" - Asociatia achizitioneaza, spre incantarea si bucuria celor 11 copii cu nevoi speciale care invata in clasa a VII a A, la Scoala Gimnaziala Speciala nr 2, Bucuresti,  cadouri, constand in obiecte si decoratiuni specifice sarbatorilor de iarna, pe care le va preda, cu titlu gratuit, cadrelor didactice de la clasa. Copiii le vor putea descoperi la clasa, in dimineata zilei de 6 decembrie 2021. Achizitiile sunt facute de la: LIDL, magazine MINISO si JUMBO.</li>
                    <li>28.03.2022 -  "IEPURASUL VINE LA CLASA!" Asociatia ofera cadouri cu ocazia Sarbatorilor Pascale 2022, spre incantarea si bucuria celor 11 copii cu nevoi speciale care invata in clasa a VII a A, la Scoala Gimnaziala Speciala nr 2, Bucuresti. Aceste daruri constau in jocuri educationale de calcul matematic, de exersare a numaratului si a tablei inmultirii, alaturi de dulciuri specifice Sarbatorilor Pascale. Copiii le vor putea descoperi la clasa, in ziua de 12 aprilie 2022.</li>
                    <li>03.06.2022 "FINAL DE-A SAPTEA!" Asociatia daruieste celor 11 copii cu nevoi speciale care invata in clasa a VII a A, la Scoala Gimnaziala Speciala nr 2, Bucuresti,  CARTI DE FABULE DESCALCITE- Copiii le vor primi in ziua de 8 iunie, cu ocazia sfarsitului de an scolar, clasa a VII a A. Un exemplar ramane la clasa. Total carti predate: 12 bucati</li>
                    <li>09.12.2022 - MOS NICOLAE IN SCOALA" - Asociatia achizitioneaza pentru cei 12 copii cu nevoi speciale care invata in clasa a VIII a A, la Scoala Gimnaziala Speciala nr 2, Bucuresti, daruri pe care copiii clasei le vor primi in data de 06 decembrie 2022. Darurile constau in dulciuri si mici obiecte cu specific de iarna, alaturi de rechizite precum caiete si stilouri</li>
                    <li>08.12.2022 - pentru ca "Prietenii D.A.R.I.E.I." iubesc colindele, corul SUNETE VESELE - apartinand Cantus MUNDI, va colinda, prin cei 20 copii ai corului, la orele pranzului, Scoala Gimnaziala Speciala nr. 2, la sediul sau din strada Popa Petre, Bucuresti, ocazie cu care Asociatia intampina colindatorii cu daruri de iarna.</li>

                  </ul>

                </div>
              }
              height={`4000px`}
              color="#5f4296"
            />
            <Accordion
              title="Dezvoltare prin miscare si inot."
              content={
                <div>
                  <li>01.05.2018 - Asociatia Prietenii D.A.R.I.E.I. acopera costurile legate de sedintele de inot pentru copii diagnosticati cu Sindrom Down, sedinte de inot care se desfasoara in incinta CLUB FLOREASCA, din B-dul Mircea Eliade, Sector 1, Bucuresti. Beneficiari 2 copii speciali.</li>
                  <li>10.10.2018 - Asociatia Prietenii D.A.R.I.E.I. suporta costurile legate de participarea unor copii cu Sindrom Down la activitatea sportiva numita "body fly", un serviciu de agrement sportiv ce se desfasoara in perioada 23 octombrie - 17 noiembrie 2018, in incinta bazei sportive "Dinu Pescariu" , cu frecventa de 2 ori pe saptamana, conform contract incheiat intre parti. Beneficiari 3 copii speciali.</li>
                  <li>04.11.2018 Asociatia Prietenii D.A.R.I.E.I. este coorganizator al unui eveniment de tip sportiv, ce consta in escaladarea unui perete vertical interior, locatie  BLOKX Climbing Gym - Soseaua Fabrica de Glucoza nr. 15, Bucuresti, alaturi de alte asociatii organizatoare si participante: - Asociatia 321UP Bucuresti, - Asociatia Spontania Bucuresti -  specialisti terapeuti pe terapie comportamentala, - dna Maricica Ladaru - ventriloc si terapeut logoped. Beneficiari - 6 copii cu sindrom Down, 4 frati si 6 parinti insotitori.</li>
                  <li>20.01.2019 - a doua editie de escaladare perete vertical interior - Beneficiari: 15 copii cu Sindrom Down, frati si parinti, insotitori, locatie: BLOKX Climbing Gym - Soseaua Fabrica de Glucoza nr. 15, Bucuresti, alaturi de alte asociatii organizatoare si participante: - Asociatia 321UP Bucuresti. BLOKX Climbing Gym pune la dispozitie sala si antrenor de catarat. Asociatia PRIETENII D.A.R.I.E.I. sustine o parte din contravaloarea intrarii copiilor cu Sindrom Down la acest eveniment, respectiv o parte din cheltuielile de protocol.</li>
                  <li>01.07.2019 - Asociatia Prietenii D.A.R.I.E.I. acopera noile costuri legate de sedintele de inot pentru copii diagnosticati cu Sindrom Down, practicate de la 1 iulie 2019 in incinta locatiei CLUB FLOREASCA, din B-dul Mircea Eliade, Sector 1, Bucuresti. </li>
                  <li>12.2019 - Asociatia achizitioneaza de la SC ROUMASPORT SRL (DECATHLON) si va preda, cu titlu gratuit, reprezentantilor Scolii Gimnaziale Speciale nr 2, o scara flexibila de antrenament sportiv, care va intra in dotarea salii de sport a scolii.</li>
                  <li>1.07.2021 - HIDROKINETOTERAPIE - sedinte de inot cu instructor specializat, se desfasoara la CLUBUL SPORTIV DINAMO, in perioada iulie-august 2021, cu o frecventa de doua ori pe saptamana/copil. Beneficiari 3 copii cu Sindrom Down.</li>
                  <li>2.06.2022 - HIDROKINETOTERAPIE  - sedinte de inot cu instructor specializat, se desfasoara la CLUBUL SPORTIV DINAMO, in perioada iulie-septembrie 2022, cu o frecventa de doua ori pe saptamana/copil. Beneficiari 3 copii cu Sindrom Down.</li>

                </div>
              }
              height={`1700px`}
              color="#9a3794"
            />
            <Accordion
              title="Conferinte. Cursuri."
              content={
                <div>
                  <ul>
                    <li>26-27.10.2018 - Asociatia Prietenii D.A.R.I.E.I. este prezenta la conferinta "ACCES SI PARTICIPARE LA EDUCATIE PENTRU PERSOANELE CU DIZABILITATI" - ce se desfasoara la hotel International, Bucuresti (conferinta organizata de CNDR (Consiliul National sl Dizabilitatii din Romania) si ASOCIATIA RENINCO Romania (Retea Nationala de Informare si Cooperare pentru integrarea in comunitate a copiilor si tinerilor cu cerinte Educationale Speciale). Asociatia Prietenii D.A.R.I.E.I. devine membru RENINCO, incepand cu anul 2018, suportand contravaloarea cotizatiei anuale de membru.</li>
                    <li>09.07.2019 - Asociatia Prietenii D.A.R.I.E.I. achizitioneaza accesul permanent la cursuri online de parenting sustinute de doamna Urania Cremene, unul dintre cei mai apreciati experti in parenting din Romania, cu multe acreditari in domeniu, nationale si internationale. Cursurile on line sunt achizitionate de Asociatie in folosul imbunatatirii relatiei dintre parinti si copii cu Sindrom Down, respectiv cresterii calitatii interactiunii sociale dintre un copil cu Sindrom Down si un alt copil cu/fara Sindrom Down. Aceste cursuri sunt urmatoarele: "Conficte intre copii" si "All About Parenting" (AAP), ambele furnizate de catre SC EDU Parenting SRL.</li>
                    <li> Asociatia propune parintilor cu copii speciali, ori de cate ori are ocazia, cursuri de dezvoltare personala, cursuri de buna relationare intre copii si parinti, cursuri de gestionare corecta a emotiilor copiilor samd, cursuri in majoritatea lor gratuite, care se desfasoara online, in deosebi, de catre persoane acreditate in domeniu. </li>
                  </ul>
                </div>}
              height={`1100px`}
              color="#bc2d68"
            />
            <Accordion
              title="Socializare prin muzica, dans si film."
              content={
                <div>
                  <p>Asociatia Prietenii D.A.R.I.E.I. ofera unor copii cu nevoi speciale cadrul propice de socializare, fie prin participarea la evenimente socio-culturale, aflate in zona lor de interes, fie prin implicarea lor in cursuri de dans, fie prin "iesiri’ la film, care se dovedesc a fi extrem de iubite de ei.</p>
                  <ul>
                    <li>04.12. 2019 - GASCA ZURLI, Sala Palatului din Bucuresti, orele 19:00, pentru patru copii cu Sindrom Down si insotitorii acestora, biletele achizitionate online, site www.bilete.ro, de la SC DEPARTAMENTUL LOGISTIC EVENT SRL</li>
                    <li>noiembrie 2019 - contractare cursuri de dans in folosul copiilor cu SindromDown, prin Asociatia "Copiii au talent"</li>
                    <li>28.11.2019 - orga electronica YAHAMA PSR-F51, cu stativ, casti si adaptor orga, in fbeneficiul copiilor cu nevoi speciale din Scoala Speciala Gimnaziala nr. 2, Bucuresti, pentru orele de MELOTERAPIE. Furnizor:SC MEDIA CRUSHER SRL (Sound Creation) </li>
                    <li>21.03.2022 -"ZIUA INTERNATIONALA A COPIILOR CU SINDROM DOWN - La film"-Pentru marcarea acestei zile speciale pentru copiii cu sindrom down, Asociatia decide sa sustina costurile legate de vizionarea unui film la mall a unui grup de copii cu sindrom down, cu accent pe interactiunea sociala, cresterea conectivitatii, imbunatatirea starii de spirit. </li>
                    <li>1 iunie 2022, ora 18:00 - spectacol GASCA ZURLI, Arenele Romane, Bucuresti, Biletele sunt luate de pe platforma iabilet.ro. Beneficiari 10 copii speciali si insotitorii lor.</li>
                    <li>17.09.2022, ora 18:00 - spectacol ANDRA GOGAN, Arenele Romane, Bucuresti  Biletele sunt luate de pe platforma iabilet.ro. Beneficiari 7 copii speciali si insotitorii lor.</li>
                    <li>04.12.2022, ora 15:30 - spectacol IULIANA BEREGOI, Sala Palatului, Bucuresti, Biletele sunt luate de pe platforma iabilet.ro. Beneficiari 8 copii speciali si insotitorii lor.</li>
                    <li>02.12.2022 - "O ZI PETRECUTA IMPREUNA". Militand pentru integrarea in comunitate a copiilor cu  Sindrom Down, Prietenii D.A.R.I.E.I. invita copii sa-si petreaca timp impreuna la locul de joaca "HYPE ARENA" Romexpo, respectiv la Cineplexx Baneasa, la filmul Motanul Incaltat.</li>
                  </ul>
                </div>}
              height={`1500px`}
              color="#f1592a"
            />
            <Accordion
              title="IT-ul, indragit si de copiii speciali"
              content={
                <div>
                  <p>Asociatia Prietenii D.A.R.I.E.I. suporta costurile de achizitie pentru urmatoarele materiale de tehnica vizuala, cu scop de suport educational, dar si socio-integrator, pentru copii cu nevoi speciale, copii cu sindrom down, din clasa a VI a A, Scoala Gimnaziala Speciala nr. 2, Bucuresti:</p>
                  <p>15.12.2020</p>
                  <ul>
                    <li>DISPLAY INTERACTIV SMART BOARD MX265-V2 EDUCATIONAL 65", 16:10</li>
                    <li>Furnizor: 24 EVONESS SRL, asigura ore de consultanta in utilizarea acestui echipament IT</li>
                    <li>Aceasta tabla smart interactiva este folosita cu succes de catre profesorii clasei si s-a dovedit extrem de utila si indragita de copii.</li>
                  </ul>
                  <p>11.03.2021 </p>
                  <ul>
                    <li>TABLA MAGNETICA ALBA VISUAL 120*220 cm (cu accesorii markere, burete, magneti, spray curatare),</li>
                    <li>Furnizor: ABSOLUT OFFICE ONLINE SRL</li>
                  </ul>
                  <p>20.12.2021</p>
                  <ul>
                    <li>3 TABLETE LENOVO TAB M10 TB-X606X 10.3 32GB 2GB RAM W-FI si husele aferente pentru copii cu nevoi speciale, din  Scoala Gimnaziala Speciala nr 2, Bucuresti. Achizitia este facuta de la magazinul "Altex".</li>
                  </ul>
                </div>}
              height={`900px`}
              color="#f1b02a"
            />
          </div>
        </div>
        <div className="signoff">
          <h5>Prin urmare, "Prietenii D.A.R.I.E.I." sunt oamenii cu suflet mare care o sustin pe Daria si pe cei asemeni ei, nascuti cu acest fel de a fi numit Sindrom Down, sa-si gaseasca locul onest si demn in societate.</h5>
          <p>Acesti copii declanseaza in noi procese permanente de cultivare interioara a rabdarii si a empatiei, ne reactiveaza resorturile de echilibru si forta interioara.</p>
          <p>Acesti copii, prin iubirea pe care ne-o intorc, chiar sunt speciali, asa cum este trifoiul cu patru foi in lanul de trifoi…aparte. Nu este intotdeauna usor, mai pierdem uneori busola rabdarii si cand uitam sa zambim, copiii nostri speciali ne predau din nou si din nou lectia iubirii, prin imbratisarile lor, caci, te asiguram: cu greu gasesti pe lumea asta copii dornici sa-ti arate permanent iubirea, asa cum o fac copiii cu Sindrom Down! Pur si simplu, iti cuprind obrajii in maini si te saruta pana uiti de toate…</p>
          <p className='finMes'>
            De aici ne luam energia de a continua!
            <br />
            ... si-ti multumim tie pentru timpul oferit!
          </p>
        </div>
        <div className='picEnd'>
          <img src={Pic} alt="" width={300} />
        </div>
      </div>
    </div>
  );
}

export default CunoasteNe
