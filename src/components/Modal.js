import React from 'react'
import { useGlobalContext } from './../context';

function Modal() {
  const {showModal, setShowModal} = useGlobalContext();
  console.log(showModal)
  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <h1 className='' onClick={()=>setShowModal(!showModal)}>modal container</h1>
      </div>
    </aside>
  )
}

export default Modal