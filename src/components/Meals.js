
import { useGlobalContext } from '../context'


const Meals = () => {
  const ctx = useGlobalContext()
  return (<>
    {console.log(ctx)}
    <h1>Meals</h1>
  </>
  )
}

export default Meals