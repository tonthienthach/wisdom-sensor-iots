import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../../assets/logo.png'; // Import logo image

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <img src={logo} alt='Logo' className={styles.logo1} />
                    <nav className={styles.navMenu}>
                        <Link to='/user/my-account' className={styles.navLink}>
                            Home
                        </Link>
                        <Link to='/user/service-list' className={styles.navLink}>
                            Service Pack
                        </Link>
                        <Link to='/admin/contract-list' className={styles.navLink}>
                            Contact
                        </Link>
                    </nav>
                    <div className={styles.icons}>
                        <span className={styles.icon}>
                            <i className='fas fa-search' />
                        </span>
                        <span className={styles.icon}>
                            <i className='fas fa-bell' />
                        </span>
                        <span className={styles.icon}>
                            <i className='fas fa-user' />
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
