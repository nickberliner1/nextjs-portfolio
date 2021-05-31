import React from 'react'
import MyNavbar from './MyNavbar'

const Layout = ({ children }) => {
  return (
    <>
    <MyNavbar />
      {children}
    </>
  )
}

export default Layout
