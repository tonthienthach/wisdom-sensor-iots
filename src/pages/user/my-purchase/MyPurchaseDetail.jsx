import React from 'react'
import './mypurchaseDetail.css'

const MyPurchaseDetail = () => {
  return (
    <div><div className="container">
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
      <div className="order-list">
        <div className="order-item">
          <div className="order-header">
            <img src="../../../images/Back.png" alt="Back" />
          </div>
          <hr className="custom-line" />
          <div className="order-details">
            <img src="../../../images/Purchase Order.png" alt="Purchase" />
            <hr className="order-line" />
            <img
              src="../../../images/Delivery.png"
              alt="Delivery"
              className="delivery-icon"
            />
            <hr className="order-line" />
            <img src="../../../images/Receive Dollar.png" alt="Receive" />
            <hr className="order-line" />
            <img src="../../../images/Settings.png" alt="Settings" />
            <hr className="order-line" />
            <img src="../../../images/Star.png" alt="Star" />
          </div>
          <div className="order-details">
            <h3>Ordered</h3>
            <h3>Shipped</h3>
            <h3>Receive</h3>
            <h3>Setting</h3>
            <h3>Complete</h3>
          </div>
          <div className="order-details">
            <p>20/02/2024 12:00</p>
            <p>20/02/2024 15:00</p>
            <p>21/02/2024 15:00</p>
            <p>21/02/2024 15:30</p>
            <p>21/02/2024 17:00</p>
          </div>
          <hr className="custom-line" />
          <div className="order-actions">
            <button className="contact-button">BUY AGAIN</button>
          </div>
        </div>
        <div className="order-item">
          <h1 style={{ color: "red" }}>Delivery Address</h1>
          <p>Nguyen Cao Danh</p>
          <p>(+84)</p>
          <p>909123456</p>
          <p>(+84) 909123456 95 TGS Qsa Binh Duong</p>
          <hr className="custom-line" />
          <div className="order-details">
            <img src="../../../images/Ellipse 16.png" />
            <hr className="order-line" />
            <img src="../../../images/Ellipse 16.png" />
            <hr className="order-line" />
            <img src="../../../images/Ellipse 16.png" />
            <hr className="order-line" />
            <img src="../../../images/Done.png" />
          </div>
          <div className="order-details">
            <p>20/02/2024 12:00</p>
            <p>20/02/2024 15:00</p>
            <p>21/02/2024 15:00</p>
            <p>21/02/2024 17:00</p>
          </div>
          <div className="order-details">
            <p>The Order fire alarm sensor package.</p>
            <p>Fire alarm sensor package delivered.</p>
            <p>It has been received and installation proceeds.</p>
            <p>The order was delivered successfully.</p>
          </div>
          <div className="order-details">
            <p />
            <p />
            <p />
            <p>Recipient: Nguyen Cao Danh</p>
          </div>
        </div>
        <div className="order-item">
          <div className="order-header">
            <img
              src="../../../images/Delivery.png"
              alt="Delivery"
              className="delivery-icon"
            />
            <span style={{ color: "blue" }}>
              The order was delivered successfully
            </span>
            <span className="status processing">Complete</span>
          </div>
          <hr className="custom-line" />
          <div className="order-details">
            <img
              src="../../../images/IoT.png"
              alt="Product"
              className="product-image"
            />
            <div className="product-info">
              <span>IoT sensor package</span>
              <span className="price-duration">$320</span>
              <span>x1</span>
            </div>
          </div>
          <hr className="custom-line" />
          <div className="order-details">
            <div className="product-info">
              <span>Merchandise Subtotal</span>
              <span className="price-duration">$320</span>
              <span>Shipping Fee</span>
              <span className="price-duration">$10</span>
              <span>Service discount</span>
              <span className="price-duration">-$30</span>
            </div>
          </div>
          <hr className="custom-line" />
          <div className="order-details">
            <div className="product-info">
              <span>Order Total</span>
              <span className="price-duration">$300</span>
            </div>
          </div>
          <hr className="custom-line" />
          <div className="order-details">
            <div className="product-info">
              <span>Payment method</span>
              <span className="price-duration">Pay on delivery(COD)</span>
            </div>
          </div>
        </div>
        {/* Repeat order-item for additional orders */}
      </div>
    </div>
  </div>
  </div>
  )
}

export default MyPurchaseDetail