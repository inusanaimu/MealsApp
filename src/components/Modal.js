import React from 'react'
import { useGlobalContext } from './../context';

function Modal() {
  const {showModal, setShowModal, selectedMeal} = useGlobalContext();
  
  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;
  
  const handleClick = (event) => {
    event.stopPropagation()
    setShowModal(!showModal)

  }

  return (
    <aside className='modal-overlay' >
      <div className='modal-overlay' onClick={handleClick} style={{ zIndex:-1}} ></div>
      <div className='modal-container'>
        <img src={image} alt={title} className='img modal-img' />
        <div className=' modal-content'>
          <h4>{title}</h4>
          <p> Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank" rel='noreferrer'> Original Source</a>
        
        <button className='btn close-btn' onClick={handleClick}>close</button>
        
        </div>
      </div>
    </aside>
  )
}

export default Modal