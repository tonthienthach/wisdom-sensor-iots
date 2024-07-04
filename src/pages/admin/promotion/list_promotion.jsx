import React from 'react';
import styles from './list_promotion.module.css'; // Import as a module
import Rectangle339 from '../../../assets/Rectangle 339.png'; // Adjust the path if needed
import Rectangle343 from '../../../assets/Rectangle 343.png'; // Adjust the path if needed

const PromotionList = () => {
  const goToAddPage = () => {
    window.location.href = '../../../html/admin/promotion/add_promotion.html'; 
  };

  const goToDetailPage = (promotionId) => {
    window.location.href = `detail_promotion.html?id=${promotionId}`; // Adjust the path as needed
  };

  return (
    <div className={styles.content}>
      <div className={styles.promotionList}>
        <h1 className={styles.headerTitle}>PROMOTION LIST</h1>
      </div>
      <div className={styles.search}>
        <div className={styles.leftSection}>
          <img src={Rectangle339} style={{ width: '70px' }} alt="Promotional graphic" />
        </div>
        <div className={styles.searchBar}>
          <img src={Rectangle343} alt="Search icon" className={styles.searchIcon} />
          <div className={styles.searchText}>ID, Customer name, Products name...</div>
        </div>
        <div className={styles.rightSection}>
          <button onClick={goToAddPage}>+ ADD</button>
        </div>
      </div>
      <div className={styles.card} onClick={() => goToDetailPage('poster1')}>
        <h1>50% SALE OFF FOR PACKAGE</h1>
        <p style={{ color: 'white' }}>24SALE4PACK</p>
      </div>
      <div className={styles.card} onClick={() => goToDetailPage('poster2')}>
        <h1>10% DISCOUNT FOR GOLD CLASS</h1>
        <p style={{ color: 'white' }}>33DIS10GC</p>
      </div>
      <div className={styles.pagination}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>...</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default PromotionList;
