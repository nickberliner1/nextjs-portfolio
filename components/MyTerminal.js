import React from 'react'
import Terminal from 'terminal-in-react';

const MyTerminal = () => {
  return (
    <div style={{ 
      borderRadius: '30px',
      border: '3px solid red'
    }}>
      <Terminal
        color="black"
        backgroundColor="green"
      />
    </div>
  )
}

export default MyTerminal
