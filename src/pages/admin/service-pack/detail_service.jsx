import React, { useEffect } from 'react';
import styles from './detail_service.module.css'; // Import as a module

const DetailService = () => {
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

  const goToUpdateServicePage = () => {
    window.location.href = '/admin/service-list/update-service';
  };

  return (
    <div className={styles.container}>
      <div id="header-placeholder"></div>
      <div className={styles.product}>
        <div className={styles.product__header}>
          <img className={styles.product__image} src="/path/to/images/fire-alarm-sensor.png" alt="Fire alarm sensor image" />
          <h1 className={styles.product__title}>Fire alarm sensor package</h1>
          <span className={styles.product__price}>$250/6 months</span>
          <div className={styles.product__rating}>★★★★★</div>
        </div>
        <div className={styles.product__body}>
          <p className={styles.product__description}>
            Fire alarm sensor services are solutions that provide sensor devices and related systems to detect and warn of the occurrence of fire or smoke hazards in a given environment. These services have an important role to play in protecting people and property from the risk of fire and explosion. Here are some common features and applications of fire alarm sensor service:
          </p>
          <ul className={styles.product__features}>
            <li className={styles.product__feature}>Smoke Sensor System: Used to detect the presence of smoke in the air, alarm and activate the warning system when there are signs of fire danger.</li>
            <li className={styles.product__feature}>Temperature Sensor System: Temperature sensors are used to detect sudden temperature surges, which could be a sign of combustion or fire hazard.</li>
            <li className={styles.product__feature}>CO (Carbon Monoxide) Sensor System: Used to detect the presence of harmful CO gas in the air, this is a sign of combustion or fire hazard and also a cause of health hazard.</li>
            <li className={styles.product__feature}>Pressure Sensing System: Pressure sensors can be used to detect changes in atmospheric pressure, an indication of combustion or smoke in enclosed spaces.</li>
          </ul>
        </div>
        <button className={styles.product__editButton} onClick={goToUpdateServicePage}>EDIT</button>
        <div className={styles.product__reviews}>
          <h2 className={styles.product__reviewsTitle}>Reviews (1 Review)</h2>
          <div className={styles.review}>
            <p className={styles.review__author}>Danh</p>
            <img className={styles.review__picture} src="/path/to/images/rating-picture.png" alt="Rating picture" />
            <p className={styles.review__comment}>Excellent sensor!!!</p>
            <div className={styles.review__rating}>★★★★★</div>
          </div>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default DetailService;
