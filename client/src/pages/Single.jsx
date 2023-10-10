import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
// import moment from 'moment'
import DOMPurify from "dompurify";

import "../styling/single.scss"

import LoadingSpinner from "../components/Spinner";
import { AuthContext } from '../context/authContext';
import Edit from '../resources/edit.png'
import Delete from '../resources/delete.png'

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const Single = () => {
  const [post, setPost] = useState({})

  const { user, accessToken } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const [isLoading, setIsLoading] = useState(true);

  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

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

  const handleDelete = async () => {
      try {
          await axios.delete(process.env.REACT_APP_API_URL + `posts/${postId}`, { data: { token: accessToken } })
          navigate("/campanii")
      } catch (err) {
          console.log(err)
      }
  }

  if (isLoading) {
    return (
      <LoadingSpinner />
    )
  } else return (
    <div className='single'>
      <div className="content">
        { //TO DO added / updated xxx time ago
        /* <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div> */}

        <div className="toprow">
          <h1>{post.title}</h1>

          {process.env.REACT_APP_ADMIN_USERNAME === user &&
            <div className="edit">
              <Link to={`/write`} state={post} className='linkimg'><img src={Edit} alt="" /></Link>
              <img onClick={handleDelete} src={Delete} alt="" className='linkimg'/>
            </div>}
        </div>

        <div className="textt"><p dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.desc),
        }}></p></div>

    
        { // TODO : add gallery
        /* <div className='photos'>
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