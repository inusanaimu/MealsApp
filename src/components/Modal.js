import React from 'react'
import { useGlobalContext } from './../context';

function Modal() {
  const {showModal, setShowModal, selectedMeal} = useGlobalContext();
  
  const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal;

  return (
    <aside className='modal-overlay' >
      <div className='modal-container'>
        <img src={image} />
        <h1 className=''>{title}</h1>
        <button onClick={()=>setShowModal(!showModal)}>close</button>
      </div>
    </aside>
  )
}

export default Modal