import React, { useEffect } from 'react';
import './changepassword.css';

const ChangePassword = () => {
    const handleConfirmPassword = () => {
        window.location.href = '../../../admin/login';
    };

    return (
        <div className="container">
            <div className="changepassword">
                <p className="changepassword-text">Change your password</p>
                <div className="input-group">
                    <input className="form-control" type="password" placeholder="New password" />
                </div>
                <div className="input-group">
                    <input className="form-control" type="password" placeholder="Re-enter new password" />
                </div>
                <button className="btn btn-primary button-changepassword" onClick={handleConfirmPassword}>
                    Confirm Password
                </button>
            </div>
           
        </div>
    );
};
<div id="footer-placeholder" className="footer"></div>
export default ChangePassword;
