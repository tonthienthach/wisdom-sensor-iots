import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../../api/auth/authAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import styles from './Login.module.css';

function Login() {
    const [credentials, setCredentials] = useState({
        userName: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await login(credentials);
            console.log('log in success', data);
            navigate('/user/my-account'); // Điều hướng đến trang my-account
        } catch (error) {
            console.log('login error', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.inputlogin}>
                <div className={styles.textlogin}>
                    <p>Login</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputgroup}>
                        <div className={styles.inputgrouptext}>
                            <FontAwesomeIcon icon={faUser} className={styles.inputicon} />
                        </div>
                        <input
                            className={`${styles.loginusername} form-control`}
                            type="text"
                            name="userName"
                            value={credentials.userName}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className={styles.inputgroup}>
                        <div className={styles.inputgrouptext}>
                            <FontAwesomeIcon icon={faLock} className={styles.inputicon} />
                        </div>
                        <input
                            className={`${styles.loginpassword} form-control`}
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className={styles.buttonlogind}>
                        <button className={styles.btnlogin} type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <Link to="/user/forgot-password" className={styles.forgotpassword}>
                    Forgot password?
                </Link>
                <div className={styles.linecontainer}>
                    <p className={styles.long}> ----------------- </p>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <p className={styles.long}> ----------------- </p>
                </div>
                <div className={styles.rowicon}>
                    <Button className={styles['btn-facebook']}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                            alt="Facebook"
                        />
                        Facebook
                    </Button>
                    <Button className={styles['btn-google']}>
                        <img
                            src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
                            alt="Google"
                        />
                        Google
                    </Button>
                </div>
                <div className={styles.registercontainer}>
                    <span className={styles.registercontent}>Do not have an account? </span>
                    <Link className={styles.registerlink} to="/user/register">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
