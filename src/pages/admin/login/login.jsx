import React, { useState } from 'react';
import './login.css'; // Ensure this file exists and has the necessary styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from '../../../components/user/Footer/Footer';

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Handle the login logic here
    };

    return (
        <div className="login-container">
            <h2>SIGN IN</h2>
            <div className="form-group">
                <i className="fa fa-user"></i>
                <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <i className="fa fa-lock"></i>
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="forgot-password">
                <a href="/admin/fotgotpassword">Forgot password?</a>
            </div>
            <button className="login-btn" type="submit" onClick={handleLogin}>Login</button>
            <Footer />
        </div>
    );
};

export default LoginPage;
