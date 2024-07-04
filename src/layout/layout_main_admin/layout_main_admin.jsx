import React from 'react';
import AdminHeader from '../../components/admin/Header/AdminHeader';
import AdminFooter from '../../components/admin/Footer/AdminFooter';
import styles from './layout_main_admin.module.css'; // Import CSS Module

const AdminLayout = ({ children }) => {
    return (
      <div id="root" className={styles.root}>
        <AdminHeader />
        <main className={styles.main}>{children}</main>
        <AdminFooter />
      </div>
    );
};

export default AdminLayout;
