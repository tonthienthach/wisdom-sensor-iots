import React, { useEffect } from 'react';
import styles from './update_service.module.css';

const UpdateService = () => {
  useEffect(() => {
    fetch('/path/to/footer_and_header/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));

    fetch('/path/to/admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div id="header-placeholder"></div>
      <div className={styles.form}>
        <div className={styles.form__header}>
          <h1 className={styles.form__title}>UPDATE SERVICE</h1>
          <div className={styles.form__image_input}>
            <input type="file" id="serviceImage" className={styles.form__file_input} accept="image/jpeg, image/png" />
            <label htmlFor="serviceImage" className={styles.form__file_label}>Select Image</label>
          </div>
        </div>
        <div className={styles.form__body}>
          <div className={styles.form__field}>
            <label htmlFor="serviceName" className={styles.form__label}>Name</label>
            <input type="text" id="serviceName" className={styles.form__input} placeholder="Service name" required />
          </div>
          <div className={styles.form__field}>
            <label htmlFor="serviceDescription" className={styles.form__label}>Describe</label>
            <input type="text" id="serviceDescription" className={styles.form__input} placeholder="Describe" required />
          </div>
          <div className={styles.form__field}>
            <label htmlFor="serviceId" className={styles.form__label}>ID</label>
            <input type="text" id="serviceId" className={styles.form__input} placeholder="S4657" required />
          </div>
          <div className={`${styles.form__field} ${styles.form__field_inline}`}>
            <label htmlFor="servicePrice" className={styles.form__label}>Price</label>
            <input type="text" id="servicePrice" className={styles.form__input} placeholder="Price" required />
            <select id="servicePeriod" className={styles.form__select}>
              <option value="3-month" selected>3 Month</option>
              <option value="6-month">6 Month</option>
            </select>
          </div>
        </div>
        <div className={styles.form__footer}>
          <button type="submit" className={styles.form__button}>SAVE</button>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default UpdateService;
