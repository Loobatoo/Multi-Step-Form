import React from 'react'
import './css/Mood.css'

import { FaGrinHearts, FaGrin, FaMeh, FaFrown } from "react-icons/fa";

const Mood = ({Icon, Text, name, Act}) => {

  return (
    <label className="Mood">
      <input type="radio" name={name} onChange={Act} value={Icon}/>
        {Icon}
        <p>{Text}</p>
    </label>
  )
}

export default Mood