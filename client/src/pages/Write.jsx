import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import '../styling/write.scss'
import { AuthContext } from '../context/authContext';

const Write = () => {
  const { accessToken } = useContext(AuthContext)
  const state = useLocation().state

  console.log(state)

  const [value, setValue] = useState(state?.desc || "")
  const [title, setTitle] = useState(state?.title || "")

  const navigate = useNavigate()

  // const upload = async () => {
  //     try {
  //         const formData = new FormData();
  //         formData.append("file", file)
  //         const res = await axios.post("/upload", formData)
  //         return res.data
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (state) {
        const postData = {
          token: accessToken,
          title: title,
          content: value,
          dateUpdated: moment(Date.now()).format("YYYY/MM/DD hh:mm:ss"),
          author: process.env.REACT_APP_ADMIN_USERNAME,
        }
        await axios.put(process.env.REACT_APP_API_URL + `posts/${state.id}`, postData)
      } else {
        const postData = {
          token: accessToken,
          title: title,
          content: value,
          dateCreated: moment(Date.now()).format("YYYY/MM/DD hh:mm:ss"),
          dateUpdated: moment(Date.now()).format("YYYY/MM/DD hh:mm:ss"),
          author: process.env.REACT_APP_ADMIN_USERNAME,
        }
        await axios.post(process.env.REACT_APP_API_URL + "posts/", postData)
      }
      navigate("/campanii")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="writefull">
      <div className="content">
        <div className="title">
          <input type="text" defaultValue={title} placeholder='Titlu' onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        <button onClick={handleSubmit}>
          {state ? 'Salveaza modificari' : 'Publica'}
        </button>
      </div>
    </div>
  )
}

export default Write