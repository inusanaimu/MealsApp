
import { useGlobalContext } from '../context'


const Meals = () => {
  const {meals} = useGlobalContext()
  return (<section className ='section-center'>
    {meals.map((eachMeal)=>{
     const {idmeal, strMeal:title, strMealThumb:image} = eachMeal;
    
    return <article className='single-meal' key={idmeal}>
      <img src={image} className='img' style={{width:'200px'}}/>
      <footer>
        <h5>{title}</h5>
        <button className='like-btn'>click me</button>
      </footer>
    </article>
    })}
  </section>
  )
}

export default Meals