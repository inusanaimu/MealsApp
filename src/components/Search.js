import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {
  const [text, setText] = useState('');

  const {setSearchTerm, fetchRandomMeal} = useGlobalContext();

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value)
  }
const onSubmit = (e) => {
  e.preventDefault();

  if(text){
    setSearchTerm(text);
   
  }
}

const handleRandomMeal = () =>{
  setSearchTerm('');
    setText('');
    fetchRandomMeal();
}
  return (
    <header className='search-container'>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='type favorite meal' value={text} className='form-input' onChange={onChange} />
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={handleRandomMeal}>Suprise Me!</button>
      </form>
    </header>
  )
}

export default Search