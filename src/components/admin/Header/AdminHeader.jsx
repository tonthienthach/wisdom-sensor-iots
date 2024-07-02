import React from 'react';
import styles from './AdminHeader.module.css';
import logo from '../../../assets/logo.png';

const AdminHeader = ({ className }) => (
  <header className={`${styles.adminHeader} ${className}`}>
    <div className={styles.adminHeaderContainer}>
      <img src={logo} alt="Logo" className={styles.adminLogo} />
      <nav className={styles.adminNavMenu}>
        <a href="#" className={styles.adminNavLink}>Home</a>
        <a href="#" className={styles.adminNavLink}>Customer</a>
        <a href="#" className={styles.adminNavLink}>Service Pack</a>
        <a href="#" className={styles.adminNavLink}>Promotion</a>
        <a href="#" className={styles.adminNavLink}>Contract</a>
      </nav>
      <div className={styles.adminIcons}>
        <i className={styles.adminIcon}>🔍</i>
        <i className={styles.adminIcon}>🔔</i>
        <i className={styles.adminIcon}>👤</i>
        <button className={styles.adminLanguageSwitch}>VI/EN</button>
      </div>
    </div>
  </header>
);

export default AdminHeader;
