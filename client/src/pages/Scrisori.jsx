import React, { Fragment } from 'react'
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
      case '2021':
        content = Single2021().content
      break;
      case '2020':
        content = Single2020().content
      break;
      case '2019':
        content = Single2019().content
      break;
      case '2018':
        content = Single2018().content
      break;
      case '2017':
        content = Single2017().content
      break;
      case '2016':
        content = Single2016().content
      break;
      case '2015':
        content = Single2015().content
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