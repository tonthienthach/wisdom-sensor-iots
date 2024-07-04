import React from "react";
import "./customer_detail.css";
import backIcon from '../../assets/Back.png';
import image15 from '../../assets/image 15.png';
function CustomerDetail() {
  return (
    <div>
      {/* <div id="header-placeholder" /> */}
      <div className="container">
        <div className="header">
          <img src={backIcon} className="header-image" alt="Icon" />
          <button className="back-button">Back</button>
        </div>
        <div className="main-content">
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
              <span>My Orders</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-ticket-alt voucher-icon" />
              <span>My Vouchers</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-file-contract contract-icon" />
              <span>My Contracts</span>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-title">danh1212’s Profile</div>
              <div className="membership-status">
                <img
                  src={image15}
                  className="membership-icon"
                  alt="Silver"
                />
                <span>Silver</span>
              </div>
            </div>
            <hr className="divider" />
            <div className="profile-details">
              <div className="detail-row">
                <div className="detail-label">First Name</div>
                <div className="detail-value">Danh</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Last Name</div>
                <div className="detail-value">Nguyen Cao</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Email</div>
                <div className="detail-value">danh1212@gmail.com</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Phone</div>
                <div className="detail-value">07867584956</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Address</div>
                <div className="detail-value">
                  205 Quang Trung , 14 Ward , Go Vap district
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Gender</div>
                <div className="detail-value">Male</div>
              </div>
              <div className="detail-row">
                <div className="detail-label">Birthday</div>
                <div className="detail-value">02 12 2002</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer-placeholder" /> */}
    </div>
  );
}

export default CustomerDetail;
