import React from 'react'
import './QuestionButton.css'

const QuestionButton = ({ isOpen, handleToggleAnswer }) => {
  return (
    <button className='question__button' onClick={handleToggleAnswer}>
      {isOpen ?
        <img src="./assets/images/icon-plus.svg" alt="" />
        :
        <img src="./assets/images/icon-minus.svg" alt="" />
      }

    </button>
  )
}

export default QuestionButton