import './Mypurchaseprocessing.css';
import image from './FireAlarm.jpg';
import image2 from './Delivery.jpg';
import image3 from './Search.jpg';

import React from 'react';

function MyPurchaseProcessingPage() {
    return (
  <>
    <div className="container">
  <div className="left-sidebar">
    <div className="user-row">
      <div className="eclip" />
      <div className="user-details">
        <span className="username">Username</span>
        <span className="user-id">Edit profile</span>
      </div>
    </div>
    <div className="menu-item">
      <i className="far fa-user" />
      <span>My Account</span>
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
      <div>
                    <img
                        className="icon__image"
                        loading="lazy"
                        src= {image3}
                        alt="BootstrapBrain Logo"
                    />
                </div>
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="You can search by service package id or name"
      />
    </div>
    <div className="order-list">
      <div className="order-item">
        <div className="order-header">
        <div>
                    <img
                        className="icon__image"
                        loading="lazy"
                        src= {image2}
                        alt="BootstrapBrain Logo"
                    />
                </div>
          <span style={{ color: "blue" }}>The order was delivered</span>
          <span className="status processing">Processing</span>
        </div>
        <hr className="custom-line" />
        <div className="order-details">
        <div>
                    <img
                        className="product__image"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
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

  </>

    );
}

export default MyPurchaseProcessingPage;
