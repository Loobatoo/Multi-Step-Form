import React from 'react'

import './css/FirstStep.css'

const FirstStep = () => {
  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Nome: </label>
          <input 
          type="text"
          placeholder='nome'
          required />
      </div>

      <div className="Input-Label">
        <label> E-mail:</label> 
          <input 
          type="text"
          placeholder='e-mail'
          required />
      </div>

    </div>
  )
}

export default FirstStep