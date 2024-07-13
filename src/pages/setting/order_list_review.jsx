import React, { useEffect } from 'react';
import './order_list_review.css';
import DonImage from '../../assets/Done.png';
import DeliveryImage from '../../assets/Delivery.png';
import Rectangle310Image from '../../assets/Rectangle 310.png';
import ReviewImage from '../../assets/image 18.png';

const OrderDetailReview = () => {
  useEffect(() => {
    fetch('../../admin/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    fetch('../../../html/employee_setting/footer_setting/footer_setting.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }, []);

  return (
    <>
      <div id="header-placeholder"></div>

      <div className="row1">
        <div className="order-detail">ORDER DETAIL REVIEW</div>
      </div>
      <div className="container-main">
        <div className="container">
          <div className="row">
            <img className="medium-image" src={DonImage} alt="Image 2" />
            <div className="order-details">
              <div className="order-date">Order Date: 28/02/2024 - 9:24:47</div>
            </div>
            <img className="delivery-image" src={DeliveryImage} alt="Delivery" />
            <div className="expected-date">Expected Date: 02/03/2024</div>
          </div>
          <div className="products-container">
            <p>Product List</p>
            <button className="package-button">
              <img src={Rectangle310Image} alt="Image Icon" className="icon-image" />
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
            <p className="payment-info__title">PAYMENT INFORMATION</p>
            <p>Customer Name: Nguyen Cao Danh</p>
            <p>Payment Method: Paypal</p>
            <p>Address: 760 Nguyen Duy Trinh Street, Binh Trung Dong Ward, District 2, Ho Chi Minh City.</p>
            <p>Phone: (+84) 78 394 6574</p>
            <p className="payment-info__status">PAID</p>
          </div>
        </div>
        <img className="review-image" src={ReviewImage} alt="Image 2" />
      </div>

      <div id="footer-placeholder"></div>
    </>
  );
};

export default OrderDetailReview;
