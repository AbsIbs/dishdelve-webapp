import styles from './styles.module.scss'

const LargeBlog = (props) => {
  const categoryStyle = {
    backgroundColor: '#E8EFFE',
    color: '#00579C',
    fontWeight: '500'
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.imageURL} />
      <div className={styles.contentContainer}>
        <p className={styles.title} >Top Spices from around the world</p>
        <p className={styles.date} >September 7th 2023</p>
        <p className={styles.desc} >
          {props.desc.length < 150 ? props.desc : `${props.desc.substring(0, 150)}...`}
        </p>
        <div>
          <span className={styles.info} style={categoryStyle} >{props.category}</span>
        </div>
      </div>
    </div>
  )
};

export default LargeBlog;