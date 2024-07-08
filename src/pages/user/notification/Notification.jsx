import React from 'react';
import styles from './Notification.module.css'
const Notification = () => {
  return (
    <div className={styles.mainContainer}>
      <div id={styles.menuContainer} />
      <div className={styles.notificationContainer}>
        <div className={styles.notificationHeader}>Today</div>
        <ul className={styles.notificationList}>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
        </ul>
        <div className={styles.notificationHeader}>Yesterday</div>
        <ul className={styles.notificationList}>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
          <li className={styles.notificationItem}>
            <img src="../../../images/touch 2.png" alt="Fingerprint Icon" />
            <div className={styles.notificationText}>
              Service package provides fingerprint sensor device
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
