import styles from './styles.module.scss'
import Footer from '../../components/Global/Footer/footer';

const ContactUs = () => {
  return (
    <div className={styles.section} >
      <div className={styles.container} >
        <div>
          <p className={styles.title} >We’d Love to hear from you!</p>
          <p className={styles.title} >Get in touch!</p>
        </div>
        <form style={{display: 'flex', flexDirection: 'column', gap: '2rem'}} >
          <div className={styles.formGrid}>
            <div className={styles.gridItem} >
              <label className={styles.label}>Your first name</label>
              <input className={styles.formInput} />
            </div>
            <div className={styles.gridItem} >
              <label className={styles.label}>Your last name</label>
              <input className={styles.formInput} />
            </div>
            <div className={styles.gridItem} >
              <label className={styles.label}>Your email*</label>
              <input className={styles.formInput} />
            </div>
            <div className={styles.gridItem} >
              <label className={styles.label}>Reason for contacting</label>
              <input className={styles.formInput} />
            </div>
            <div className={styles.gridItem} >
              <label className={styles.label}>Message</label>
              <textarea name='message' className={styles.formInput} rows={8} />
            </div>
          </div>
          <button type='button' className={styles.button}>Submit</button>
        </form>
        <Footer />
      </div>
    </div>
  )
};

export default ContactUs;