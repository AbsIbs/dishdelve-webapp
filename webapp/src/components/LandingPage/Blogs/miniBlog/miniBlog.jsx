import styles from './styles.module.scss'

const MiniBlog = (props) => {

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
    <a href={`/blog/${props.id}`} className={styles.container} >
      <div style={styles.imageContainer}>
        <img className={styles.image} src={props.imageURL} />
      </div>
      <div className={styles.infoContainer} >
        <p className={styles.date} >{getDate(props.timestamp)}</p>
        <p className={styles.title} >{props.title}</p>
      </div>
    </a >
  )
};

export default MiniBlog