import React from 'react'

import './css/Button.css'

const Button = ({id, Text, action, disabled}) => {

  const HandleAction = (e) => {
    e.preventDefault()
    action(e);
  }

  return (
    <button id={id} onClick={HandleAction} disabled={disabled}> {Text} </button>
  )
}

export default Button