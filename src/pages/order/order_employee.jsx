import React from 'react';
import styles from "./order_employee.module.css"
import  Delivery from "../../assets/Delivery.png" ;
import  orderalarm from "../../assets/fire-alarm-sensor.png" ;
function OrderEmplpoyee() {
    return (
        <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div className={styles.eclip}></div>
            <div className={styles.username}>Username</div>
            <div className={styles.myOrders}>My Orders</div>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.selectButton}>Select</button>
            <button className={styles.radiusButton}>Radius</button>
            <button className={styles.printButton}>Print</button>
          </div>
          <div className={styles.order}>
            <div className={styles.orderId}>Order #12345</div>
            <div className={styles.orderImage}></div>
            <div className={styles.orderStatus}>Status</div>
            <div className={styles.orderProcessing}>Processing</div>
          </div>
          <div className={styles.orderLine}></div>
          <div className={styles.orderDetails}>
            <div className={styles.orderProductImage}></div>
            <div className={styles.orderProductDescription}>
              <div className={styles.orderProductName}>Product Name</div>
              <div className={styles.orderProductQuantity}>Quantity</div>
              <div className={styles.orderProductPrice}>$100.00</div>
            </div>
          </div>
          <div className={styles.orderTotal}>
            <div>Total</div>
            <div className={styles.totalPrice}>$100.00</div>
          </div>
          <button className={styles.detailButton}>Details</button>
        </div>
      </div>
    );
  };
export default OrderEmplpoyee;