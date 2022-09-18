import React from 'react'

import Seo from './seo'
import Nav from './nav'
import './variables.css'
import './global.css'

const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Template
