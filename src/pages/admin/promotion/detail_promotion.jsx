import React, { useEffect } from 'react';
import styles from './detail_promotion.module.css'; // Import as a module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PromotionDetail = () => {
  useEffect(() => {
    fetch('../footer_and_header/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });

    fetch('../../admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }, []);

  const goToAddPage = () => {
    window.location.href = '../../../html/admin/promotion/add_promotion.html';
  };

  const editPromotion = () => {
    window.location.href = '../../../html/admin/promotion/update_promotion.html';
  };

  const deletePromotion = () => {
    // Add your delete logic here
    alert('Promotion deleted successfully!');
  };

  return (
    <div>
      <div id="header-placeholder"></div>
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={goToAddPage}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <div className={styles.promotionDetails}>
          <h1>PROMOTION DETAIL</h1>
          <form className={styles.detailsForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value="SALE OFF 50% FOR PACKAGE" readOnly />

            <label htmlFor="describe">Describe</label>
            <input type="text" id="describe" value="Giảm giá 50% cho tất cả các gói dịch vụ..." readOnly />

            <label htmlFor="code">Code</label>
            <input type="text" id="code" value="24SALE50P" readOnly className={styles.highlight} />

            <label htmlFor="start-date">Start Date</label>
            <input type="text" id="start-date" value="02/03/2024" readOnly />

            <label htmlFor="end-date">End Date</label>
            <input type="text" id="end-date" value="02/05/2024" readOnly />

            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" value="50" readOnly />

            <label htmlFor="remaining">Remaining</label>
            <input type="text" id="remaining" value="40" readOnly />

            <div className={styles.buttonGroup}>
              <button type="button" className={styles.editBtn} onClick={editPromotion}>Edit</button>
              <button type="button" className={styles.deleteBtn} onClick={deletePromotion}>Delete</button>
            </div>
          </form>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default PromotionDetail;
