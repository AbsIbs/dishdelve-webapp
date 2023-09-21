import styles from './styles.module.scss'

const MiniBlog = (props) => {
  return (
    <div className={styles.container} >
      <div style={{ flex: '1' }}>
        <img className={styles.image} src={props.imageURL} />
      </div>
      <div className={styles.infoContainer} >
        <p className={styles.title} >{props.title}</p>
        <p className={styles.date} >{props.date}</p>
      </div>
    </div>
  )
};

export default MiniBlog