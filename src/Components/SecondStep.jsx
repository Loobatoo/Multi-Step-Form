import React from 'react'
import './css/FirstStep.css'

const FirstStep = ({Act1, Act2, Act3, Act4, Act5, Act6, Rua, Numero, Complemento, Cep, Bairro, Estado}) => {

  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Rua: </label>
          <input 
          type="text"
          placeholder='Rua'
          required 
          value={Rua}
          onChange={Act1}/>
      </div>

      <div className="Input-Label">
        <label> Numero: </label>
          <input 
          type="text"
          placeholder='Numero'
          required 
          value={Numero}
          onChange={Act2}/>
      </div>

      <div className="Input-Label">
        <label> Complemento: </label>
          <input 
          type="text"
          placeholder='Complemento'
          required 
          value={Complemento}
          onChange={Act3}/>
      </div>

      <div className="Input-Label">
        <label> CEP: </label>
          <input 
          type="text"
          placeholder='CEP'
          required 
          value={Cep}
          onChange={Act4}/>
      </div>

      <div className="Input-Label">
        <label> Bairro: </label>
          <input 
          type="text"
          placeholder='Bairro'
          required 
          value={Bairro}
          onChange={Act5}/>
      </div>

      <div className="Input-Label">
        <label> Estado: </label>
          <input 
          type="text"
          placeholder='Estado'
          required 
          value={Estado}
          onChange={Act6}/>
      </div>
    </div>
  )
}

export default FirstStep