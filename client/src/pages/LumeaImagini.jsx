import React from 'react'
import "../styling/lumeaimagini.scss"
import AlbumPre2023 from '../resources/AlbumPre2023';
import Album2023 from '../resources/Album2023';
import useScript from '../components/useScript';

const LumeaImagini = () => {
  useScript("https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js");

  return (
    <div className="lumeamea">
      <div className="centered">
        {AlbumPre2023()}
        {Album2023()}
      </div>
    </div>
  )
}

export default LumeaImagini