import { useState } from 'react';
import styles from './styles.module.scss'
// Icons
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Steps = (props) => {

  const testArray = [
    'Add all your sauce ingredients to a small mixing bowl and whisk to combine. Set aside.',
    'Cut chicken into bite-size chunks. ',
    'In a medium mixing bowl, whisk together egg, arrowroot powder, salt + pepper. Add chicken pieces to bowl and toss to coat.',
    'In a medium mixing bowl, whisk together egg, arrowroot powder, salt + pepper. Add chicken pieces to bowl and toss to coat.'
  ]

  const Step = (props) => {
    const [selected, setSelected] = useState(false)
    const toggleSelected = () => {
      setSelected(!selected)
    };

    const tickBoxStyle = {
      color: `var(--primary-color)`,
      fontSize: '2rem',
      padding: '0'
    }

    return (
      <div className={styles.stepContainer} >
        <p>{props.index + 1}.</p>
        {selected ?
          <div onClick={() => toggleSelected()} >
            <CheckBoxIcon style={tickBoxStyle} />
          </div>
          :
          <div onClick={() => toggleSelected()}  >
            <CheckBoxOutlineBlankIcon style={tickBoxStyle} />
          </div>
        }
        <p>{props.step}</p>
      </div>
    )
  };

  return (
    <div className={styles.container} >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{props.title}STEPS</p>
      </div>
      {props.steps.map((step, index) => {
        return (
          <div key={index} >
            <Step index={index} step={step.instructions} />
          </div>
        )
      })}
    </div>
  )
};

export default Steps;