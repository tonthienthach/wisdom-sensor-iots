import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './forgot_password.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordPage = () => {
 

    return (
        <div className="forgot-password">
            <header className="forgot-password__header">
                <img src={logo} alt="Logo" className="forgot-password__header-logo" />
                <h1 className="forgot-password__header-title">FORGOT PASSWORD</h1>
            </header>

            <div className="forgot-password__container">
                <div className="row">
                    <img className="forgot-password__background" loading="lazy" />
                    <div className="forgot-password__form">
                        <p className="forgot-password__title">Forgot password</p>
                        <p className="forgot-password__subtitle">
                            Select how we can contact you for reset password
                        </p>
                        <div className="forgot-password__icon-container">
                            <FontAwesomeIcon icon={faSyncAlt} className="forgot-password__icon" />
                            <p className="forgot-password__icon-text">Forgot password</p>
                        </div>
                        <div className="forgot-password__input-icon-container">
                            <FontAwesomeIcon icon={faUser} className="forgot-password__input-icon" />
                            <input
                                className="forgot-password__input-username"
                                type="text"
                                required
                            />
                            <span className="forgot-password__custom-placeholder">
                                UserName <br />
                                The code will be sent through your email
                            </span>
                        </div>
                        <button className="forgot-password__button-send" id="sendButton">SEND</button>
                        <button className="forgot-password__button-cancel">CANCEL</button>
                    </div>
                </div>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default ForgotPasswordPage;
