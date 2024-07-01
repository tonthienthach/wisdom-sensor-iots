import './header.css';

const Header = () => {
//   useEffect(() => {
//     const currentPage = window.location.pathname; // Lấy đường dẫn của trang hiện tại
//     const links = document.querySelectorAll('.nav-menu a');

//     links.forEach(link => {
//       const linkPath = link.getAttribute('href'); // Lấy đường dẫn của từng liên kết

//       // Nếu đường dẫn của liên kết trùng với đường dẫn của trang hiện tại
//       // thì thêm lớp 'active' cho liên kết đó
//       if (linkPath === currentPage) {
//         link.classList.add('active');
//       }
//     });
//   }, []);

  return (
    <header>
      <div className="header-container">
        <img src="../../../images/logo.png" alt="Logo" className="logo1" />
        <nav className="nav-menu">
          <a href="../../../static/html/admin/employee/list_employee.html" className="nav-link">HOME</a>
          <a href="../../../static/html/admin/customer/customer_list.html" className="nav-link">ABOUT</a>
          <a href="../../../static/html/admin/service-list/service-list.html" className="nav-link">SERVICE PACK</a>
          <a href="../../../static/html/admin/contract/contract_list.html" className="nav-link">CONTACT</a>
        </nav>
        <div className="icons">
          <span className="icon">🔍</span>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
        <button className="language-switch">VI/EN</button>
      </div>
    </header>
  );
};

export default Header;
