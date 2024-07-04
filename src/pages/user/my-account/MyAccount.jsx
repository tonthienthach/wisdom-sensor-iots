import React from 'react'
import './myaccount.css'

const MyAccount = () => {
  return (
    <div>
        <div className="main-container">
        <div id="menu-placeholder" /> {/* Chỗ này sẽ được thay thế bởi menu */}
        <div className="profile-container">
            <div className="profile-heading">
            <div className="profile-title">My Profile</div>
            <div className="profile-description">Manage and protect your account</div>
            </div>
            <hr className="divider" />
            <div className="profile-details">
            <div className="detail-row">
                <div className="detail-label">Name:</div>
                <div className="detail-value">
                <input type="text" defaultValue="Nguyễn Cao Danh" />
                </div>
            </div>
            <div className="detail-row">
                <div className="detail-label">Email:</div>
                <div className="detail-value email-value">danh******@gmail.com</div>
                <button className="edit-button">Change</button>
            </div>
            <div className="detail-row">
                <div className="detail-label">Phone:</div>
                <div className="detail-value phone-value">********35</div>
                <button className="edit-button">Change</button>
            </div>
            <div className="detail-row">
                <div className="detail-label">Gender:</div>
                <div className="detail-value gender-value">
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className="detail-row">
                <div className="detail-label">Birthday:</div>
                <div className="birthday-inputs">
                <select className="birthday-input" id="day">
                    <option value="" disabled="" selected="">
                    2
                    </option>
                    {/* Thêm các option từ 1 đến 31 */}
                </select>
                <select className="birthday-input" id="month">
                    <option value="" disabled="" selected="">
                    12
                    </option>
                    {/* Thêm các option từ 1 đến 12 */}
                </select>
                <select className="birthday-input" id="year">
                    <option value="" disabled="" selected="">
                    2002
                    </option>
                    {/* Thêm các option từ 1900 đến năm hiện tại */}
                </select>
                </div>
            </div>
            <div className="action-buttons">
                <div className="button-container">
                <button className="save-button">Save</button>
                </div>
            </div>
            </div>
            <div className="profile-image">
            <input type="file" id="file-input" />
            <label htmlFor="file-input">Select Image</label>
            <div className="file-info">
                <p>File size: maximum 1 MB</p>
                <p>File extension: JPEG, PNG</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyAccount