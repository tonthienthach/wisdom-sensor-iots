import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './change_password.css';

const ChangePassword = () => {
  useEffect(() => {
    fetch('../../../html/admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });

    document.getElementById('confirmPasswordButton').addEventListener('click', function() {
      window.location.href = '../../../html/admin/login/login_admin.html';
    });
  }, []);

  return (
    <div className="change-password__background">
      <div className="change-password__container">
        <div className="change-password__box">
          <div>
            <p className="change-password__text">Change your password</p>
          </div>
          <div className="change-password__input-group input-group mb-3">
            <input className="form-control change-password__input" type="password" placeholder="New password" />
          </div>
          <div>
            <input className="form-control change-password__input" type="password" placeholder="Re-enter new password" />
          </div>
          <button className="btn btn-primary change-password__button" id="confirmPasswordButton">Confirm Password</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
