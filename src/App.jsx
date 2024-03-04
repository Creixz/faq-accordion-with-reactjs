import { useState } from 'react';
import './App.css'
import QACard from './qaCard/QACard'
import qas from './utils/QA.json'

function App() {

  const initialStates = Array(qas.length).fill(false);
  initialStates[0] = true;

  const [openStates, setOpenStates] = useState(initialStates);

  const handleToggleAnswer = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  }

  const allOpen = openStates.every(state => state);

  const justifyContentValue = allOpen ? 'flex-start' : 'center';

  return (

    <>
      <div className="faq__wrapper">
        <div className="faq__container" style={{ justifyContent: justifyContentValue }}>
          <div className="faq__title">
            <img className='title__icon' src="./assets/images/icon-star.svg" alt="" />
            <h1 className='title__text'>FAQs</h1>
          </div>
          <QACard openStates={openStates} handleToggleAnswer={handleToggleAnswer}/>
        </div>
      </div>
    </>
  )
}

export default App
