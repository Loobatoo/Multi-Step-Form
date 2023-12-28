import React from 'react'

import { useState } from 'react'

import './css/FirstStep.css'

const FirstStep = ({Act1, Act2, name, mail}) => {

  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Nome: </label>
          <input 
          type="text"
          placeholder='nome'
          required 
          value={name}
          onChange={Act1}/>
      </div>

      <div className="Input-Label">
        <label> E-mail:</label> 
          <input 
          type="text"
          placeholder='e-mail'
          required 
          value={mail}
          onChange={Act2}/>
      </div>

    </div>
  )
}

export default FirstStep