import React from 'react';
import styles from './changepassword.module.css';

function ChangePasswordPage() {
  return (
    <div className={styles['change-password__container']}>
      <div className={styles['change-password__content']}>
        <h1 className={styles['change-password__text']}>Change your password</h1>
        <div className={`${styles['change-password__input-group']} mb-3`}>
          <div className={styles['change-password__input-icon']}>
            <i className="fa fa-lock" />
          </div>
          <input
            className={`${styles['change-password__form-control']} form-control`}
            id="new-password"
            type="password"
            placeholder="New password"
          />
          <div className={styles['change-password__input-icon-right']}>
            <i className="fa fa-eye toggle-password" data-toggle="new-password" />
          </div>
        </div>
        <div className={`${styles['change-password__input-group']} mb-3`}>
          <div className={styles['change-password__input-icon']}>
            <i className="fa fa-lock" />
          </div>
          <input
            className={`${styles['change-password__form-control']} form-control`}
            id="confirm-password"
            type="password"
            placeholder="Re-enter new password"
          />
          <div className={styles['change-password__input-icon-right']}>
            <i className="fa fa-eye toggle-password" data-toggle="confirm-password" />
          </div>
        </div>
        <button className={styles['change-password__button']} id="confirmPasswordBtn">Confirm Password</button>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
