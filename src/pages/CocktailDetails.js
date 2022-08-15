import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { useStateContext } from '../context/StateContextProvider';
import Loading from '../components/Loading'

const CocktailDetails = () => {

  const {idDrink} = useParams();
//  console.log(idDrink);

  const {fetchDetailsData, id, setId, detailsData, isLoading} = useStateContext();

  console.log(detailsData)

  useEffect(() => {
    fetchDetailsData(idDrink)
    setId(idDrink)
  }, [id])

  if(isLoading) return <Loading/>

  const {strDrink:name, strDrinkThumb:image, strCategory:category, 
         strAlcoholic:alcohol, strGlass:glass, strInstructions:instructions,
         strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}
        = detailsData[0]
  const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]

  return (
    <section className="section cocktail-section">
         <Link to="/" className='btn btn-primary'>back home</Link>
         <h2 className='section-title'>{name}</h2>
         <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
             <p><span className='drink-data'>name:</span>{name}</p>
             <p><span className='drink-data'>category:</span>{category}</p>
             <p><span className='drink-data'>Info:</span>{alcohol}</p>
             <p><span className='drink-data'>instructions:</span>{instructions}</p>
             <p><span className='drink-data'>glass:</span>{glass}</p>
             {/* {ingredients.map( (ingredient, index)=>  */}
            
              <p> <span className='drink-data'>ingredients:</span>
                  {ingredients.map ((ingredient,index)=>{
                    if(ingredient){
                      return <span>{ingredient}</span> 
                    } else{
                      return null
                    }
                  })}
              </p>
          
          </div>
         
         </div>
    </section>
 
  )
}

export default CocktailDetails