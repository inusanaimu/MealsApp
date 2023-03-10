import React from 'react'
import { useGlobalContext } from './../context';

function Modal() {
  const {showModal, setShowModal, selectedMeal} = useGlobalContext();
  
  return (
    <aside className='modal-overlay' >
      <div className='modal-container'>
        <h1 className=''>{selectedMeal.strMeal}</h1>
        <button onClick={()=>setShowModal(!showModal)}></button>
      </div>
    </aside>
  )
}

export default Modal