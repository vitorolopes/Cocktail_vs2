import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { useStateContext } from '../context/StateContextProvider';

const CocktailDetails = () => {

  const {idDrink} = useParams();
  console.log(idDrink);

  const {fetchDetailsData, id, setId, detailsData} = useStateContext();

  useEffect(() => {
    fetchDetailsData(idDrink)
    setId(idDrink)
  }, [id])

  return (
    <div>CocktailDetails</div>
  )
}

export default CocktailDetails