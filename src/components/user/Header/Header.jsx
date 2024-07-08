import styles from './header.module.css';
import logo from '../../../assets/logo.png'; // Import logo image

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <img src={logo} alt='Logo' className={styles.logo1} />
                    <nav className={styles.navMenu}>
                        <a href='../../../html/user/my_account/profile.html' className={styles.navLink}>
                            Home
                        </a>
                        <a href='../../../html/user/service/servicelist.html' className={styles.navLink}>
                            Service Pack
                        </a>
                        <a
                            href='../../../static/html/admin/contract/contract_list.html'
                            className={styles.navLink}
                        >
                            Contact
                        </a>
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
