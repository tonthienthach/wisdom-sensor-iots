import React from 'react'
import styles from './Mypurchase.module.css'

const MyPurchase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        <div className={styles.userRow}>
          <div className={styles.eclip} />
          <div className={styles.userDetails}>
            <span className={styles.username}>Username</span>
            <span className={styles.userId}>ID: 12345</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <i className="far fa-user" />
          <span>My Profile</span>
        </div>
        <div className={styles.menuItem}>
          <i className={`fas fa-shopping-cart ${styles.ordersIcon}`} />
          <span style={{ color: "red" }}>My Purchase</span>
        </div>
        <div className={styles.menuItem}>
          <i className="fa fa-bell" />
          <span>Notifications</span>
        </div>
        <div className={styles.menuItem}>
          <i className="fa fa-ticket" />
          <span>My Promotion</span>
        </div>
        <div className={styles.menuItem}>
          <i className={`fas fa-file-contract ${styles.contractIcon}`} />
          <span>My Subcribe Service Plan</span>
        </div>
        <div className={styles.menuItem}>
          <i className="fa fa-id-card" />
          <span>My Contract</span>
        </div>
        <div className={styles.menuItem}>
          <i className="fa fa-exclamation-triangle" />
          <span>Help center</span>
        </div>
        <div className={styles.menuItem}>
          <i className="fa fa-sign-out" />
          <span>Log out</span>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.filterBar}>
          <button className={styles.filterButton}>ALL</button>
          <button className={styles.filterButton}>Processing</button>
          <button className={styles.filterButton}>Complete</button>
          <button className={styles.filterButton}>Cancelled</button>
        </div>
        <div className={styles.searchBar}>
          <button className={styles.searchIconButton}>
            <img src="../../../images/Rectangle 343.png" alt="Search Icon" />
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
                src="../../../images/Delivery.png"
                alt="Delivery"
                className={styles.deliveryIcon}
              />
              <span style={{ color: "blue" }}>The order was delivered</span>
              <span className={styles.statusProcessing}>Processing</span>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <img
                src="../../../images/Fire Alarm.png"
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
  )
}

export default MyPurchase
