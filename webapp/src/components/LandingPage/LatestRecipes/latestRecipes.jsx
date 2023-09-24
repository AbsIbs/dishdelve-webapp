import { useState, useEffect } from 'react';
import styles from './styles.module.scss'

const LatestRecipes = () => {

  //Resoinsive layout change
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

  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/seazon-app-mvp.appspot.com/o/recipes%2F7b5094c9-6943-4923-83e9-a9dd130da291%2FcoverImage.png?alt=media&token=8f9e4a0a-0fb8-4e90-9185-8bc6765a6878'

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
          <span className={styles.category} >{props.category}</span>
        </div>
        <div>
          <span className={styles.title} >{props.title}</span>
        </div>
      </div>
    )
  };

  return (
    <div className={styles.section} >
      {mobileLayout ?
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} >
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
          <div className={styles.mobileLayoutContainer}>
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
        </div> :
        <>
          <div className={styles.outerContainer} >
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }} >
              <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
              <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
            </div>
          </div>
          <div className={styles.outerContainer} >
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'6'} />
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'4'} />
          </div>
          <div className={styles.outerContainer} >
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
            <Recipe title={'Sesame Chicken'} category={'Intermediate'} imageURL={imageURL} flex={'1'} />
          </div>
        </>}
    </div>
  )
};

export default LatestRecipes