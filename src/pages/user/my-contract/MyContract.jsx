import React from 'react'
import styles from './Mycontract.module.css'

const MyContract = () => {
  return (
    <div className={styles.mainContainer}>
      <div id={styles.menuContainer} />
      <div className={styles.container}>
        <input
          type="text"
          placeholder="You can search by contact name"
          className={styles.searchBar}
        />
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="../../../images/car-sensor.png" alt="Car sensor package" />
          </div>
          <div className={styles.details}>
            <p>Car sensor package</p>
            <button onClick={() => navigateToDetail()}>Review the contact</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="../../../images/Fire Alarm.png" alt="IoT sensor package" />
          </div>
          <div className={styles.details}>
            <p>IoT sensor package</p>
            <button onClick={() => navigateToDetail()}>Review the contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyContract

const navigateToDetail = () => {
  // Điều hướng đến trang chi tiết
  console.log("Navigating to detail page...");
};
