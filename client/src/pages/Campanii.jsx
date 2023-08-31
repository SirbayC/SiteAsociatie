import React, { useEffect, useState } from 'react'
import DefaultNoPostPic from "../resources/defaultNoImgPost.jpg"
import { Link } from 'react-router-dom'
import axios from "axios";

const Campanii = () => {

  const [posts, setPosts] = useState([])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='campanii'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              {/*todo: define how pics are handled*/}
              {post.img ? <img src={`../uploads/${post.img}`} alt="" /> : <img src={DefaultNoPostPic} alt="imagine postare" />}
            </div>
            <div className="content">
              <Link className='link' to={`/campanii/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <div className='description'>
                {getText(post.desc)}
              </div>
              <Link className='link' to={`/campanii/${post.id}`}>
                <button>Citeste mai mult</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Campanii