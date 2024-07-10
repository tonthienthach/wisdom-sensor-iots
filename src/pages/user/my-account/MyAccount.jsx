import React from 'react';
import './Myaccount.css';
import UserMenu from '../menu/UserMenu'; // Đường dẫn tới UserMenu

const MyAccount = () => {
  return (
    <div className="my-account__main-container">
        <UserMenu /> {/* Sử dụng UserMenu ở đây */}
        <div className="my-account__profile-container">
            <div className="my-account__profile-heading">
                <div className="my-account__profile-title">My Profile</div>
                <div className="my-account__profile-description">Manage and protect your account</div>
            </div>
            <hr className="my-account__divider" />
            <div className="my-account__profile-details">
                <div className="my-account__detail-row">
                    <div className="my-account__detail-label">Name:</div>
                    <div className="my-account__detail-value">
                        <input type="text" defaultValue="Nguyễn Cao Danh" />
                    </div>
                </div>
                <div className="my-account__detail-row">
                    <div className="my-account__detail-label">Email:</div>
                    <div className="my-account__detail-value">danh******@gmail.com</div>
                    <button className="my-account__edit-button">Change</button>
                </div>
                <div className="my-account__detail-row">
                    <div className="my-account__detail-label">Phone:</div>
                    <div className="my-account__detail-value">********35</div>
                    <button className="my-account__edit-button">Change</button>
                </div>
                <div className="my-account__detail-row">
                    <div className="my-account__detail-label">Gender:</div>
                    <div className="my-account__detail-value">
                        <input type="radio" id="male" name="gender" defaultValue="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" defaultValue="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="my-account__detail-row">
                    <div className="my-account__detail-label">Birthday:</div>
                    <div className="my-account__birthday-inputs">
                        <select className="my-account__birthday-input" id="day">
                            <option value="" disabled="" selected="">2</option>
                            {/* Thêm các option từ 1 đến 31 */}
                        </select>
                        <select className="my-account__birthday-input" id="month">
                            <option value="" disabled="" selected="">12</option>
                            {/* Thêm các option từ 1 đến 12 */}
                        </select>
                        <select className="my-account__birthday-input" id="year">
                            <option value="" disabled="" selected="">2002</option>
                            {/* Thêm các option từ 1900 đến năm hiện tại */}
                        </select>
                    </div>
                </div>
                <div className="my-account__action-buttons">
                    <div className="my-account__button-container">
                        <button className="my-account__save-button">Save</button>
                    </div>
                </div>
            </div>
            <div className="my-account__profile-image">
                <input type="file" id="file-input" className="my-account__file-input"/>
                <label htmlFor="file-input" className="my-account__file-input-label">Select Image</label>
                <div className="my-account__file-info">
                    <p>File size: maximum 1 MB</p>
                    <p>File extension: JPEG, PNG</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyAccount;
