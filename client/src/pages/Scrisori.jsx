import React, { Fragment } from 'react'
import "../styling/scrisori.scss"
import { useNavigate, useParams, Link } from 'react-router-dom'
import Single2024 from './Singles/Single2024'
import Single2023 from './Singles/Single2023'
import Single2022 from './Singles/Single2022'

const Scrisori = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let content;

  const posts = [Single2024, Single2022,Single2023]
  posts.sort((a,b) => b().yearId - a().yearId)

  if (!id) {
    content =
      <div className='posts'>
        <h1>All scrisori</h1>
        {posts.map( (post,index) => (
          <Fragment key={index}>
            <div className="post">
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
    switch (id) {
      case '2024':
        content = Single2024().content
        break;
      case '2023':
        content = Single2023().content
        break;
      case '2022':
        content = Single2022().content
        break;
      default:
        content = <h1>Undefined</h1>
    }
    content =
     <div className="postContent">
        <button className='back' onClick={() => {
          navigate("/scrisori");
          window.scrollTo(0, 0);
        }}>Back</button>
        {content}
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