import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom';
// Logic
import { getRecipe, getRecipes } from '../../logic/backendLogic';
// Components
import MiniRecipe from '../../components/RecipeViewer/miniRecipe/miniRecipe';

const RecipeViewer = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState()
  const [recipes, setRecipes] = useState()

  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/seazon-app-mvp.appspot.com/o/recipes%2F15ff7dfa-049c-4494-a869-06831a6dd081%2FcoverImage.png?alt=media&token=2a394080-e23c-4522-812e-3e295cdadf31'

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
  /*   useEffect(() => {
      getRecipeHandler()
    }, []) */

  // Get recipes on page load
  /*   useEffect(() => {
      getRecipesHandler()
    }, []) */

  const getRecipeSHandler = () => {
    getRecipes(8, 'reverse')
      .then((data) => {
        setRecipes(data)
        return data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={styles.section} >
      <div className={styles.container} >
        <div className={styles.recipeColumn} >
          <p>{recipeId}</p>
        </div>
        <div className={styles.moreRecipesContainer}>
          <MiniRecipe title={'Eggs and something tasty'} difficulty={'Intermediate'} imageURL={imageURL} />
        </div>
      </div>
    </div>
  )
};

export default RecipeViewer;