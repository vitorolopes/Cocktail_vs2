import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ( {children }) => { 

  const [isLoading, setIsLoading] = useState(true);
  const [cocktailsData, setCocktailsData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  
  const [detailsData, setDetailsData] = useState([]);
  const [id, setId] = useState("");

  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

  const fetchData = async () => {
      try{
        const res = await fetch(`${baseUrl}search.php?s=${searchTerm}`)
        const data = await res.json()
        console.log(data.drinks)
        setCocktailsData(data.drinks)
        setIsLoading(false)
      }catch (error) {
            console.log(error)
      }
  }

  useEffect(() => {
     fetchData()
  }, [searchTerm])


  const fetchDetailsData = async (id) => {
    setIsLoading(true)
    const res = await fetch(`${baseUrl}lookup.php?i=${id}`);
    const data = await res.json();
    console.log(data)
    setDetailsData(data.drinks)
    setIsLoading(false)
  }

    return(
        <StateContext.Provider
            value = {{
                cocktailsData,
                isLoading,
                setSearchTerm,
                fetchDetailsData,
                id,
                setId,
                detailsData
            }}
        >
            { children }
        </StateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(StateContext)

