import React, { useEffect } from 'react';
import styles from './update_service.module.css'; // Import as a module

const AddService = () => {
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
          <div className={styles.form__imageInput}>
            <label htmlFor="serviceImage" className={styles.form__fileLabel}>Select Image</label>
            <input type="file" id="serviceImage" className={styles.form__fileInput} accept="image/jpeg, image/png" />
            <div className={styles.form__fileInstructions}>
              <p>File size: maximum 1 MB</p>
              <p>File extension: JPEG, PNG</p>
            </div>
          </div>
        </div>
        <div className={styles.form__body}>
          <div className={styles.form__field}>
            <label htmlFor="serviceName" className={styles.form__label}>Name</label>
            <input type="text" id="serviceName" className={styles.form__input} placeholder="Service name" />
          </div>
          <div className={styles.form__field}>
            <label htmlFor="serviceDescription" className={styles.form__label}>Describe</label>
            <input type="text" id="serviceDescription" className={styles.form__input} placeholder="Describe" />
          </div>
          <div className={styles.form__field}>
            <label htmlFor="serviceId" className={styles.form__label}>ID</label>
            <input type="text" id="serviceId" className={styles.form__input} placeholder="S4657" />
          </div>
          <div className={styles.form__fieldInline}>
            <label htmlFor="servicePrice" className={styles.form__label}>Price</label>
            <input type="text" id="servicePrice" className={styles.form__input} placeholder="Price" />
            <label htmlFor="servicePeriod" className={styles.form__label}>Per</label>
            <select id="servicePeriod" className={styles.form__select}>
              <option value="month">Month</option>
              <option value="year">Year</option>
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

export default AddService;
