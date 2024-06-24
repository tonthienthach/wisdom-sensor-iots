import React from 'react'
import './mypurchase.css'

const MyPurchase = () => {
  return (
    <div className="container">
  <div className="left-sidebar">
    <div className="user-row">
      <div className="eclip" />
      <div className="user-details">
        <span className="username">Username</span>
        <span className="user-id">ID: 12345</span>
      </div>
    </div>
    <div className="menu-item">
      <i className="far fa-user" />
      <span>My Profile</span>
    </div>
    <div className="menu-item">
      <i className="fas fa-shopping-cart orders-icon" />
      <span style={{ color: "red" }}>My Purchase</span>
    </div>
    <div className="menu-item">
      <i className="fa fa-bell" />
      <span>Notifications</span>
    </div>
    <div className="menu-item">
      <i className="fa fa-ticket" />
      <span>My Promotion</span>
    </div>
    <div className="menu-item">
      <i className="fas fa-file-contract contract-icon" />
      <span>My Subcribe Service Plan</span>
    </div>
    <div className="menu-item">
      <i className="fa fa-id-card" />
      <span>My Contract</span>
    </div>
    <div className="menu-item">
      <i className="fa fa-exclamation-triangle" />
      <span>Help center</span>
    </div>
    <div className="menu-item">
      <i className="fa fa-sign-out" />
      <span>Log out</span>
    </div>
  </div>
  <div className="main-content">
    <div className="filter-bar">
      <button className="filter-button">ALL</button>
      <button className="filter-button">Processing</button>
      <button className="filter-button">Complete</button>
      <button className="filter-button">Cancelled</button>
    </div>
    <div className="search-bar">
      <button className="search-icon-button">
        <img src="../../../images/Rectangle 343.png" alt="Search Icon" />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="You can search by service package Id or service package name"
      />
    </div>
    <div className="order-list">
      <div className="order-item">
        <div className="order-header">
          <img
            src="../../../images/Delivery.png"
            alt="Delivery"
            className="delivery-icon"
          />
          <span style={{ color: "blue" }}>The order was delivered</span>
          <span className="status processing">Processing</span>
        </div>
        <hr className="custom-line" />
        <div className="order-details">
          <img
            src="../../../images/Fire Alarm.png"
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
          <button className="contact-button">BUY AGAIN</button>
        </div>
      </div>
      {/* Repeat order-item for additional orders */}
    </div>
    <div className="pagination">
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