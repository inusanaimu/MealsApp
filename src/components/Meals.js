
import { useGlobalContext } from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'


const Meals = () => {
  const {meals} = useGlobalContext()
  return (<section className ='section-center'>
    {meals.map((eachMeal)=>{
     const {idmeal, strMeal:title, strMealThumb:image} = eachMeal;
    
    return <article className='single-meal' key={idmeal}>
      <img src={image} className='img' />
      <footer>
        <h5>{title}</h5>

        <button className='like-btn'><BsHandThumbsUp/></button>
      </footer>
    </article>
    })}
  </section>
  )
}

export default Meals