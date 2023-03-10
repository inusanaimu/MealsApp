import React, {useContext, useEffect, useState} from "react";
import axios from "axios";


const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)

    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const response = await axios(url)

            if (response.data.meals) {
                
                setMeals(response.data.meals)
            } else {
                setMeals([])
            }
            // console.log(response.data.meals)
        } catch (error){
            console.log(error.response)
        }
        setLoading(false)
    } 
    const fetchRandomMeal = ()=>{
        fetchMeals(randomMealsUrl)
    }

    const selectMeal = (idMeal, favoriteMeal) =>{
        let meal;
        meal = meals.find((meal)=>meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    useEffect(()=>{    
        fetchMeals(`${allMealsUrl}`)
    },[])
    
    useEffect(()=>{
        if(!searchTerm)return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    return <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, setShowModal}}>
        {children}
        </AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}