import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import "../styling/single.scss"

import LoadingSpinner from "../components/Spinner";
import Edit from '../resources/edit.png'
import Delete from '../resources/delete.png'

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const Single = () => {
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  return (
    <div>
      <h1>{postId}</h1>
    </div>
  )
}

export default Single