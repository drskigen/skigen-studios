import React, { useState } from 'react'

import Nav from './nav'

import * as styles from './navbar.module.css'
import Logo from '../icons/logo-dark.svg'

const NavBar = () => {
  const [navState, setnavState] = useState('closed')

  let burgerClass = styles.burger

  switch (navState) {
    case 'closed':
      burgerClass = styles.burger
      break
    case 'animIn':
      burgerClass = `${styles.burger} ${styles.burgerAnimIn}`
      break
    case 'animOut':
      burgerClass = `${styles.burger} ${styles.burgerAnimOut}`
      break
    case 'open':
      burgerClass = `${styles.burger} ${styles.burgerOpen}`
      break
    default:
      burgerClass = styles.burger
      break
  }

  const burgerClick = (e) => {
    if (navState === 'animIn' || navState === 'animOut') {
      return
    }

    const delay =
      getComputedStyle(e.currentTarget).getPropertyValue('--delay') || 400
    const animation =
      getComputedStyle(e.currentTarget).getPropertyValue('--animation') || 1000
    const animDur = parseInt(delay) + parseInt(animation)

    if (navState === 'closed') {
      document.body.classList.add(styles.bodyNavOpen)
      setnavState('animIn')
      setTimeout(() => {
        setnavState('open')
      }, animDur)
    } else if (navState === 'open') {
      document.body.classList.remove(styles.bodyNavOpen)
      setnavState('animOut')
      setTimeout(() => {
        setnavState('closed')
      }, animDur)
    }
  }

  return (
    <header>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.burgerContainer}>
          <button className={burgerClass} onClick={(e) => burgerClick(e)}>
            <span className={styles.burgerTopBun}></span>
            <span className={styles.burgerMeat}></span>
            <span className={styles.burgerBottomBun}></span>
            <span className="sr-only">Toggle Navigation</span>
          </button>
        </div>
      </div>
      {navState === 'open' && <Nav />}
    </header>
  )
}

export default NavBar
