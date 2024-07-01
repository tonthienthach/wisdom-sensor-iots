import React, { useEffect } from 'react';
import '../change_yourpassword/change_yourpassword.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

const ChangePassword = () => {
//   useEffect(() => {
//     fetch('../../../html/employee_setting/footer_setting/footer_setting.html')
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById('footer-placeholder').innerHTML = data;
//       });

//     document.getElementById('confirmPasswordButton').addEventListener('click', function() {
//       window.location.href = '../../../html/employee_setting/login/login.html';
//     });
//   }, []);

  return (
    <>
      {/* <header className="header">
        <img src="../../../images/logo.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">FORGOT PASSWORD</h1>
      </header> */}
      <div className="changepassword-container">
        <div className="changepassword">
          <div>
            <p className="changepassword-text">Change your password</p>
          </div>
          <div className="input-group mb-3">
            <input className="form-control" type="password" placeholder="New password" />
            <div>
            <input className="form-control" type="password" placeholder="Re-enter new password" />
          </div>
          <button className="btn btn-primary button-changepassword" id="confirmPasswordButton">
            Confirm Password
          </button>
          </div>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </>
  );
}

export default ChangePassword;
