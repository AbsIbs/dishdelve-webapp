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
      {/* {mobileLayout ?
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} >
          {recipes.map((data, index) => {
            return (
              <div key={index} className={styles.mobileLayoutContainer}>
                <Recipe title={data.title} difficulty={data.difficulty} imageURL={data.coverImage} flex={'1'} />
              </div>
            )
          })}
        </div> :
        <>
          <div className={styles.outerContainer} >
            <Recipe title={recipes[0].title} difficulty={recipes[0].difficulty} imageURL={recipes[0].coverImage} flex={'1'} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }} >
              <Recipe title={recipes[1].title} difficulty={recipes[1].difficulty} imageURL={recipes[1].coverImage} flex={'1'} />
              <Recipe title={recipes[2].title} difficulty={recipes[2].difficulty} imageURL={recipes[2].coverImage} flex={'1'} />
            </div>
          </div>
          <div className={styles.outerContainer} >
            <Recipe title={recipes[3].title} difficulty={recipes[3].difficulty} imageURL={recipes[3].coverImage} flex={'6'} />
            <Recipe title={recipes[4].title} difficulty={recipes[4].difficulty} imageURL={recipes[4].coverImage} flex={'4'} />
          </div>
          <div className={styles.outerContainer} >
            <Recipe title={recipes[5].title} difficulty={recipes[5].difficulty} imageURL={recipes[5].coverImage} flex={'1'} />
            <Recipe title={recipes[6].title} difficulty={recipes[6].difficulty} imageURL={recipes[6].coverImage} flex={'1'} />
          </div>
        </>} */}
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