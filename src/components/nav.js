import React from 'react'

import * as styles from './nav.module.css'
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

  return (
    <div className={styles.navBackground}>
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
