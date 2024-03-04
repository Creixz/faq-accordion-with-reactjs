import './App.css'
import QACard from './qaCard/QACard'

function App() {

  return (

    <>
      <div className="faq__wrapper">
        <div className="faq__container">
          <div className="faq__title">
            <img className='title__icon' src="./assets/images/icon-star.svg" alt="" />
            <h1 className='title__text'>FAQs</h1>
          </div>
          <QACard />
        </div>
      </div>
    </>
  )
}

export default App
