import React from 'react'

import Panel from '../components/panel'
import Button from '../components/button'
import * as styles from './hero.module.css'

const Hero = () => {
  return (
    <Panel className={styles.hero}>
      <div>
        <h1>Skigen Studios</h1>
        <h2 className={styles.valueProp}>
          Lorem ispum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p>
          Skigen Studios is ispum dolor sit amet, consectetur adipiscing elit
        </p>
        <Button link="#">Contact Us</Button>
      </div>
    </Panel>
  )
}

export default Hero
