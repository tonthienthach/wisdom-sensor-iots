import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './login_admin.css';

class LoginPage extends React.Component {
  togglePassword = () => {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.login__toggle-password i');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordField.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
  };

  navigateToHome = () => {
    // Implement navigation logic here
  };

  componentDidMount() {
    fetch('../../admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });

    document
      .getElementById('forgot-password-link')
      .addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '../../../html/admin/forgot_password/forgot_password.html';
      });
  }

  render() {
    return (
      <div className="background-wrapper">
        <div className="login__container">
          <h2 style={{ marginTop: '10%' }}>Sign In</h2>
          <div className="login__form-group">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="User Name" required />
          </div>
          <div className="login__form-group">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" id="password" required />
            <span className="login__toggle-password" onClick={this.togglePassword}>
              <i className="fa fa-eye"></i>
            </span>
          </div>
          <div className="login__forgot-password">
            <a href="#" id="forgot-password-link">
              Forgot password?
            </a>
          </div>
          <button className="login__btn" type="submit" onClick={this.navigateToHome}>
            Login
          </button>
          <div id="footer-placeholder" className="footer"></div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
