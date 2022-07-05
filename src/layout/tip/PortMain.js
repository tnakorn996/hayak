import React from 'react'
import ReactDOM from "react-dom"

function PortMain(portmainstatic) {
  return ReactDOM.createPortal(portmainstatic.children, document.body)
}

export default PortMain