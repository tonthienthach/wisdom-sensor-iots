import React from 'react';
import styles from "./order_detail_employee.module.css" ;
import BackIcon from '../../assets/Back.png';
import Don from "../../assets/Đơn.png";
import Delivery from "../../assets/Delivery.png" ;
import Rectangle310 from "../../assets/Rectangle 310.png" ;
function OrderDetailEmployee () {
    return (
        <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.elip} />
        <div className={styles.userName}>User Name</div>
        <div className={styles.orderDetail}>Order Detail</div>
      </div>
      <div className={styles.line} />
      <div className={styles.row}>
        <img className={styles.smallImage} src={BackIcon} alt="Image 1" />
        <div className={styles.backButton}>back</div>
        <button className={styles.acceptButton}>Accept</button>
      </div>
      <div className={styles.row}>
        <img className={styles.mediumImage} src={Don} alt="Image 2" />
        <div className={styles.orderDetails}>
          <div className={styles.orderId}>Order ID: 22123</div>
          <div className={styles.orderDate}>Order Date: 28/02/2024 - 9:24:47</div>
        </div>
        <img className={styles.deliveryImage} src={Delivery} alt="Delivery" />
        <div className={styles.expectedDate}>Expected Date: 02/03/2024</div>
        <button className={styles.processingButton}>Processing</button>
      </div>
      <div className={styles.productsContainer}>
        <p>Product List</p>
        <button className={styles.packageButton}>
          <img src={Rectangle310} alt="Image Icon" className={styles.iconImage} />
          Packed
        </button>
        <table className={styles.productTable}>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Discount</th>
              <th>Ship Cost</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Fire alarm sensor package</td>
              <td>x1</td>
              <td>$250</td>
              <td>$0</td>
              <td>$10</td>
              <td>$260</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.paymentInfo}>
        <p className={styles.paymentTitle}>PAYMENT INFORMATION</p>
        <p>Customer Name: Nguyen Cao Danh</p>
        <p>Payment Method: Paypal</p>
        <p>Address: 760 Nguyen Duy Trinh Street, Binh Trung Dong Ward, District 2, Ho Chi Minh City.</p>
        <p>Phone: (+84) 78 394 6574</p>
        <p className={styles.paidStatus}>PAID</p>
      </div>
    </div>
    );
}
export default OrderDetailEmployee ;