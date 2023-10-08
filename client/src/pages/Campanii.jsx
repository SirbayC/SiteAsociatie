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
        const res = await axios.get(process.env.REACT_APP_API_URL + `posts`)
        setPosts(res.data.sort((a, b) => a.id - b.id))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='campanii'>
      <div className="posts">
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <div className="post">
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
            {index !== posts.length - 1 && (
              <div className='separator'>
                <div className='line'></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Campanii