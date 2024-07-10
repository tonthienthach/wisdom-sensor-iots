import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load header
    fetch('/path/to/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    // Load footer
    fetch('/path/to/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }, []);

  const handleProfileClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    navigate('/user/my-account'); // Điều hướng đến trang MyAccount
  };
  const handleChangePasswordClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    navigate('/user/change-password'); // Điều hướng đến trang ChangePassword
  };
   const handlePromotionClick = () => {
    navigate('/user/promotions');
  };

  const handleContractClick = () => {
    navigate('/user/my-contract');
  };

  const handlePurchaseClick = () => {
    navigate('/user/my-purchase');
  };

  return (
    <div>
      {/* Header */}
      <div id="header-placeholder"></div>

      {/* Menu */}
      <div className="menu">
        <div className="user-info">
          <div className="avatar"></div>
          <div className="user-details">
            <p className="username">Username</p>
            <a href="#" className="edit-profile">Edit Profile</a>
          </div>
        </div>
        <ul className="menu-items">
          <li>
            <i className="fas fa-user"></i>
            <Link to="/user/my-account" onClick={handleProfileClick}>My Account</Link>
            <ul className="submenu">
              <li><Link to="/user/my-account" onClick={handleProfileClick}>Profile</Link></li>
              <li><Link to="/user/change-password" onClick={handleChangePasswordClick}>Change Password</Link></li>
            </ul>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
            <li><Link to="/user/my-purchase" onClick={handlePurchaseClick}>My Purchase</Link></li>
          </li>
          <li>
            <i className="fas fa-bell"></i>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <i className="fas fa-tags"></i>
            <li><Link to="/user/my-promotion" onClick={handlePromotionClick}>My Promotions</Link></li>
          </li>
          <li>
            <i className="fas fa-handshake"></i>
            <Link to="/service/servicelist">My Subscribe Service Plan</Link>
          </li>
          <li>
            <i className="fas fa-file-contract"></i>
            <li><Link to="/user/my-contract" onClick={handleContractClick}>My Contract</Link></li>
          </li>
          <li>
            <i className="fas fa-question-circle"></i>
            <Link to="/help_center">Help Center</Link>
          </li>
          <li>
            <i className="fas fa-sign-out-alt"></i>
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="footer-placeholder"></div>

      <div id="profile-content"></div>
    </div>
  );
};

export default UserMenu;
