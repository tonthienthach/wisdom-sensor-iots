import React from 'react';
import UserMenu from '../menu/UserMenu'; // Đường dẫn tới thành phần UserMenu
import styles from './Mycontractdetail.module.css';

const MyContractDetail = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.menuContainer}>
        <UserMenu />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.contract}>
          <h1>CONTRACT</h1>
          <p>
            <strong>Customer:</strong> Nguyen Cao Danh
          </p>
          <p>
            <strong>Service package:</strong> IoT sensor package
          </p>
          <p>
            <strong>Supplier:</strong> Wisdom Engineering and Business Solutions
          </p>
          <p>
            <strong>Start date:</strong> 02/03/2024
          </p>
          <p>
            <strong>End date:</strong> 02/09/2024
          </p>
          <p>Party A (Customer) agrees with the terms given by Party B (Supplier).</p>
        </div>
      </div>
    </div>
  );
};

export default MyContractDetail;
