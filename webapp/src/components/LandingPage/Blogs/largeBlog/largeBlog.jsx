import styles from './styles.module.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";

const LargeBlog = (props) => {
   const categoryStyle = {
     backgroundColor: '#E8EFFE',
     color: '#00579C',
     fontWeight: '500'
   }

  const getDate = (firebaseTimestamp) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Convert Firebase server timestamp to JavaScript Date object
    const serverDate = firebaseTimestamp.toDate();

    const day = serverDate.getDate();
    const monthIndex = serverDate.getMonth();
    const year = serverDate.getFullYear();

    // Format the date as "Month Day, Year"
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

    return formattedDate;
  };

  return (
    <a href={`/blog/${props.id}`} className={styles.container}>
      <div style={{ flex: '1' }} >
        <LazyLoadImage className={styles.image} src={props.coverImage} />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <span className={styles.info} style={categoryStyle} >{props.author}</span>
        </div>
        <p className={styles.title} >{props.title}</p>
        <p className={styles.date} >{getDate(props.timestamp)}</p>
        <p className={styles.desc} >
          {props.intro.length < 150 ? props.intro : `${props.intro.substring(0, 150)}...`}
        </p>
      </div>
    </a>
  )
};

export default LargeBlog;