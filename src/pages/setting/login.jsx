import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Path updated
import logo from '../../assets/logo.png'; // Import the image

const LoginPage = () => {
 

    return (
        <div className="login">
            {/* Header Section */}
            <header className="login__header">
                <img src={logo} alt="Logo" className="login__header-logo" />
                <h1 className="login__header-title">LOGIN</h1>
            </header>

            <div className="login__container">
                <div className="login__input">
                    <div className="login__text">
                        <p>LOGIN</p>
                    </div>
                    <br />
                    <div>
                        <input className="login__username" type="text" placeholder="UserName" required />
                    </div>
                    <div>
                        <input className="login__password" type="password" placeholder="Password" required />
                    </div>
                    <div className="login__button-container">
                        <button className="btn btn-primary login__button" id="loginButton" type="submit">Login</button>
                    </div>
                    <a className="login__forgot" id="forgotPasswordLink">Forgot password</a>
                </div>
            </div>

            <footer id="footer-placeholder"></footer>
        </div>
    );
};

export default LoginPage;
