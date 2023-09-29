import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom';
// Logic
import { getRecipe, getRecipes } from '../../logic/backendLogic';
// Components
import MiniRecipe from '../../components/RecipeViewer/miniRecipe/miniRecipe';
import RecipeInfo from '../../components/RecipeViewer/recipeInfo/recipeInfo';

const RecipeViewer = () => {
  const { recipeId } = useParams();
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState()
  const [recipes, setRecipes] = useState([])

  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/seazon-app-mvp.appspot.com/o/recipes%2F741d3375-8368-4eb0-aafc-d190d6522be9%2FcoverImage.png?alt=media&token=200a16bd-36b5-4cb7-9ed3-86d510f9557e&_gl=1*146b90e*_ga*NDE5OTc5Mzg3LjE2NTA2NTU0NzY.*_ga_CW55HF8NVT*MTY5NjAxNTA5OS4xMDkuMS4xNjk2MDE1MzgzLjU3LjAuMA..'
  const logoURL = 'https://firebasestorage.googleapis.com/v0/b/seazon-app-mvp.appspot.com/o/seazon%2Fimg%2Flogo.png?alt=media&token=4c2f96d0-5df4-4661-ab4c-a02bab583a07&_gl=1*1an10az*_ga*NDE5OTc5Mzg3LjE2NTA2NTU0NzY.*_ga_CW55HF8NVT*MTY5NjAxNTA5OS4xMDkuMS4xNjk2MDE1MjY2LjU1LjAuMA..'

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
    getRecipes(3, 'reverse')
      .then((data) => {
        setRecipes(data)
        return data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // Get recipes on page load
  /*    useEffect(() => {
       getRecipesHandler()
     }, []) */

  return (
    <div className={styles.section} >
      <div className={styles.container} >
        {/* Loading screen */}
        {loading ?
          <p>Loading...</p>
          :
          <>
            <div style={{ flex: 7 }} >
              <div className={styles.recipeColumn} >
                <img src={imageURL} className={styles.recipeImage} />
                <p className={styles.title} >Sesame Chicken</p>
                <div className={styles.authorContainer}>
                  <img className={styles.authorImage} src={logoURL} />
                  <p className={styles.author} >DishDelve Team</p>
                </div>
                <div className={styles.recipeInfoContainer} >
                  <RecipeInfo title={`${recipe.prepTime} mins`} subtitle={'Prep time'} />
                  <RecipeInfo title={`${recipe.cookingTime} mins`} subtitle={'Cooking time'} />
                  <RecipeInfo title={`${recipe.servings} person(s)`} subtitle={'Servings'} />
                  <RecipeInfo title={recipe.difficulty} subtitle={'Difficulty'} />
                </div>
              </div>
            </div>
            <div className={styles.moreRecipesContainer}>
              <MiniRecipe title={'Eggs and something tasty'} difficulty={'Intermediate'} imageURL={imageURL} />
              <MiniRecipe title={'Eggs and something tasty'} difficulty={'Intermediate'} imageURL={imageURL} />
              <MiniRecipe title={'Eggs and something tasty'} difficulty={'Intermediate'} imageURL={imageURL} />
              <MiniRecipe title={'Eggs and something tasty'} difficulty={'Intermediate'} imageURL={imageURL} />
              {/* {recipes.map((data, index) => {
            return (
              <div key={index}>
                <MiniRecipe title={data.title} difficulty={data.difficulty} imageURL={data.coverImage} />
              </div>
            )
          })} */}
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default RecipeViewer;