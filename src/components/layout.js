import React from 'react'

import Seo from './seo'
import NavBar from './navbar'
import './variables.css'
import './global.css'

const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Template
