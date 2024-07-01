import React from 'react';
import './order_detail_review.css';
import Header from '../header/header';
import Footer from '../../../components/user/Footer/Footer';

const OrderDetail = () => {
  return (
    <div>
      <div className="row1">
        <div className="order-detail">ORDER DETAIL REVIEW</div>
      </div>
      <div className="container-main">
        <div className="container-order-detail">
          <div className="row">
            <img className="medium-image" src="../../../images/OrderIcon.png" alt="Order" />
            <div className="order-details">
              <div className="order-date">Order Date: 28/02/2024 - 9:24:47</div>
            </div>
            <img className="delivery-image" src="../../../images/Delivery.png" alt="Delivery" />
            <div className="expected-date">Expected Date: 02/03/2024</div>
          </div>
          <div className="products-container">
            <p>Product List</p>
            <button className="package-button">
              <img src="../../../images/Rectangle 310.png" alt="Image Icon" className="icon-image" />
              Packed
            </button>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Discount</th>
                  <th>Ship Cost</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
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
          <div className="payment-info">
            <p className="payment-title">PAYMENT INFORMATION</p>
            <p>Customer Name: Nguyen Cao Danh</p>
            <p>Payment Method: Paypal</p>
            <p>Address: 760 Nguyen Duy Trinh Street, Binh Trung Dong Ward, District 2, Ho Chi Minh City.</p>
            <p>Phone: (+84) 78 394 6574</p>
            <p className="paid-status">PAID</p>
          </div>
        </div>
        <img className="review-image" src="../../../images/image 18.png" alt="Review" />
      </div>
    </div>
  );
};

export default OrderDetail;
