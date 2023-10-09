import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
// import Menu from '../components/Menu'
// import Edit from "../img/edit.png"
// import Delete from "../img/delete.png"
import axios from 'axios'
// import moment from 'moment'
// import { AuthContext } from '../context/authContext'
// import DefaultNoPostPic from "../img/defaultNoImgPost.jpg"
import DOMPurify from "dompurify";
import "../styling/single.scss"
import LoadingSpinner from "../components/Spinner";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const Single = () => {
  const [post, setPost] = useState({})

  const location = useLocation()
  // const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  // const { currentUser } = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `posts/${postId}`)
        setPost(res.data)
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  // const handleDelete = async () => {
  //     try {
  //         await axios.delete(`/posts/${postId}`)
  //         navigate("/")
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }

  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  } else return (
    <div className='single'>
      <div className="content">
        {/* {post.img ? <img src={`../uploads/${post.img}`} alt="" /> : <img src={DefaultNoPostPic} alt="" />} */}
        {/* <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser && (currentUser.username === post.username) &&
                        <div className="edit">
                            <Link to={`/write`} state={post}><img src={Edit} alt="" /></Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    }
                </div> */}
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.desc),
        }}></p>
        {/* <div className='photos'>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div> */}
      </div>
    </div>
  )
}

export default Single