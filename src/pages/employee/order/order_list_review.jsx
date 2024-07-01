import React, { useEffect } from 'react';
import './orderlist.css';
// import logo from '../../images/logo.png'; 
// import headerAdminHTML from '../../admin/header_admin.html'; 
// import footerSettingHTML from '../../html/employee_setting/footer_setting/footer_setting.html';  

const OrderListReview = () => {
//   useEffect(() => {
//     fetch(headerAdminHTML)
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById('header-placeholder').innerHTML = data;
//       });

//     fetch(footerSettingHTML)
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById('footer-placeholder').innerHTML = data;
//       });

//     document.querySelectorAll('.detail-button').forEach(button => {
//       button.addEventListener('click', function() {
//         window.location.href = '../../../html/employee_setting/order/order_detail_review.html';
//       });
//     });
//   }, []);

  return (
    <div className="container-order-list">
      <div className="search-bar">
        <img src="../../images/Rectangle 343.png" alt="Search Icon" className="search-icon" />
        <div className="search-text">ID Order, Name Customer...</div>
      </div>

      <div className="header-row">
        <div className="header-title">ORDER LIST REVIEW</div>
      </div>

      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Total</th>
              <th>Order S-date</th>
              <th>Order E-date</th>
              <th>Payment Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>Nguyen Cao Danh</td>
              <td><button className="progress-button">Progressing</button></td>
              <td>$260</td>
              <td>28/02/2024</td>
              <td>01/03/2024</td>
              <td><button className="paid-button">PAID</button></td>
              <td><button className="detail-button">DETAIL</button></td>
            </tr>
            <tr>
              <td>#2</td>
              <td>Tran Quang Huy</td>
              <td><button className="complete-button">Complete</button></td>
              <td></td>
              <td>31/01/2024</td>
              <td>03/02/2024</td>
              <td><button className="paid-button">PAID</button></td>
              <td><button className="detail-button">DETAIL</button></td>
            </tr>
            {}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
      </div>

      <div id="footer-placeholder"></div>
    </div>
  );
}

export default OrderListReview;
