import React from 'react'

import * as styles from './button.module.css'

const Button = ({ children, link, target }) => {
  const linkTarget = target ? target : '_self'

  return (
    <button className={styles.btn} href={link} target={linkTarget}>
      <span className={styles.btnHorizontal}></span>
      {children}
      <span className={styles.btnVertical}></span>
    </button>
  )
}

export default Button
