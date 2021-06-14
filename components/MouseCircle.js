import React from 'react'

const MouseCircle = ({ xPos, yPos }) => {
  return (
    <>
      <circle
        style={{
          backgroundColor: 'blue',
          display: 'inline-block',
          borderRadius: '50%',
          width: '10px',
          height: '10px',
          // width: `${xPos}px`,
          // height: `${yPos}px`
        }}
      ></circle>
    </>
  )
}

export default MouseCircle