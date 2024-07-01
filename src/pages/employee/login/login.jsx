import React, { useEffect } from 'react';

import './login.css';

const Login = () => {
//   useEffect(() => {
//     const forgotPasswordLink = document.getElementById('forgotPasswordLink');
//     const loginButton = document.getElementById('loginButton');

//     forgotPasswordLink.addEventListener('click', () => {
//       window.location.href = '../../../html/employee_setting/forgot_password/forgot_password.html';
//     });

//     loginButton.addEventListener('click', () => {
//       window.location.href = '../../../html/employee_setting/order_list_review/order_list_review.html';
//     });

//     // Cleanup event listeners on component unmount
//     return () => {
//       forgotPasswordLink.removeEventListener('click', () => {});
//       loginButton.removeEventListener('click', () => {});
//     };
//   }, []);

  return (
    <div>
      {/* Header Section */}
      {/* <header className="header">
        <img src="../../../images/logo.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">LOGIN</h1>
      </header> */}

      <div className="container content">
        <div className="inputlogin">
          <div className="textlogin">
            <p>LOGIN</p>
          </div>
          <br />
          <div>
            <input className="loginusername" type="text" placeholder="UserName" required />
          </div>
          <div>
            <input className="loginpassword" type="password" placeholder="Password" required />
          </div>
          <div className="buttonlogind">
            <button className="btn bsb-btn-xl btn-primary" id="loginButton" type="submit">Login</button>
          </div>
          <a className="forgotpasswordBtn" id="forgotPasswordLink">Forgot password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
