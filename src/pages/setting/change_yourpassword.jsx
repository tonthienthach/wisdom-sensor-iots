import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './change_yourpassword.css';

const ChangePassword = () => {
 

    return (
        <div>
            <header className="header">
                <img src="../../../images/logo.png" alt="Logo" className="header__logo" />
                <h1 className="header__title">FORGOT PASSWORD</h1>
            </header>
            <div className="changepassword-container">
                <div className="changepassword">
                    <div>
                        <p className="changepassword__text">Change your password</p>
                    </div>
                    <div className="input-group mb-3">
                        <input className="form-control" type="password" placeholder="New password" />
                    </div>
                    <div>
                        <input className="form-control" type="password" placeholder="Re-enter new password" />
                    </div>
                    <button className="btn btn-primary changepassword__button" id="confirmPasswordButton">Confirm Password</button>
                </div>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default ChangePassword;
