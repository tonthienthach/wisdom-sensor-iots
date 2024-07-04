import React from 'react';
import styles from './AdminFooter.module.css';

const AdminFooter = ({ className }) => (
  <footer className={`${styles.adminFooterContainer} ${className}`}>
    <p>© 2023. All rights reserved. - <a href="#">Privacy Policy</a> - <a href="#">Terms & Conditions</a></p>
  </footer>
);

export default AdminFooter;
