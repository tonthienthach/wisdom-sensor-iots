import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.css'
import { faBell, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/material'
import avatarPicture from '../../../assets/image.png'
function Header() {
    return (
        <div className=''>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <img
                        src={avatarPicture}
                        alt='Logo'
                        className={styles.logo1}
                    />
                    <nav className={styles.navMenu}>
                        <a
                            href='../../../html/user/my_account/profile.html'
                            className={styles.navLink}
                        >
                            Home
                        </a>
                        <a
                            href='../../../html/user/service/servicelist.html'
                            className={styles.navLink}
                        >
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
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faBell} />
                        </span>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                    <Button className={styles.languageSwitch}>VI/EN</Button>
                </div>
            </header>
        </div>
    )
}

export default Header
