import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const CocktailList = () => {

  const {cocktailsData} = useStateContext();
  console.log(cocktailsData);

  return (
    <div className='section'>
        <div className="section-title">
            <h3>Cocktails</h3>
            <div className="cocktails-center">
                Cocktail List
            </div>
        </div>
    </div>
  )
}

export default CocktailList