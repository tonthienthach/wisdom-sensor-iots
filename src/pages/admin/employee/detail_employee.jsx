import React, { useEffect } from 'react';
import './detail_employee.css';

const EmployeeDetail = () => {      
    return (
        <div>
            <div id="header-placeholder"></div>
            <div className="employee-detail-container">
                <div className="header">
                    <i className="fas fa-arrow-left"></i> Back
                </div>
                <div className="employee-detail">
                    <div className="avatar">
                        <img src="path/to/avatar.jpg" alt="Employee Avatar" />
                    </div>
                    <div className="employee-info">
                        <div className="employee-name">NGUYEN CAO DANH</div>
                        <div className="employee-id">ID: 12345</div>
                    </div>
                    <div className="sample-image-container">
                        <img src="../../images/logo.png" alt="Sample Image" className="sample-image" />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="employee-extra-info">
                    <div className="info-row">
                        <div className="info-label">Email:</div>
                        <div className="info-value">danhcao@gmail.com</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Phone:</div>
                        <div className="info-value">(+84) 78 903 3386</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Address:</div>
                        <div className="info-value">Lý Trường Kết, Hải Nam, Hải Dương, Lâm Đồng</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Gender:</div>
                        <div className="info-value">Male</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Birthday:</div>
                        <div className="info-value">02/02/2002</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Position:</div>
                        <div className="info-value">Manager</div>
                    </div>
                    <div className="info-row">
                        <div className="info-label">Department:</div>
                        <div className="info-value">Marketing</div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className="action-buttons">
                    <button className="order-button"><i className="fas fa-shopping-cart"></i> Order</button>
                    <button className="contract-button"><i className="fas fa-file-contract"></i> Contract</button>
                    <button className="edit-button"><i className="fas fa-edit"></i> Edit</button>
                </div>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default EmployeeDetail;
