import React, {useContext, useEffect, useState} from "react";
import axios from "axios";


const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=A'
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const response = await axios(url)
            // console.log(response.data.meals)
            setMeals(response.data.meals)
        } catch (error){
            console.log(error.response)
        }
        setLoading(false)
    } 

    useEffect(()=>{

        fetchMeals(allMealsUrl)
    },[])

    return <AppContext.Provider value={{loading, meals}}>
        {children}
        </AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}