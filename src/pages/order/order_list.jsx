import React from "react";
import styles from "./order_list.module.css";
import Rectangle343 from "../../assets/Rectangle 343.png";
import Rectangle339 from "../../assets/Rectangle 339.png";

function OrderList () {
    return (
    <>
      <div id="header-placeholder" />
      <div className={styles.container}>
          {/* Search Bar */}
          <div className={styles.searchBar}>
              <img src={Rectangle343} alt="Search Icon" className={styles.searchIcon} />
              <div className={styles.searchText}>ID, Customer name, Products name...</div>
          </div>
          {/* Header */}
          <div className={styles.headerRow}>
              <img src={Rectangle339} alt="Header Image" className={styles.headerImage} />
              <div className={styles.headerTitle}>ORDER LIST</div>
          </div>
          {/* Order List Table */}
          <div className={styles.orderList}>
              <table className={styles.orderListTable}>
                  <thead>
                      <tr>
                          <th className={styles.orderListTh}>ID</th>
                          <th className={styles.orderListTh}>Customer Name</th>
                          <th className={styles.orderListTh}>Status</th>
                          <th className={styles.orderListTh}>Total</th>
                          <th className={styles.orderListTh}>Order S-date</th>
                          <th className={styles.orderListTh}>Order E-date</th>
                          <th className={styles.orderListTh}>Payment Status</th>
                          <th />
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#1</td>
                          <td>Nguyen Cao Danh</td>
                          <td>
                              <button className={styles.progressButton}>Progressing</button>
                          </td>
                          <td>$260</td>
                          <td>28/02/2024</td>
                          <td>29/02/2024</td>
                          <td>
                              <button className={styles.paidButton}>PAID</button>
                          </td>
                          <td>
                              <button className={styles.detailButton}>Detail</button>
                          </td>
                      </tr>
                      {/* Repeat for other orders */}
                  </tbody>
              </table>
          </div>
          {/* Pagination */}
          <div className={styles.pagination}>
              <a className={styles.paginationLink} href="#">1</a>
              <a className={styles.paginationLink} href="#">2</a>
              <a className={styles.paginationLink} href="#">3</a>
              <a className={styles.paginationLink} href="#">4</a>
              <a className={styles.paginationLink} href="#">5</a>
          </div>
      </div>
      <div id="footer-placeholder" />
  </>
);
}

  
export default OrderList ;