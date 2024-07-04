import React from 'react'
import styles from './forgotPassword.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons' // Example icon
import { Button } from '@mui/material'

function ForgotPassword() {
    return (
        <div className={styles.content}>
            <img
                className={styles.imglogin}
                loading='lazy'
                src='backgroundlogin.jpg'
                alt='BootstrapBrain Logo'
            />
            <div className={styles.forgotpassword}>
                <div className={styles.title}>
                    <p className={styles.textForgotpassword}>Forgot password</p>
                    <p className={styles.textForgotpassword1}>
                        Select how we can contact you for reset password
                    </p>
                </div>
                <div className={styles.iconForgotpassword}>
                    <FontAwesomeIcon icon={faRotateRight} />
                    <span className={styles.iconForgotpasswordText}>Forgot password</span>
                </div>
                <div className={styles.username}>
                    <div className={styles.inputIconContainer}>
                        <FontAwesomeIcon icon={faRotateRight} className={styles.inputIcon} />
                        <input
                            className={styles.inputUsername}
                            id='userNameInput'
                            type='text'
                            placeholder='Username'
                            required=''
                        />
                    </div>
                    <div className={styles.btnSend}>
                        <Button>SEND</Button>
                    </div>
                </div>
                <Button className={styles.btnCancel}>CANCEL</Button>
            </div>
        </div>
    )
}

export default ForgotPassword
