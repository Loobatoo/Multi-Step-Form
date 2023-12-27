import './App.css';

import { useState } from 'react';
import { useForm } from './Hooks/useForm';

import Button from './Components/Button';

import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';

function App() {

  const ComponentsForm = [<FirstStep/>, <SecondStep/>, <ThirdStep/>]

  const {ActualStep, ActualComponent, ChangeStep} = useForm(ComponentsForm)

  return (
    <>
      <div className="Header">
        <h1>Deixe sua avaliação</h1>
        <h2>Sua avaliação nos ajuda a melhorar nossos serviços.</h2>
      </div>
      <div className="Container">
        <div className="Form-Container">
          <p>Etapas</p>
        </div>
        <div className="Step-Container">
          {ActualComponent}
        </div>
        <div className="Actions">
          <Button id="Voltar" Text="Voltar" action={() => ChangeStep(ActualStep - 1)} />
          <Button id="Próximo" Text="Próximo" action={() => ChangeStep(ActualStep + 1)} />
        </div>
      </div>
    </>
  )
}

export default App