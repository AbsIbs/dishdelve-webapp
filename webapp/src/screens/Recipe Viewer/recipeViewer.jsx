import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom';
// Logic
import { getRecipe, getRandomRecipes } from '../../logic/backendLogic';
// Components
import MiniRecipe from '../../components/RecipeViewer/miniRecipe/miniRecipe';
import RecipeInfo from '../../components/RecipeViewer/recipeInfo/recipeInfo';
import Ingredients from '../../components/RecipeViewer/ingredients/ingredients';
import Nutrients from '../../components/RecipeViewer/nutrients/nutrients';
import Steps from '../../components/RecipeViewer/steps/steps';

const RecipeViewer = () => {
  const { recipeId } = useParams();
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState()
  const [recipes, setRecipes] = useState([])

  // Get recipe handler
  const getRecipeHandler = () => {
    getRecipe(recipeId)
      .then((data) => {
        setRecipe(data)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Get recipe on page load
  useEffect(() => {
    getRecipeHandler()
  }, [])

  const getRecipesHandler = () => {
    getRandomRecipes(8)
      .then((data) => {
        setRecipes(data)
        return data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Get recipes on page load
  useEffect(() => {
    getRecipesHandler()
  }, [])

  return (
    <div className={styles.section} >
      <div className={styles.container} >
        {/* Loading screen */}
        {loading ?
          null
          :
          <>
            <div style={{ flex: 7 }} >
              <div className={styles.recipeColumn} >
                <img src={recipe.coverImage} className={styles.recipeImage} />
                <div>
                  <p className={styles.title} >{recipe.title}</p>
                  <div className={styles.authorContainer}>
                    <img className={styles.authorImage} src={recipe.profileImageURL} />
                    <p className={styles.author} >{recipe.author}</p>
                  </div>
                </div>
                <div className={styles.recipeInfoContainer} >
                  <RecipeInfo title={`${recipe.prepTime} mins`} subtitle={'Prep time'} />
                  <RecipeInfo title={`${recipe.cookingTime} mins`} subtitle={'Cooking time'} />
                  <RecipeInfo title={`${recipe.servings} person(s)`} subtitle={'Servings'} />
                  <RecipeInfo title={recipe.difficulty} subtitle={'Difficulty'} />
                </div>
                <p className={styles.desc} >{recipe.chefsNotes} </p>
                <Ingredients ingredients={recipe.ingredients} />
                <Nutrients macros={recipe.macros} />
                <Steps steps={recipe.steps} />
              </div>
            </div>
            <div className={styles.moreRecipesContainer}>
              {recipes.map((data, index) => {
                return (
                  <div key={index}>
                    <MiniRecipe id={data.id} title={data.title} difficulty={data.difficulty} imageURL={data.coverImage} />
                  </div>
                )
              })}
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default RecipeViewer;