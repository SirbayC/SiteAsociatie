import React, { useEffect, useState } from 'react'
import DefaultNoPostPic from "../resources/defaultNoImgPost.jpg"
import { Link } from 'react-router-dom'
import axios from "axios";
import LoadingSpinner from "../components/Spinner";
import "../styling/campanii.scss"

const Campanii = () => {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `posts`)
        setPosts(res.data.sort((a, b) => a.id - b.id))
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  } else return (
    <div className='campanii'>
      <div className="posts">
        {posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <div className="post">
              <Link className='titlelink link' to={`/campanii/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <div className='description'>
                {getText(post.desc)}
              </div>
              <Link className='titlelink link' to={`/campanii/${post.id}`}>
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