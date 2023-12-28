import React from 'react'
import './css/Mood.css'

import { FaGrinHearts, FaGrin, FaMeh, FaFrown } from "react-icons/fa";

const Mood = ({Icon, Text}) => {

  const Active = "Active";

  return (
    <div className="Mood">
        {Icon}
        <p>{Text}</p>
    </div>
  )
}

export default Mood