import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Galerie = () => {

  const [text, setText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL)
        setText(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Galerie</h1>
      <p>{text}</p>
    </div>
  )
}

export default Galerie