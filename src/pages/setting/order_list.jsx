import React, { useEffect } from 'react';
import './order_list.css';


const OrderListReview = () => {

  return (
    <>
      <div id="header-placeholder"></div>
      <div className="container">
        {/* Search Bar */}
        <div className="search-bar">
          <img
            src="../../../images/Rectangle 343.png"
            alt="Search Icon"
            className="search-bar__icon"
          />
          <div className="search-bar__text">ID Order, Name Customer...</div>
        </div>

        {/* Header */}
        <div className="header-row">
          <div className="header-row__title">ORDER LIST REVIEW</div>
        </div>

        {/* Order List Table */}
        <div className="order-list">
          <table className="order-list__table">
            <thead className="order-list__thead">
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
            <tbody className="order-list__tbody">
              <tr className="order-list__row">
                <td>#1</td>
                <td>Nguyen Cao Danh</td>
                <td>
                  <button className="button button--progress">Progressing</button>
                </td>
                <td>$260</td>
                <td>28/02/2024</td>
                <td>01/03/2024</td>
                <td>
                  <button className="button button--paid">PAID</button>
                </td>
                <td>
                  <button className="button button--detail">DETAIL</button>
                </td>
              </tr>
              <tr className="order-list__row">
                <td>#2</td>
                <td>Tran Quang Huy</td>
                <td>
                  <button className="button button--complete">Complete</button>
                </td>
                <td></td>
                <td>31/01/2024</td>
                <td>03/02/2024</td>
                <td>
                  <button className="button button--paid">PAID</button>
                </td>
                <td>
                  <button className="button button--detail">DETAIL</button>
                </td>
              </tr>
              {/* Repeat for other orders */}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <a href="#" className="pagination__link">1</a>
          <a href="#" className="pagination__link">2</a>
          <a href="#" className="pagination__link">3</a>
          <a href="#" className="pagination__link">4</a>
          <a href="#" className="pagination__link">5</a>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </>
  );
};

export default OrderListReview;
