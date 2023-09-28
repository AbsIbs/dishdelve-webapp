import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { storage, db } from '../../../firebase/firebase-config';
import { useParams } from 'react-router-dom';
// Logic
import { getRecipe } from '../../logic/backendLogic';

const RecipeViewer = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState()

  // Get recipe handler
  const getRecipeHandler = () => {
    getRecipe(recipeId)
      .then((data) => {
        setRecipe(data)
        return data
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // Get recipe on page load
  useEffect(() => {
    getRecipeHandler()
  }, [])

  return (
    <div>
      <p>{recipeId}</p>
    </div>
  )
};

export default RecipeViewer;