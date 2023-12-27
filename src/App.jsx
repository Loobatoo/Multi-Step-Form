import './App.css';

import { AiOutlineStar,AiOutlineUser,AiOutlineSend } from 'react-icons/ai';

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
          <AiOutlineUser className={ActualStep >= 0 ? "Active" : ""} onClick={() => ChangeStep(0)}/>
          <AiOutlineStar className={ActualStep >= 1 ? "Active" : ""} onClick={() => ChangeStep(1)}/>
          <AiOutlineSend className={ActualStep === 2 ? "Active" : ""} onClick={() => ChangeStep(2)}/>
        </div>
        <div className="Step-Container">
          {ActualComponent}
        </div>
        <div className="Actions">
        {ActualStep == 0  ? (
            <Button id="Voltar" Text="Voltar" action={() => ChangeStep(ActualStep - 1)} disabled={true} />
          ) : (
            <Button id="Voltar" Text="Voltar" action={() => ChangeStep(ActualStep - 1)} />
          )}

          {ActualStep !== 2 ? (
            <Button id="Próximo" Text="Próximo" action={() => ChangeStep(ActualStep + 1)} />
          ) : (
            <Button id="Enviar" Text="Enviar" action={""} />
          )}
        </div>
      </div>
    </>
  )
}

export default App