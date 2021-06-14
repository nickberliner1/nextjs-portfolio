import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/navbar.module.scss';

const MyNavbar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.nav}>
      {isOpen ?
      <ul>
        <li>
          <Link href='/'>Home</Link>
          <Link href='/experience'>Experience</Link>
          <Link href='/'>Passions</Link>
          <Link href='/api'>Projects</Link>
        </li>
      </ul>
      :
      null}
      <div
        className={styles.toggleNavbar}
        onClick={toggleNavbar}
      >X</div>
    </nav>
  )
}

export default MyNavbar;