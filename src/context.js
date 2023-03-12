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
    const [favorites, setFavorites] = useState([])

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
        if (favoriteMeal) {
            meal = favorites.find((meal) => meal.idMeal === idMeal )
        } else {
            
            meal = meals.find((meal) => meal.idMeal === idMeal)
            }
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const addToFavorites = (idMeal) => {
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        if (alreadyFavorite) return
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const updatedFavorites = [...favorites, meal];
        setFavorites(updatedFavorites)
    }

    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
        setFavorites(updatedFavorites)
    }

    useEffect(()=>{    
        fetchMeals(`${allMealsUrl}`)
    }, [])
    
    useEffect(()=>{
        if(!searchTerm)return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    return <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, setShowModal,selectMeal, selectedMeal, addToFavorites, removeFromFavorites, favorites}}>
        {children}
        </AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}