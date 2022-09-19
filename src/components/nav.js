import React, { useState } from 'react'

import * as styles from './nav.module.css'
import Logo from '../icons/logo-dark.svg'
import LogoBkg from '../icons/logo-bkg-light.svg'

const Nav = () => {
  const NavItems = [
    {
      title: 'Web Dev',
      link: '#',
    },
    {
      title: 'Photo',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
    {
      title: 'Blog',
      link: '#',
    },
    {
      title: 'Contact',
      link: '#',
    },
  ]
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

    const delay = getComputedStyle(e.currentTarget).getPropertyValue(
      '--delay'
    ) || 400;
    const animation = getComputedStyle(e.currentTarget).getPropertyValue(
      '--animation'
    ) || 1000;
    const animDur = parseInt(delay) + parseInt(animation);

    if (navState === 'closed') {
      setnavState('animIn')
      setTimeout(() => {
        setnavState('open')
      }, animDur)
    } else if (navState === 'open') {
      setnavState('animOut')
      setTimeout(() => {
        setnavState('closed')
      }, animDur)
    }
  }

  return (
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
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NavItems.map((item, i) => {
              return (
                <li className={styles.navItem} key={i}>
                  <a href={item.link}>{item.title}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.bkgLogo}>
          <LogoBkg />
        </div>
      </div>
    </div>
  )
}

export default Nav
