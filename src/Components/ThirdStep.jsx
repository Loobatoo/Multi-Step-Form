import React from 'react'
import './css/FirstStep.css'

const FirstStep = ({Act1, Act2, Act3, Act4, Act5, Act6, Act7, Placa, Marca, Modelo, Ano, Cor, Kilometragem}) => {

  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Placa: </label>
          <input 
          type="text"
          placeholder='Placa'
          required 
          value={Placa}
          onChange={Act1}/>
      </div>

      <div className="Input-Label">
        <label> Marca: </label>
          <input 
          type="text"
          placeholder='Marca'
          required 
          value={Marca}
          onChange={Act2}/>
      </div>

      <div className="Input-Label">
        <label> Modelo: </label>
          <input 
          type="text"
          placeholder='Modelo'
          required 
          value={Modelo}
          onChange={Act3}/>
      </div>

      <div className="Input-Label">
        <label> Ano:</label> 
          <input 
          type="text"
          placeholder='Ano'
          required 
          value={Ano}
          onChange={Act4}/>
      </div>

      <div className="Input-Label">
        <label> Cor:</label> 
          <input 
          type="text"
          placeholder='Cor'
          required 
          value={Cor}
          onChange={Act5}/>
      </div>

      <div className="Input-Label">
        <label> Kilometragem:</label> 
          <input 
          type="text"
          placeholder='Kilometragem'
          required 
          value={Kilometragem}
          onChange={Act6}/>
      </div>
    </div>
  )
}

export default FirstStep