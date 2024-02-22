import React from 'react'
import "../styling/scrisori.scss"
import {useParams} from 'react-router-dom'
import Single2024 from './Singles/Single2024'

const Scrisori = () => {
  
  const { id } = useParams();

  console.log(id)

  let content = <h1>Undefined</h1>;

  if (!id) {
    content = 
    <>
      <h1>All scrisori</h1>  
    </>
  } else {
    switch (id) {
      case '2024':
        content = Single2024()
        break;
    }
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