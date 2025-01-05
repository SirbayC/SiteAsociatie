import React from 'react'
import "../styling/lumeaimagini.scss"
import Gallery from "react-photo-gallery";
import { p20152022 } from "../resources/pics/2015-2022/photos";

const LumeaImagini = () => {
  const BasicRows = () => <Gallery photos={p20152022} />;
  return (
    <div className="lumeamea">
      <div className="centered">
        <BasicRows />
      </div>
    </div>
  )
}

export default LumeaImagini