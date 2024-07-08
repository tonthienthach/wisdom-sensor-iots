import React from 'react';
import styles from './Mypurchasereview.module.css';
import image from './Carsensor.jpg';
import image3 from './Search.jpg';

function MyPurchaseReviewPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        <div className={styles.userRow}>
          <div className={styles.eclip} />
          <div className={styles.userDetails}>
            <span className={styles.username}>Username</span>
            <span className={styles.userId}>Edit profile</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <i className="far fa-user" />
          <span>My Account</span>
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
          <span>My Subscribe Service Plan</span>
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
          <button className={`${styles.filterButton} ${styles.active}`} style={{ color: "red" }}>
            Complete
          </button>
          <button className={styles.filterButton}>Cancelled</button>
        </div>
        <div className={styles.searchBar}>
          <button className={styles.searchIconButton}>
            <div>
              <img
                className={styles.iconImage}
                loading="lazy"
                src={image3}
                alt="Search Icon"
              />
            </div>
          </button>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="You can search by service package id or name"
          />
        </div>
        <div className={styles.orderList}>
          <div className={styles.orderItem}>
            <div className={styles.orderDetails}>
              <div>
                <img
                  className={styles.productImage}
                  loading="lazy"
                  src={image}
                  alt="Product Image"
                />
              </div>
              <div className={styles.productInfo}>
                <span>Car sensor package</span>
                <span className={styles.priceDuration}>$300 / 6 months</span>
                <span>x1</span>
              </div>
            </div>
            <hr className={styles.customLine} />
            <h3 style={{ textAlign: "center" }}>Your overall rating</h3>
            <div className={styles.reviewRating}>★★★★★</div>
            <hr className={styles.customLine} />
            <h3 style={{ textAlign: "left" }}>Add detailed review</h3>
            <div className={styles.orderTotal}>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                placeholder="Enter here"
              />
            </div>
            <div className={styles.orderActions}>
              <button className={styles.addButton}>(+) Add photo</button>
              <button className={styles.sendButton}>Send</button>
            </div>
          </div>
          {/* Repeat order-item for additional orders */}
        </div>
      </div>
    </div>
  );
}

export default MyPurchaseReviewPage;
