import React from 'react'
import Logo from "../resources/logo_white.png"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made with love and <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer