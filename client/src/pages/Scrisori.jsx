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
      <div>
        <h1>All scrisori</h1>
        {posts.map(post => (
          <Fragment key={post().yearId}>
            <div className="post">
              <Link className='link' to={`/scrisori/${post().yearId}`}>
                <h2>{post().yearId}</h2>
              </Link>
            </div>
            <div className="description">
              {post().desc}
            </div>
            <button onClick={() => navigate(`/scrisori/${post().yearId}`)}>Citest mai mult</button>
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
  }

  return (
    <div className="scrisoare">
      <div className="centered">
        {id && <button className='back' onClick={() => navigate("/scrisori")}>Back</button>}
        {content}
      </div>
    </div>
  )
}

export default Scrisori