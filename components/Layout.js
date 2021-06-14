import React from 'react'
import MyNavbar from './MyNavbar'
import MouseCircle from './MouseCircle';
import useMousePosition from '../components/useMousePosition';

const Layout = ({ children }) => {
  
  const { x, y } = useMousePosition();
  // const movingCursor = typeof x === "number" && typeof y === "number";

  return (
    <>
    <MyNavbar />
    <div>
      {/* {movingCursor && `${x}, ${y}`} */}
      <MouseCircle xPos={x} yPos={y} />
    </div>
      {children}
    </>
  )
}

export default Layout
