import React from 'react'
import Link from 'next/link'

import styles from '../styles/navbar.module.scss';

const MyNavbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MyNavbar;