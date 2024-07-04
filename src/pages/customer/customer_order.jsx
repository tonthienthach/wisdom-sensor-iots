import React from "react";
import "./customer_order.css";
import Rectangle343 from "../../assets/Rectangle 343.png";
import Delivery from "../../assets/Delivery.png";
import FireAlarm from "../../assets/Fire Alarm.png";
function CustomerOrder (){
    return (
     
    <div className="container">
  <div className="filter-bar">
    <button className="filter-button">ALL</button>
    <button className="filter-button">Wait for pay</button>
    <button className="filter-button">Transport</button>
    <button className="filter-button">Waiting for delivery</button>
    <button className="filter-button">Complete</button>
    <button className="filter-button">Cancelled</button>
    <button className="filter-button">Return/Refund</button>
  </div>
  <div className="search-bar">
    <button className="search-icon-button">
      <img src={Rectangle343} alt="Search Icon" />
    </button>
    <input
      type="text"
      className="search-input"
      placeholder="Search by ID, Product name..."
    />
  </div>
  <div className="order-list">
    <div className="order-item">
      <div className="order-header">
        <span>ID: 14232</span>
        <img
          src={Delivery}
          alt="Delivery"
          className="delivery-icon"
        />
        <span>The order was delivered</span>
        <span className="status processing">Processing</span>
      </div>
      <hr className="custom-line" />
      <div className="order-details">
        <img
          src={FireAlarm}
          alt="Product"
          className="product-image"
        />
        <div className="product-info">
          <span>Fire alarm sensor package</span>
          <span className="price-duration">$250 / 6 months</span>
          <span>x1</span>
        </div>
      </div>
      <hr className="custom-line" />
      <div className="order-total">
        <i className="fas fa-dollar-sign" />
        <span>Order Total: $260</span>
      </div>
      <div className="order-actions">
        <button className="review-button">Review</button>
        <button className="contact-button">Contact with staff</button>
      </div>
    </div>
    {/* Repeat order-item for additional orders */}
  </div>
</div>

    
    );
}
export default CustomerOrder;