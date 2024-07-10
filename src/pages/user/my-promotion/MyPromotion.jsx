import React from 'react';
import styles from './mypromotion.module.css';
import UserMenu from '../menu/UserMenu';

// Import images
import discountImage from '../../../assets/Discount.png';

const MyPromotion = () => {
  return (
    <div className={styles.mainContainer}>
        <UserMenu /> 
      <div id={styles.menuContainer} />
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="You can search by promotion name" />
        </div>
        <div className={styles.promotionCard}>
          <div className={styles.cardHeader}>
            <span>Deep discounts for new members</span>
            <img src={discountImage} alt="Discount" />
          </div>
          <div className={styles.cardBody}>
            <p>
              15% discount on the first order of new customers. Applies to all
              service packages. Apply through all form of payment.
            </p>
            <button className={styles.useBtn}>Use</button>
          </div>
        </div>
        <div className={styles.promotionCard}>
          <div className={styles.cardHeader}>
            <span>$10 discount for orders over $300</span>
            <img src={discountImage} alt="Discount" />
          </div>
          <div className={styles.cardBody}>
            <p>
              $10 discount for orders over $300. Applies to all service packages.
              Apply through all form of payment.
            </p>
            <button className={styles.useBtn}>Use</button>
          </div>
        </div>
        <div className={styles.promotionCard}>
          <div className={styles.cardHeader}>
            <span>10% discount for orders over $500</span>
            <img src={discountImage} alt="Discount" />
          </div>
          <div className={styles.cardBody}>
            <p>
              10% discount for orders over $500. Applies to all service packages.
              Apply through all form of payment.
            </p>
            <button className={styles.useBtn}>Use</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPromotion;
