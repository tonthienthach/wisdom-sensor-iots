// Import the CSS module
import styles from './register.module.css'
import image from './background.jpg' // Ensure this path is correct
import React from 'react'
import { Link } from '@mui/material'
import { red } from '@mui/material/colors'

function RegisterPage() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img
                        alt='BootstrapBrain Logo'
                        className={styles.background}
                        loading='lazy'
                        src={image} // Use the imported image variable
                    />
                </div>
                <div className={styles.Register}>
                    <h className={styles['Register-text']}>Register</h>
                    <div className={styles.firstContainer}>
                        <div className={styles['Register-LastName']}>
                            <input
                                placeholder='LastName'
                                required
                                type='text'
                            />
                            <span style={{ color: red }}>*</span>
                        </div>
                        <div className={styles['Register-Firstname']}>
                            <input
                                placeholder='FirstName'
                                required
                                type='text'
                            />
                            <span>*</span>
                        </div>
                    </div>
                    <div className={styles['Register-Email']}>
                        <input placeholder='Email' required type='email' />
                        <span>*</span>
                    </div>
                    <div className={styles['Register-Phone']}>
                        <input placeholder='Phone' required type='text' />
                        <span>*</span>
                    </div>
                    <div className={styles['Register-Birth']}>
                        <input placeholder='Birth' required type='datetime' />
                        <span>*</span>
                    </div>
                    <div className={styles['Register-sex']}>
                        <div className={styles['form-check']}>
                            <input
                                className={styles['form-check-input']}
                                defaultChecked=''
                                defaultValue='Male'
                                id='radio1'
                                name='optradio'
                                type='radio'
                            />
                            <label
                                className={styles['form-check-label']}
                                htmlFor='radio1'
                            >
                                Male
                            </label>
                        </div>
                        <div className={styles['form-check']}>
                            <input
                                className={styles['form-check-input']}
                                defaultValue='Female'
                                id='radio2'
                                name='optradio'
                                type='radio'
                            />
                            <label
                                className={styles['form-check-label']}
                                htmlFor='radio2'
                            >
                                Female
                            </label>
                        </div>
                    </div>
                    <div className={styles['Register-UserName']}>
                        <input placeholder='UserName' required type='text' />
                        <span>*</span>
                    </div>
                    <div className={styles['Register-Password']}>
                        <input
                            placeholder='Password'
                            required
                            type='password'
                        />
                        <span>*</span>
                    </div>
                    <button>Register</button>
                    <div className={styles['Register-login']}>
                        <h1>Already have an account?</h1>
                        <Link to='/user/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage
