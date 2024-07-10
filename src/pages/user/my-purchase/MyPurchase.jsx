import React from 'react';
import styles from './Mypurchase.module.css';
import SearchIcon from '../../../assets/Rectangle 343.png';
import DeliveryIcon from '../../../assets/Delivery.png';
import FireAlarmIcon from '../../../assets/Fire Alarm.png';
import UserMenu from '../menu/UserMenu'; // Đường dẫn chính xác tới UserMenu

const MyPurchase = () => {
  return (
    <div className={styles.container}>
      <UserMenu /> {/* Hiển thị menu người dùng bên trái */}
      <div className={styles.mainContent}>
        <div className={styles.filterBar}>
          <button className={styles.filterButton}>ALL</button>
          <button className={styles.filterButton}>Processing</button>
          <button className={styles.filterButton}>Complete</button>
          <button className={styles.filterButton}>Cancelled</button>
        </div>
        <div className={styles.searchBar}>
          <button className={styles.searchIconButton}>
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="You can search by service package Id or service package name"
          />
        </div>
        <div className={styles.orderList}>
          <div className={styles.orderItem}>
            <div className={styles.orderHeader}>
              <img
                src={DeliveryIcon}
                alt="Delivery"
                className={styles.deliveryIcon}
              />
              <span style={{ color: "blue" }}>The order was delivered</span>
              <span className={styles.statusProcessing}>Processing</span>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <img
                src={FireAlarmIcon}
                alt="Product"
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <span>Fire alarm sensor package</span>
                <span className={styles.priceDuration}>$250 / 6 months</span>
                <span>x1</span>
              </div>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderTotal}>
              <i className="fas fa-dollar-sign" />
              <span>Order Total: $260</span>
            </div>
            <div className={styles.orderActions}>
              <button className={styles.reviewButton}>Review</button>
              <button className={styles.contactButton}>BUY AGAIN</button>
            </div>
          </div>
          {/* Repeat order-item for additional orders */}
        </div>
        <div className={styles.pagination}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>...</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default MyPurchase;
