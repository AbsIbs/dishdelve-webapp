import { useState, useEffect } from 'react';
import styles from './styles.module.scss'

const LatestRecipes = (props) => {

  //Recipes
  const recipes = props.recipes

  useEffect(() => {
    console.log(`here are the recipes! ${recipes} and length is ${recipes.length}`)
  }, [])

  //Resoponsive layout change
  const [mobileLayout, setMobileLayout] = useState(true)

  // Event listener
  useEffect(() => {
    const handleResize = () => {
      // Toggle layout based on screen width
      if (window.innerWidth <= 577) {
        setMobileLayout(true);
      } else {
        setMobileLayout(false);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Recipe = (props) => {
    const recipeStyle = {
      backgroundImage: `url(${props.imageURL})`,
      backgroundRepeat: 'no-repeat', // Prevent image from repeating
      backgroundSize: 'cover',
      flex: props.flex,
      backgroundPosition: 'center'
    }
    return (
      <div className={styles.recipeContainer} style={recipeStyle} >
        <div>
          <span className={styles.difficulty} >{props.difficulty}</span>
        </div>
        <div>
          <span className={styles.title} >{props.title}</span>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.section} >
      <div className={styles.recipesGrid} >
        {recipes.map((data, index) => {
          return (
            <div key={index} className={styles.gridItem}>
              <Recipe title={data.title} difficulty={data.difficulty} imageURL={data.coverImage} flex={'1'} />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default LatestRecipes;