function Header() {
    return <>
        <header>
            <div className="header-container">
                <img src="../../../images/logo.png" alt="Logo" className="logo1" />
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
            </header>
        </div>
    )
}
export default Header; 