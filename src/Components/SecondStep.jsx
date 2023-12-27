import React from 'react'
import { FaGrinHearts, FaGrin, FaMeh, FaFrown } from "react-icons/fa";


import './css/SecondStep.css'

import Mood from './Mood';

const SecondStep = () => {
  return (
    <div className="Form">
      <div className="Catch-mood">
        <Mood Icon={<FaFrown/>} Text="Triste"/>
        <Mood Icon={<FaMeh />} Text="Indiferente"/>
        <Mood Icon={<FaGrin />} Text="Feliz"/>
        <Mood Icon={<FaGrinHearts />} Text="Muito Feliz"/>
      </div>
      <div className="Comment-Box">
        <label>Comentário:</label>
        <textarea
        placeholder='Comente Aqui!' />
      </div>
    </div>
  )
}

export default SecondStep