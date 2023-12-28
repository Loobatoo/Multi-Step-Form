import React from 'react'
import { FaGrinHearts, FaGrin, FaMeh, FaFrown } from "react-icons/fa";


import './css/SecondStep.css'

import Mood from './Mood';

const SecondStep = ({Act1, Act2, comment}) => {



  return (
    <div className="Form">
      <div className="Catch-mood">
        <Mood Icon={<FaFrown/>} Text="Triste" name="mood" Act={Act1} iconType="Frown"/>
        <Mood Icon={<FaMeh />} Text="Indiferente" name="mood" Act={Act1} iconType="Meh"/>
        <Mood Icon={<FaGrin />} Text="Feliz" name="mood" Act={Act1} iconType="Grin"/>
        <Mood Icon={<FaGrinHearts />} Text="Muito Feliz" name="mood" Act={Act1} iconType="heart"/>
      </div>
      <div className="Comment-Box">
        <label>Comentário:</label>
        <textarea
        placeholder='Comente Aqui!' 
        value={comment}
        onChange={Act2}/>
      </div>
    </div>
  )
}

export default SecondStep