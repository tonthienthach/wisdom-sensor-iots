import React, { useEffect } from 'react';
import './edit_employee.css';

const EditEmployee = () => {
    return (
        <div className="edit-employee-page">
            <div id="header-placeholder"></div>
            <div className="main-container">
                <div className="edit-employee-container">
                    <div className="left-container">
                        <div className="title-user">
                            <div className="avatar"></div>
                            <div className="username">Username</div>
                        </div>
                        <div className="btn-edit-profile">
                            <button className="edit-profile-button"><i className="fas fa-edit"></i> Edit Profile</button>
                        </div>
                        <div className="account-info">
                            <div className="section-account">
                                <div className="icon-account"><i className="fas fa-user"></i></div>
                                <div className="text-account">My Account</div>
                            </div>
                            <div className="text-profile">Profile</div>
                            <div className="change-password">Change Password</div>
                            <div className="section-notification">
                                <div className="icon-notifications"><i className="fas fa-bell"></i></div>
                                <div className="text-notifications">Notifications</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-container">
                    <div className="profile-heading">
                        <span className="profile-title">My Profile</span>
                        <p className="profile-description">Manage and protect your account</p>
                    </div>
                    <hr className="divider" />
                    <div className="profile-details">
                        <div className="detail-row">
                            <div className="detail-label">Name:</div>
                            <div className="detail-value">John Doe</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Email:</div>
                            <div className="detail-value email-value">john.doe@example.com</div>
                            <button className="edit-button">Change</button>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Phone:</div>
                            <div className="detail-value phone-value">123-456-7890</div>
                            <button className="edit-button">Change</button>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Address:</div>
                            <div className="detail-value address-value">123 Main St, City, Country</div>
                            <button className="edit-button">Change</button>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Gender:</div>
                            <div className="detail-value gender-value">
                                <input type="radio" id="female" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                                <input type="radio" id="male" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Birthday:</div>
                            <div className="birthday-inputs">
                                <select className="birthday-input" id="day">
                                    <option value="" disabled selected>Day</option>
                                    {/* Add options for days */}
                                </select>
                                <select className="birthday-input" id="month">
                                    <option value="" disabled selected>Month</option>
                                    {/* Add options for months */}
                                </select>
                                <select className="birthday-input" id="year">
                                    <option value="" disabled selected>Year</option>
                                    {/* Add options for years */}
                                </select>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <div className="button-container">
                                <button className="save-button">Save</button>
                                <button className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default EditEmployee;
