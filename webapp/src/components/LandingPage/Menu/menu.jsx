import styles from './styles.module.scss'

const Menu = (props) => {
  return (
    <div className={styles.container} style={props.style} >
      <p className={styles.title} >{props.title}</p>
      {props.children}
    </div>
  )
}

export default Menu;