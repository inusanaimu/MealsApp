import React from 'react'
import { useGlobalContext } from './../context';

function Modal() {
  const {showModal, setShowModal, selectedMeal} = useGlobalContext();
  
  const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal;

  return (
    <aside className='modal-overlay' onClick={()=>setShowModal(!showModal)} >
      <div className='modal-container'>
        <img src={image} alt={title} className='img modal-img' />
        <div className=' modal-content'>
          <h4>{title}</h4>
          <p> Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank"> Original Source</a>
        
        <button className='btn close-btn' onClick={()=>setShowModal(!showModal)}>close</button>
        
        </div>
      
      </div>
    </aside>
  )
}

export default Modal