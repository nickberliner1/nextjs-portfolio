import React from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import MouseCircle from '../MouseCircle';
import useMousePosition from '../hooks/useMousePosition';

const Layout = ({ children }) => {
  
  return (
    <>
    <MyNavbar />
      {children}
    </>
  )
}

export default Layout
