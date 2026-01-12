import { Fragment } from 'react'
import "../styling/scrisori.scss"
import { useNavigate, useParams, Link } from 'react-router-dom'

const context = require.context('./Singles', false, /Single20\d\d\.jsx$/);
const posts = context.keys().map((key) => context(key).default);

const Scrisori = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  posts.sort((a,b) => b().yearId - a().yearId);

  const calculateStyle = (index) => {
    if (index === -1) return {};
    const step = 360 / posts.length; 
    const rotation = Math.floor(step * index);
    return { filter: `hue-rotate(${rotation}deg)` };
  }

  let content;

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
        
        {posts.map( (post, index) => {
          const dynamicStyle = calculateStyle(index);
          
          return (
            <Fragment key={index}>
              <div className="post" style={dynamicStyle}>
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
                }}>Citeste mai mult</button>
              </div>
              {index !== posts.length - 1 && (
                <div className="separator">
                  <div className="line"></div>
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
  } else {
    const foundIndex = posts.findIndex(post => post().yearId === parseInt(id));
    
    let renderContent;
    let dynamicStyle = {};

    if (foundIndex !== -1) {
       const obj = posts[foundIndex]();
       renderContent = obj.content;
       dynamicStyle = calculateStyle(foundIndex);
    } else {
       renderContent = <h1>Undefined</h1>;
    }

    content =
     <div className="postContent">
        <div className="textWrap" style={dynamicStyle}>
          <button className='back' onClick={() => {
            navigate("/scrisori");
            window.scrollTo(0, 0);
          }}>Inapoi</button>
          <div className="text">
            {renderContent}
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