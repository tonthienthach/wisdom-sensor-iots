import React from 'react'
import styles from './MypurchaseDetail.module.css'

const MyPurchaseDetail = () => {
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
        <div className={styles.orderList}>
          <div className={styles.orderItem}>
            <div className={styles.orderHeader}>
              <img src="../../../images/Back.png" alt="Back" />
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <img src="../../../images/Purchase Order.png" alt="Purchase" />
              <hr className={styles.orderLine} />
              <img
                src="../../../images/Delivery.png"
                alt="Delivery"
                className={styles.deliveryIcon}
              />
              <hr className={styles.orderLine} />
              <img src="../../../images/Receive Dollar.png" alt="Receive" />
              <hr className={styles.orderLine} />
              <img src="../../../images/Settings.png" alt="Settings" />
              <hr className={styles.orderLine} />
              <img src="../../../images/Star.png" alt="Star" />
            </div>
            <div className={styles.orderDetails}>
              <h3>Ordered</h3>
              <h3>Shipped</h3>
              <h3>Receive</h3>
              <h3>Setting</h3>
              <h3>Complete</h3>
            </div>
            <div className={styles.orderDetails}>
              <p>20/02/2024 12:00</p>
              <p>20/02/2024 15:00</p>
              <p>21/02/2024 15:00</p>
              <p>21/02/2024 15:30</p>
              <p>21/02/2024 17:00</p>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderActions}>
              <button className={styles.contactButton}>BUY AGAIN</button>
            </div>
          </div>
          <div className={styles.orderItem}>
            <h1 style={{ color: "red" }}>Delivery Address</h1>
            <p>Nguyen Cao Danh</p>
            <p>(+84)</p>
            <p>909123456</p>
            <p>(+84) 909123456 95 TGS Qsa Binh Duong</p>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <img src="../../../images/Ellipse 16.png" alt="Ellipse" />
              <hr className={styles.orderLine} />
              <img src="../../../images/Ellipse 16.png" alt="Ellipse" />
              <hr className={styles.orderLine} />
              <img src="../../../images/Ellipse 16.png" alt="Ellipse" />
              <hr className={styles.orderLine} />
              <img src="../../../images/Done.png" alt="Done" />
            </div>
            <div className={styles.orderDetails}>
              <p>20/02/2024 12:00</p>
              <p>20/02/2024 15:00</p>
              <p>21/02/2024 15:00</p>
              <p>21/02/2024 17:00</p>
            </div>
            <div className={styles.orderDetails}>
              <p>The Order fire alarm sensor package.</p>
              <p>Fire alarm sensor package delivered.</p>
              <p>It has been received and installation proceeds.</p>
              <p>The order was delivered successfully.</p>
            </div>
            <div className={styles.orderDetails}>
              <p />
              <p />
              <p />
              <p>Recipient: Nguyen Cao Danh</p>
            </div>
          </div>
          <div className={styles.orderItem}>
            <div className={styles.orderHeader}>
              <img
                src="../../../images/Delivery.png"
                alt="Delivery"
                className={styles.deliveryIcon}
              />
              <span style={{ color: "blue" }}>
                The order was delivered successfully
              </span>
              <span className={styles.statusProcessing}>Complete</span>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <img
                src="../../../images/IoT.png"
                alt="Product"
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <span>IoT sensor package</span>
                <span className={styles.priceDuration}>$320</span>
                <span>x1</span>
              </div>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <div className={styles.productInfo}>
                <span>Merchandise Subtotal</span>
                <span className={styles.priceDuration}>$320</span>
                <span>Shipping Fee</span>
                <span className={styles.priceDuration}>$10</span>
                <span>Service discount</span>
                <span className={styles.priceDuration}>-$30</span>
              </div>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <div className={styles.productInfo}>
                <span>Order Total</span>
                <span className={styles.priceDuration}>$300</span>
              </div>
            </div>
            <hr className={styles.customLine} />
            <div className={styles.orderDetails}>
              <div className={styles.productInfo}>
                <span>Payment method</span>
                <span className={styles.priceDuration}>Pay on delivery(COD)</span>
              </div>
            </div>
          </div>
          {/* Repeat order-item for additional orders */}
        </div>
      </div>
    </div>
  )
}

export default MyPurchaseDetail
