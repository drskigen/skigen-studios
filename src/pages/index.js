import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../layout/hero'

const RootIndex = ({ data }) => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default RootIndex
