import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Hero from '../components/hero'

const Template = ({ children }) => {
  return (
    <>
      <Seo />
      <Hero />
      <main>{children}</main>
    </>
  )
}

export default Template
