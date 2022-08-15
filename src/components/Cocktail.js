import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({idDrink, strAlcoholic, strDrink, 
                   strDrinkThumb,strGlass}) => {
  return (
    <div className='cocktail'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className="cocktail-footer">
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <button className='btn btn-primary'>
                <Link to={`cocktail/${idDrink}`}>
                    details
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Cocktail


// TODO: Create Cocktail Details