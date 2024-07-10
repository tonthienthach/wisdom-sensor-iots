import styles from './register.module.css';
import image from './background.jpg'; // Ensure this path is correct
import React from 'react';
import { Link } from '@mui/material';
import { red } from '@mui/material/colors';

function RegisterPage() {
    return (
        <div>
            <div className={styles['register__container']}>
                <div>
                    <img
                        alt='BootstrapBrain Logo'
                        className={styles['register__background']}
                        loading='lazy'
                        src={image} // Use the imported image variable
                    />
                </div>
                <div className={styles['register__form']}>
                    <h className={styles['register__text']}>Register</h>
                    <div className={styles['register__first-container']}>
                        <div className={styles['register__lastname']}>
                            <input placeholder='LastName' required type='text' />
                            <span style={{ color: red }}>*</span>
                        </div>
                        <div className={styles['register__firstname']}>
                            <input placeholder='FirstName' required type='text' />
                            <span>*</span>
                        </div>
                    </div>
                    <div className={styles['register__email']}>
                        <input placeholder='Email' required type='email' />
                        <span>*</span>
                    </div>
                    <div className={styles['register__phone']}>
                        <input placeholder='Phone' required type='text' />
                        <span>*</span>
                    </div>
                    <div className={styles['register__birth']}>
                        <input placeholder='Birth' required type='datetime' />
                        <span>*</span>
                    </div>
                    <div className={styles['register__sex']}>
                        <div className={styles['form-check']}>
                            <input
                                className={styles['form-check__input']}
                                defaultChecked=''
                                defaultValue='Male'
                                id='radio1'
                                name='optradio'
                                type='radio'
                            />
                            <label className={styles['form-check__label']} htmlFor='radio1'>
                                Male
                            </label>
                        </div>
                        <div className={styles['form-check']}>
                            <input
                                className={styles['form-check__input']}
                                defaultValue='Female'
                                id='radio2'
                                name='optradio'
                                type='radio'
                            />
                            <label className={styles['form-check__label']} htmlFor='radio2'>
                                Female
                            </label>
                        </div>
                    </div>
                    <div className={styles['register__username']}>
                        <input placeholder='UserName' required type='text' />
                        <span>*</span>
                    </div>
                    <div className={styles['register__password']}>
                        <input placeholder='Password' required type='password' />
                        <span>*</span>
                    </div>
                    <button className={styles['register__button']}>Register</button>
                    <div className={styles['register__login']}>
                        <h1>Already have an account?</h1>
                        <Link to='/user/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
