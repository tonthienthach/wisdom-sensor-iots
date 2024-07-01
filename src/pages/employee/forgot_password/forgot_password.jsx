import React, { useEffect } from 'react';
// import './bootstrap-5.3.3-dist/css/bootstrap.min.css';
import './forgot_password.css';
// import '../../../pages/employee/footer_setting/footer_setting.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

const ForgotPassword = () => {
//   useEffect(() => {
//     const loadFooter = async () => {
//       const response = await fetch('../../../html/employee_setting/footer_setting/footer_setting.html');
//       const data = await response.text();
//       document.getElementById('footer-placeholder').innerHTML = data;
//     };

//     loadFooter();

//     document.getElementById('sendButton').addEventListener('click', () => {
//       window.location.href = '../../../html/employee_setting/verify_email/verify_email.html';
//     });
//   }, []);

  return (
    <div>
      {/* <header className="header">
        <img src="../../../images/logo.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">FORGOT PASSWORD</h1>
      </header> */}
      <div className="Container">
          {/* <img className="background" loading="lazy" /> */}
          <div className="forgotpassword-container">
            <p className="text-forgotpassword">Forgot password</p>
            <p className="text-forgotpassword1">
              Select how we can contact you for reset password
            </p>
            <div className="icon-forgotpassword">
              <i className="fas fa-sync-alt"></i>
              <p className="icon-forgotpassword-text">Forgot password</p>
            </div>
            <div className="input-container">
              <i className="fas fa-user"></i>
              <input className="input-username" type="text" required />
              <span className="custom-placeholder">
                UserName <br />
                The code will be sent through your email
              </span>
            </div>
            <button className="button-send" id="sendButton">SEND</button>
            <button className="button-cancel">CANCEL</button>
          </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
