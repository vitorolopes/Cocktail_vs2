import React from 'react';
import { useStateContext } from '../context/StateContextProvider';
import Cocktail from './Cocktail';
import Loading from './Loading'


const CocktailList = () => {

  const {cocktailsData, isLoading} = useStateContext();
  console.log(cocktailsData);

  if(isLoading) return <Loading/>

  return (
    <section className='section'>  
            <h2 className='section-title'>Cocktails</h2>
            <div className="cocktails-center">
                {cocktailsData.map( cocktail =>
                  <Cocktail {...cocktail} key={cocktail.idDrink}/> 
                )}   
            </div>
    </section>
  )
}

export default CocktailList