import './Header.css'
import image from './logo.jpg';
function Header() {
    return <>
        <header>
            <div className="header-container">
            <div>
                    <img
                        className="logo1"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
                <nav className="nav-menu">
                    <a href="../../../html/user/my_account/profile.html" className="nav-link">
                        Home
                    </a>
                    <a
                        href="../../../html/user/service/servicelist.html"
                        className="nav-link"
                    >
                        Service Pack
                    </a>
                    <a
                        href="../../../static/html/admin/contract/contract_list.html"
                        className="nav-link"
                    >
                        Contact
                    </a>
                </nav>
                <div className="icons">
                    <span className="icon">
                        <i className="fas fa-search" />
                    </span>
                    <span className="icon">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="icon">
                        <i className="fas fa-user" />
                    </span>
                </div>
                <button className="language-switch">VI/EN</button>
            </div>
        </header>
    </>
}
export default Header; 


