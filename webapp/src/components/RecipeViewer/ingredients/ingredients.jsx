import { useState } from 'react';
import styles from './styles.module.scss'
// Icons
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Ingredients = (props) => {

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
          <p>REDUCED SODIUM TAMARI</p>
        </div>
        <p>12 ounces</p>
      </div>
    )
  };

  return (
    <div className={styles.container} >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{props.title}INGREDIENTS</p>
        <div className={styles.servingsContainer}>
          <IconButton style={{ padding: 0 }} onClick={() => { increaseServings() }} >
            <AddIcon className={styles.icon} />
          </IconButton>
          <p className={styles.desc}>{servings} {servings > 1 ? 'people' : 'person'}</p>
          <IconButton style={{ padding: 0 }} onClick={() => { decreaseServings() }} >
            <RemoveIcon className={styles.icon} />
          </IconButton>
        </div>
      </div>
      <Ingredient />
      <Ingredient />
    </div>
  )
};

export default Ingredients;