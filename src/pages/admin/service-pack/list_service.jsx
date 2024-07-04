import React, { useEffect } from 'react';
import styles from './list_service.module.css'; // Import as a module

const ServiceList = () => {
  useEffect(() => {
    fetch('../footer_and_header/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));

    fetch('../../admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div id="header-placeholder"></div>
      <div className={styles.serviceList}>
        <div className={styles.serviceList__header}>
          <h1 className={styles.title}>SERVICE LIST</h1>
          <button className={styles.serviceList__addBtn} onClick={() => window.location.href = '/admin/service-add'}>+ ADD</button>
        </div>
        <div className={styles.serviceList__search}>
          <input
            type="text"
            placeholder="ID, Service Name, ...."
            className={styles.serviceList__searchInput}
          />
        </div>
        <div className={styles.serviceList__items}>
          <div className={styles.serviceList__item} onClick={() => window.location.href = '/admin/service-detail'}>
            <img
              src="../../../images/car-sensor.png"
              alt="Car Sensor"
              className={styles.serviceList__icon}
            />
            <div className={styles.serviceList__details}>
              <h2 className={styles.serviceList__title}>Car sensor package</h2>
              <p className={styles.serviceList__description}>
                Automotive sensors are devices used to sense and collect information about the vehicle's surroundings to support autopilot and improve driving safety.
              </p>
              <p className={styles.serviceList__price}>$300 / 6 months</p>
              <button className={styles.serviceList__more} onClick={() => window.location.href = '/admin/service-detail'}>View more</button>
            </div>
          </div>
        </div>
        <div className={styles.serviceList__pagination}>
          <button className={styles.serviceList__pageLink} onClick={() => window.location.href = '/page/1'}>1</button>
          <button className={styles.serviceList__pageLink} onClick={() => window.location.href = '/page/2'}>2</button>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default ServiceList;
