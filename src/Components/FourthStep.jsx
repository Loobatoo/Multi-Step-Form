import React from 'react'
import './css/FirstStep.css'

const FirstStep = ({Act1, Act2, Usuario, Senha}) => {

  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Usuário: </label>
          <input 
          type="text"
          placeholder='Usuario'
          required 
          value={Usuario}
          onChange={Act1}/>
      </div>

      <div className="Input-Label">
        <label> Senha: </label>
          <input 
          type="text"
          placeholder='Senha'
          required 
          value={Senha}
          onChange={Act2}/>
      </div>
    </div>
  )
}

export default FirstStep