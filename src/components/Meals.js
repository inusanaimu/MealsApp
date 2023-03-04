
import { useGlobalContext } from '../context'


const Meals = () => {
  const {meals} = useGlobalContext()
  return (<section>
    {meals.map((eachMeal)=>{
      console.log(eachMeal)
    <h1>Meals</h1>
    })}
  </section>
  )
}

export default Meals