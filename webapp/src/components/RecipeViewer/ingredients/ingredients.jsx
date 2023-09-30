import { useState } from 'react';
import styles from './styles.module.scss'
// Icons
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Ingredients = (props) => {

  const testArray = [
    { name: 'REDUCED SODIUM TAMARI', amount: 12, measurement: 'cup' },
    { name: 'TOASTED SESAME SEED OIL', amount: 1, measurement: 'tbsp' },
    { name: 'REDUCED SODIUM TAMARI', amount: 12, measurement: 'cup' },
    { name: 'TOASTED SESAME SEED OIL', amount: 1, measurement: 'tbsp' }
  ]

  // Handle dynamic ingredients
  const [servings, setServings] = useState(1)
  // Decrease servings
  const decreaseServings = () => {
    servings > 1 ? setServings(servings - 1) : null
  }
  // Increase servings
  const increaseServings = () => {
    setServings(servings + 1)
  }

  const Ingredient = (props) => {
    const [selected, setSelected] = useState(false)
    const toggleSelected = () => {
      setSelected(!selected)
    };

    const tickBoxStyle = {
      color: `var(--primary-color)`,
      fontSize: '2rem'
    }

    return (
      <div className={styles.ingredientContainer} >
        <div className={styles.iconNameContainer} >
          {selected ?
            <IconButton onClick={() => toggleSelected()}>
              <CheckBoxIcon style={tickBoxStyle} />
            </IconButton>
            :
            <IconButton onClick={() => toggleSelected()}>
              <CheckBoxOutlineBlankIcon style={tickBoxStyle} />
            </IconButton>
          }
          <p>{props.name}</p>
        </div>
        <p>{props.amount * servings} {props.measurement}</p>
      </div>
    )
  };

  return (
    <div className={styles.container} >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{props.title}INGREDIENTS</p>
        {/* <div className={styles.servingsContainer}>
          <IconButton style={{ padding: 0 }} onClick={() => { increaseServings() }} >
            <AddIcon className={styles.icon} />
          </IconButton>
          <p className={styles.desc}>{servings} {servings > 1 ? 'people' : 'person'}</p>
          <IconButton style={{ padding: 0 }} onClick={() => { decreaseServings() }} >
            <RemoveIcon className={styles.icon} />
          </IconButton>
        </div> */}
      </div>
 {/*      {testArray.map((data, index) => {
        return (
          <div key={index} >
            <Ingredient name={data.name} amount={data.amount} measurement={data.measurement} />
          </div>
        )
      })} */}
      {props.ingredients.map((data, index) => {
        return (
          <div key={index} >
            <Ingredient name={data.name} amount={data.amount} measurement={data.measurement} />
          </div>
        )
      })}
    </div>
  )
};

export default Ingredients;