import React, { useEffect } from 'react';
import './add_employee.css';

const AddEmployee = () => {
    
    const togglePasswordVisibility = (icon) => {
        const passwordField = icon.previousElementSibling;
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    };

    return (
        <div>
            <div id="header-placeholder"></div>
            <main>
                <div className="body-container">
                    <img src="../../images/logo.png" alt="Sample Image" className="sample-image" />
                    <div className="form-container">
                        <h2>Add Employee</h2>
                        <form>
                            <div className="form-row">
                                <div className="form-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div className="form-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="form-field">
                                <i className="fas fa-phone"></i>
                                <input type="tel" placeholder="Phone" />
                            </div>
                            <div className="form-row">
                                <div className="form-field">
                                    <i className="fas fa-calendar-alt"></i>
                                    <input type="text" placeholder="dd/mm/yyyy" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                                </div>
                                <div className="form-field gender-field">
                                    <label><input type="radio" name="gender" value="male" /> MALE</label>
                                    <label><input type="radio" name="gender" value="female" /> FEMALE</label>
                                </div>
                            </div>
                            <div className="form-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="User Name" />
                            </div>
                            <div className="form-field password-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                                <i className="fas fa-eye toggle-password" onClick={(e) => togglePasswordVisibility(e.target)}></i>
                            </div>
                            <div className="form-field">
                                <i className="fas fa-briefcase"></i>
                                <select>
                                    <option value="staff">Staff</option>
                                    <option value="manager">Manager</option>
                                    <option value="security">Security</option>
                                </select>
                            </div>
                            <a href="../admin/listemployee" className="add-link">ADD</a>
                        </form>
                    </div>
                </div>
            </main>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default AddEmployee;
