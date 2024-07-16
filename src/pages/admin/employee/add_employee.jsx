import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './add_employee.css';
import logo from '../../../assets/logo.png'; // Adjust the path as necessary

const AddEmployee = () => {
  useEffect(() => {
    fetch('../../admin/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    fetch('../../admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }, []);

  const togglePasswordVisibility = (icon) => {
    const passwordField = icon.previousElementSibling;
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  };

  return (
    <div className="add-employee">
      <div id="header-placeholder"></div>
      <main>
        <div className="add-employee__body-container">
          <img src={logo} alt="Sample Image" className="add-employee__sample-image" />
          <div className="add-employee__form-container">
            <h2 className="add-employee__title">Add Employee</h2>
            <form>
              <div className="add-employee__form-row">
                <div className="add-employee__form-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Last Name" className="add-employee__input" />
                </div>
                <div className="add-employee__form-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="First Name" className="add-employee__input" />
                </div>
              </div>
              <div className="add-employee__form-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" className="add-employee__input" />
              </div>
              <div className="add-employee__form-field">
                <i className="fas fa-phone"></i>
                <input type="tel" placeholder="Phone" className="add-employee__input" />
              </div>
              <div className="add-employee__form-row">
                <div className="add-employee__form-field">
                  <i className="fas fa-calendar-alt"></i>
                  <input type="text" placeholder="dd/mm/yyyy" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} className="add-employee__input" />
                </div>
                <div className="add-employee__form-field add-employee__form-field--gender">
                  <label className="add-employee__label"><input type="radio" name="gender" value="male" /> MALE</label>
                  <label className="add-employee__label"><input type="radio" name="gender" value="female" /> FEMALE</label>
                </div>
              </div>
              <div className="add-employee__form-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="User Name" className="add-employee__input" />
              </div>
              <div className="add-employee__form-field add-employee__form-field--password">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" className="add-employee__input" />
                <i className="fas fa-eye add-employee__toggle-password" onClick={(e) => togglePasswordVisibility(e.target)}></i>
              </div>
              <div className="add-employee__form-field">
                <i className="fas fa-briefcase"></i>
                <select className="add-employee__select">
                  <option value="staff">Staff</option>
                  <option value="manager">Manager</option>
                  <option value="security">Security</option>
                </select>
              </div>
              <a href="../employee/list_employee.html" className="add-employee__add-link">ADD</a>
            </form>
          </div>
        </div>
      </main>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default AddEmployee;
