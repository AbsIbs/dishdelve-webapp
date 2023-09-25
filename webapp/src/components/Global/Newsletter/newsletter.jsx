import { useState } from 'react';
import styles from './styles.module.scss'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Newsletter = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className={styles.section} >
      <div className={styles.container} >
        <div className={styles.leftBox} >
          <div className={styles.newsletterContainer} >
            <ForwardToInboxIcon style={{ color: 'white' }} />
            <p className={styles.title} >Subscribe to our newsletter!</p>
          </div>
          <p className={styles.desc} >Be sure to subscribe to our blog to get the latest recipes, cooking lessons, and mouth-watering culinary inspiration delivered straight to your inbox! 🍽️🥗🍜🍪🥂</p>
        </div>
        <div className={styles.rightBox} >
          <form className={styles.form} >
            <input
              placeholder='Your name'
              className={styles.input}
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <input
              placeholder='*Your email'
              className={styles.input}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <button type='button' className={styles.subscribe} onClick={() => null} >
              Subscribe  
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;