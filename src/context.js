import React, {useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const fetchData = async () =>{
        try{
            const res = await fetch('https://randomuser.me/api/')
            const data = await res.json()
            console.log(data)
        } catch (error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    return <AppContext.Provider value={{name:'john', role:'student'}}>
        {children}
        </AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}