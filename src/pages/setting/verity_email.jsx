import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './verity_email.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const VerifyEmailPage = () => {
    useEffect(() => {
        fetch('../../../html/employee_setting/footer_setting/footer_setting.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-placeholder').innerHTML = data;
            });

        document.getElementById('verifyButton').addEventListener('click', () => {
            window.location.href = '../../../html/employee_setting/change_yourpassword/change_yourpassword.html';
        });
    }, []);

    return (
        <div className="verify-email">
            <header className="header">
                <img src={logo} alt="Logo" className="header__logo" />
                <h1 className="header__title">FORGOT PASSWORD</h1>
            </header>

            <div className="background background--blue">
                <div className="verify-email__container">
                    <div className="verify-email__content">
                        <h1 className="verify-email__heading">VERIFY EMAIL</h1>
                        <h2 className="verify-email__subheading">We have sent the code to your Email address</h2>
                        <h3 className="verify-email__email">danh*****@gmail.com</h3>
                    </div>
                    <div className="verify-email__otp-field">
                        <input type="number" className="verify-email__otp-input" />
                        <input type="number" className="verify-email__otp-input" />
                        <input type="number" className="verify-email__otp-input" />
                        <input type="number" className="verify-email__otp-input" />
                        <input type="number" className="verify-email__otp-input" />
                        <input type="number" className="verify-email__otp-input" />
                    </div>
                    <button className="verify-email__button verify-email__button--verify" id="verifyButton">Verify Code</button>
                    <button className="verify-email__button verify-email__button--send-again">Send Again</button>
                </div>
            </div>
            <div id="footer-placeholder"></div>
        </div>
    );
};

export default VerifyEmailPage;
