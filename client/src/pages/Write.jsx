import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import '../styling/write.scss'

const Write = () => {
  // const state = useLocation().state

  const [value, setValue] = useState("")
  const [title, setTitle] = useState("")

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
      // const postData = {
      //   title,
      //   desc: value,
      //   cat,
      //   img: newUrl,
      //   date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      // }
      // await axios.post("/posts/", postData)
      navigate("/")
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
        <button onClick={handleSubmit}>Publica</button>
      </div>
    </div>
  )
}

export default Write