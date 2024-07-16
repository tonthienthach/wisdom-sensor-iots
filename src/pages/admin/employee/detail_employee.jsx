import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './detail_employee.css';

const EmployeeDetail = () => {
 

  const handleEditClick = () => {
    window.location.href = '../../admin/employee/edit_employee.html';
  };

  const handleContractClick = () => {
    window.location.href = '../../admin/contract/contract_detail.html';
  };

  return (
    <div className="employee-detail">
      <div id="header-placeholder"></div>
      <div className="employee-detail__container">
        <div className="employee-detail__header">
          <i className="fas fa-arrow-left"></i> Back
        </div>
        <div className="employee-detail__main">
          <div className="employee-detail__avatar"></div>
          <div className="employee-detail__info">
            <div className="employee-detail__name">NGUYEN CAO DANH</div>
            <div className="employee-detail__id">ID: 12345</div>
          </div>
        </div>

        <div className="employee-detail__divider"></div>
        <div className="employee-detail__extra-info">
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Email:</div>
            <div className="employee-detail__info-value">danhcao@gmail.com</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Phone:</div>
            <div className="employee-detail__info-value">(+84) 78 903 3386</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Address:</div>
            <div className="employee-detail__info-value">Lý Trường Kết, Hải Nam, Hải Dương, Lâm Đồng</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Gender:</div>
            <div className="employee-detail__info-value">Male</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Birthday:</div>
            <div className="employee-detail__info-value">02/02/2002</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Position:</div>
            <div className="employee-detail__info-value">Manager</div>
          </div>
          <div className="employee-detail__info-row">
            <div className="employee-detail__info-label">Department:</div>
            <div className="employee-detail__info-value">Marketing</div>
          </div>
        </div>
        <div className="employee-detail__horizontal-divider"></div>
        <div className="employee-detail__action-buttons">
          <button className="employee-detail__order-button"><i className="fas fa-shopping-cart"></i> Order</button>
          <button className="employee-detail__contract-button" onClick={handleContractClick}><i className="fas fa-file-contract"></i> Contract</button>
          <button className="employee-detail__edit-button" onClick={handleEditClick}><i className="fas fa-edit"></i> Edit</button>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default EmployeeDetail;
