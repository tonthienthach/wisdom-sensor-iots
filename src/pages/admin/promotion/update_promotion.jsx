import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './update_promotion.module.css'; // Import as a module

const AddPromotion = () => {
  const [formData, setFormData] = useState({
    name: '',
    describe: '',
    code: '',
    startDay: '',
    startMonth: '',
    startYear: '',
    endDay: '',
    endMonth: '',
    endYear: '',
    limit: 'limit',
    amount: 1,
  });

  useEffect(() => {
    const fetchHeaderFooter = async () => {
      const headerResponse = await fetch('../footer_and_header/header_admin.html');
      const headerData = await headerResponse.text();
      document.getElementById('header-placeholder').innerHTML = headerData;

      const footerResponse = await fetch('../../admin/footer.html');
      const footerData = await footerResponse.text();
      document.getElementById('footer-placeholder').innerHTML = footerData;
    };

    fetchHeaderFooter();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/promotions/create', {
        name: formData.name,
        describe: formData.describe,
        code: formData.code,
        start_date: `${formData.startYear}-${formData.startMonth}-${formData.startDay}`,
        end_date: `${formData.endYear}-${formData.endMonth}-${formData.endDay}`,
        limit: formData.limit,
        amount: formData.amount,
      });
      console.log(response.data);
      alert('Promotion created successfully');
    } catch (error) {
      console.error('There was an error creating the promotion!', error);
    }
  };

  return (
    <div>
      <div id="header-placeholder"></div>

      <div className={styles.content}>
        <div className={styles.addPromotion}>
          <h1 className={styles.headerTitle}>UPDATE PROMOTION</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Promotion name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="describe">Describe:</label>
              <input
                type="text"
                id="describe"
                name="describe"
                value={formData.describe}
                onChange={handleChange}
                placeholder="Describe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="code">Code:</label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="24SALE50P"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Start Date:</label>
              <div className={styles.dateGroup}>
                <input
                  type="text"
                  id="startDay"
                  name="startDay"
                  value={formData.startDay}
                  onChange={handleChange}
                  placeholder="Day"
                  required
                />
                <input
                  type="text"
                  id="startMonth"
                  name="startMonth"
                  value={formData.startMonth}
                  onChange={handleChange}
                  placeholder="Month"
                  required
                />
                <input
                  type="text"
                  id="startYear"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleChange}
                  placeholder="Year"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>End Date:</label>
              <div className={styles.dateGroup}>
                <input
                  type="text"
                  id="endDay"
                  name="endDay"
                  value={formData.endDay}
                  onChange={handleChange}
                  placeholder="Day"
                  required
                />
                <input
                  type="text"
                  id="endMonth"
                  name="endMonth"
                  value={formData.endMonth}
                  onChange={handleChange}
                  placeholder="Month"
                  required
                />
                <input
                  type="text"
                  id="endYear"
                  name="endYear"
                  value={formData.endYear}
                  onChange={handleChange}
                  placeholder="Year"
                  required
                />
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.limitGroup}`}>
              <label>Limit:</label>
              <div>
                <input
                  type="radio"
                  id="limit"
                  name="limit"
                  value="limit"
                  checked={formData.limit === 'limit'}
                  onChange={handleChange}
                />
                <label htmlFor="limit">Limit</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no-limit"
                  name="limit"
                  value="no-limit"
                  checked={formData.limit === 'no-limit'}
                  onChange={handleChange}
                />
                <label htmlFor="no-limit">No Limit</label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Number"
                min="1"
                max="100"
                required
              />
            </div>

            <button type="submit" className={styles.button}>SAVE</button>
          </form>
        </div>
      </div>

      <div id="footer-placeholder"></div>
    </div>
  );
};

export default AddPromotion;
