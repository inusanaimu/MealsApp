import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {
  const [text, setText] = useState('');

  const {setSearchTerm} = useGlobalContext();

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value)
  }
const onSubmit = (e) => {
  e.preventDefault();
  console.log(text)
  if(text){
    setSearchTerm(text);
    setText('');
  }
}

  return (
    <header className='search-container'>
      <form>
        <input type="text" placeholder='type favorite meal' value={text} className='form-input' onChange={onChange} />
        <button type='submit' className='btn' onClick={onSubmit} >Search</button>
        <button type='button' className='btn btn-hipster'>Suprise Me!</button>
      </form>
    </header>
  )
}

export default Search