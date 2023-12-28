import React from 'react'

import './css/ThirdStep.css'

const ThirdStep = ({Nome,Icon, Comment }) => {
  return (
    <div className='Third-Step'>
      <div className='Third-Container'>
        <h1>Falta pouco...</h1>
        <h2>Sua opinião é muito importante, em breve você recebera um e-mail de confirmalção com um cupom de 10% de desconto!</h2>

        <h3> Aqui esta o resumo de sua avaliação {Nome}: </h3>

        <p><span>Satisfação com o produto:</span>{Icon}</p>
        <p><span>Comentário:</span> {Comment} </p>
      </div>
    </div>
  )
}

export default ThirdStep