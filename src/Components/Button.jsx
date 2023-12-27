import React from 'react'

import './css/Button.css'

const Button = ({id, Text, action}) => {

  const HandleAction = (e) => {
    e.preventDefault()
    action(e);
  }

  return (
    <button id={id} onClick={HandleAction}> {Text} </button>
  )
}

export default Button