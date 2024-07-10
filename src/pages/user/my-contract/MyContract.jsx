import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Mycontract.module.css';

// Import images
import carSensorImage from '../../../assets/car-sensor.png';
import fireAlarmImage from '../../../assets/Fire Alarm.png';
import UserMenu from '../menu/UserMenu';

const MyContract = () => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate('/user/my-contract-detail'); // Điều hướng đến trang chi tiết
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.menuContainer}>
        <UserMenu />
      </div>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="You can search by contact name"
          className={styles.searchBar}
        />
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={carSensorImage} alt="Car sensor package" />
          </div>
          <div className={styles.details}>
            <p>Car sensor package</p>
            <button onClick={navigateToDetail}>Review the contract</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={fireAlarmImage} alt="IoT sensor package" />
          </div>
          <div className={styles.details}>
            <p>IoT sensor package</p>
            <button onClick={navigateToDetail}>Review the contract</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContract;
