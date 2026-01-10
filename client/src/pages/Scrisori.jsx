import { Fragment } from 'react'
import "../styling/scrisori.scss"
import { useNavigate, useParams, Link } from 'react-router-dom'
import Single2024 from './Singles/Single2024'
import Single2023 from './Singles/Single2023'
import Single2022 from './Singles/Single2022'
import Single2021 from './Singles/Single2021'
import Single2020 from './Singles/Single2020'
import Single2019 from './Singles/Single2019'
import Single2018 from './Singles/Single2018'
import Single2017 from './Singles/Single2017'
import Single2016 from './Singles/Single2016'
import Single2015 from './Singles/Single2015'

const Scrisori = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let content;

  const posts = [Single2024,Single2022,Single2023,Single2021,Single2020,Single2019,Single2018,Single2017,Single2016,Single2015]
  posts.sort((a,b) => b().yearId - a().yearId)

  if (!id) {
    content =
      <div className='posts'>
        <div className="pre">
          <h2>Scrisori catre Prieteni</h2>
          <div className="prestext">
            <p>Asociatia Prietenii D.A.R.I.E.I. organizeaza campanii de strangere de fonduri prin intermediul "Scrisorilor catre Prieteni". </p>
            <p>Aceste “scrisori” se adreseaza sustinatorilor Asociatiei Prietenii D.A.R.I.E.I. si descriu principalele actiuni implementate, in decursul anului anterior scrierii acestora, pentru sufletele cu nevoi speciale, in numele carora actioneaza.</p>
          </div>
        </div>
        
        {posts.map( (post,index) => (
          <Fragment key={index}>
            <div className="post" style={post().stylingFilter}>
              <Link className='link minCont' onClick={() => {
                navigate(`/scrisori/${post().yearId}`);
                window.scrollTo(0, 0);
              }}>
                <h2>{post().yearId}</h2>
              </Link>
              <div className="description">
                {post().desc}
              </div>
              <button onClick={() => {
                navigate(`/scrisori/${post().yearId}`);
                window.scrollTo(0, 0);
              }}>Citest mai mult</button>
            </div>
            {index !== posts.length - 1 && (
              <div className="separator">
                <div className="line"></div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
  } else {

    let obj;
    if (id <= 2024 && id >= 2015) {
      obj = posts.find( post => post().yearId === parseInt(id))
    } else {
      obj = {
        content: <h1>Undefined</h1>,
        stylingFilter: ""
      }
    }
    content = obj().content
    const stl = obj().stylingFilter

    content =
     <div className="postContent">
        <div className="textWrap" style={stl}>
          <button className='back'  onClick={() => {
            navigate("/scrisori");
            window.scrollTo(0, 0);
          }}>Inapoi</button>
          <div className="text">
            {content}
          </div>
        </div>
     </div> 
  }

  return (
    <div className="scrisoare">
      <div className="centered">
        {content}
      </div>
    </div>
  )
}

export default Scrisori