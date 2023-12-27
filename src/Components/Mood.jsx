import React from 'react'

import { FaGrinHearts, FaGrin, FaMeh, FaFrown } from "react-icons/fa";

const Mood = ({Icon, Text}) => {
  return (
    <div className="Mood">
        {Icon}
        <p>{Text}</p>
    </div>
  )
}

export default Mood