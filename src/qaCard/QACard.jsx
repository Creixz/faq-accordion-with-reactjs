import React, { useState } from 'react'
import './QACard.css'
import qas from '../utils/QA.json'
import QuestionButton from '../questionButton/QuestionButton';

const QACard = () => {

    const initialStates = Array(qas.length).fill(false);
    initialStates[0] = true;

    const [openStates, setOpenStates] = useState(initialStates);

    const handleToggleAnswer = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    }

    return (
        <div className="qa__container">
            {qas.map((qa, index) => (
                <div key={index}>
                    <div className="qa__question">
                        <p className='question__text'>{qa.question}</p>
                        <QuestionButton isOpen={openStates[index]} handleToggleAnswer={() => handleToggleAnswer(index)} />
                    </div>
                    <p className={`answer__text ${openStates[index] ? 'open' : ''}`}>{qa.answer}</p>
                    <hr className='divider' />
                </div>
            ))}
        </div>
    )
}

export default QACard