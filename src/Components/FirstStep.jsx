import React from 'react'
import './css/FirstStep.css'

const FirstStep = ({Act1, Act2, Act3, Act4, Act5, Act6, Act7, name, CPF , Telefone, mail , Nascimento, Altura, Peso}) => {

  return (
    <div className='Form'>
      <div className="Input-Label">
        <label> Nome: </label>
          <input 
          type="text"
          placeholder='Nome'
          required 
          value={name}
          onChange={Act1}/>
      </div>

      <div className="Input-Label">
        <label> CPF: </label>
          <input 
          type="text"
          placeholder='CPF'
          required 
          value={CPF}
          onChange={Act2}/>
      </div>

      <div className="Input-Label">
        <label> Telefone: </label>
          <input 
          type="text"
          placeholder='(99) 9 9999-9999'
          required 
          value={Telefone}
          onChange={Act3}/>
      </div>

      <div className="Input-Label">
        <label> E-mail:</label> 
          <input 
          type="text"
          placeholder='E-mail'
          required 
          value={mail}
          onChange={Act4}/>
      </div>

      <div className="Input-Label">
        <label> Nascimento:</label> 
          <input 
          type="text"
          placeholder='Data de Nascimento'
          required 
          value={Nascimento}
          onChange={Act5}/>
      </div>

      <div className="Input-Label">
        <label> Altura:</label> 
          <input 
          type="text"
          placeholder='Altura'
          required 
          value={Altura}
          onChange={Act6}/>
      </div>

      <div className="Input-Label">
        <label> Peso:</label> 
          <input 
          type="text"
          placeholder='Peso'
          required 
          value={Peso}
          onChange={Act7}/>
      </div>
    </div>
  )
}

export default FirstStep