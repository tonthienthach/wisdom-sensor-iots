import styles from './footer.module.css'
import locationImage from '../../../assets/images/footer/location.png'
function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.topContainer}>
          <div className={styles.footerTop}>
            <div>Hỗ Trợ 24/7</div>
            <div>Thanh toán</div>
            <div>Giao hàng</div>
          </div>
          <div className={styles.footerTop}>
            <div>Liên hệ chúng tôi 24h</div>
            <div>Bảo mật thanh toán</div>
            <div>Giao hàng tận nhà</div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerColumn}>
            <h3>Contact Us</h3>
            <p>
              We are an award-winning multinational company. We believe in
              quality and standards worldwide.
            </p>
            <div className={styles.contactInfo}>
              <img src={locationImage} alt='location' />
              <span>
                760 Nguyen Duy Trinh Street, Binh Trung Dong Ward, District 2,
                Ho Chi Minh City.
              </span>
            </div>
            <div className={styles.contactInfo}>
              <img src={locationImage} alt='location' />
              <span>+84 972-016-212</span>
            </div>
            <div className={styles.contactInfo}>
              <img src={locationImage} alt='location' />
              <span>info@wisdomrobotics.org</span>
            </div>
            <div className={styles.contactInfo}>
              <img src={locationImage} alt='location' />
              <span>wisdomrobotics.org</span>
            </div>
            <div className={styles.socialIcons}>
              <img src={locationImage} alt='location' />
              <img src={locationImage} alt='location' />
              <img src={locationImage} alt='location' />
              <img src={locationImage} alt='location' />
              <img src={locationImage} alt='location' />
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h3>Send Us A Message</h3>
            <form className={styles.contactForm}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <input type='text' placeholder='Name*' required='' />
                <input type='text' placeholder='Phone*' required='' />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <input type='email' placeholder='Email*' required='' />
                <input type='text' placeholder='Subject*' required='' />
              </div>
              <textarea placeholder='Message' required='' defaultValue={''} />
              <button type='submit' className={styles.fullWidth}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
