import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './add_promotion.module.css'; // Import as a module

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

  const navigate = useNavigate();

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
      navigate('/list_promotion');
    } catch (error) {
      console.error('There was an error creating the promotion!', error);
    }
  };

  return (
    <div>
      <div id="header-placeholder"></div>

      <div className={styles['content']}>
        <div className={styles['add-promotion']}>
          <h1 className={styles['add-promotion__header-title']}>ADD PROMOTION</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles['add-promotion__form-group']}>
              <label htmlFor="name" className={styles['add-promotion__label']}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Promotion name"
                required
                className={styles['add-promotion__input']}
              />
            </div>

            <div className={styles['add-promotion__form-group']}>
              <label htmlFor="describe" className={styles['add-promotion__label']}>Describe:</label>
              <input
                type="text"
                id="describe"
                name="describe"
                value={formData.describe}
                onChange={handleChange}
                placeholder="Describe"
                required
                className={styles['add-promotion__input']}
              />
            </div>

            <div className={styles['add-promotion__form-group']}>
              <label htmlFor="code" className={styles['add-promotion__label']}>Code:</label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="24SALE50P"
                required
                className={styles['add-promotion__input']}
              />
            </div>

            <div className={styles['add-promotion__form-group']}>
              <label className={styles['add-promotion__label']}>Start Date:</label>
              <div className={styles['add-promotion__date-group']}>
                <input
                  type="text"
                  id="startDay"
                  name="startDay"
                  value={formData.startDay}
                  onChange={handleChange}
                  placeholder="Day"
                  required
                  className={styles['add-promotion__input']}
                />
                <input
                  type="text"
                  id="startMonth"
                  name="startMonth"
                  value={formData.startMonth}
                  onChange={handleChange}
                  placeholder="Month"
                  required
                  className={styles['add-promotion__input']}
                />
                <input
                  type="text"
                  id="startYear"
                  name="startYear"
                  value={formData.startYear}
                  onChange={handleChange}
                  placeholder="Year"
                  required
                  className={styles['add-promotion__input']}
                />
              </div>
            </div>

            <div className={styles['add-promotion__form-group']}>
              <label className={styles['add-promotion__label']}>End Date:</label>
              <div className={styles['add-promotion__date-group']}>
                <input
                  type="text"
                  id="endDay"
                  name="endDay"
                  value={formData.endDay}
                  onChange={handleChange}
                  placeholder="Day"
                  required
                  className={styles['add-promotion__input']}
                />
                <input
                  type="text"
                  id="endMonth"
                  name="endMonth"
                  value={formData.endMonth}
                  onChange={handleChange}
                  placeholder="Month"
                  required
                  className={styles['add-promotion__input']}
                />
                <input
                  type="text"
                  id="endYear"
                  name="endYear"
                  value={formData.endYear}
                  onChange={handleChange}
                  placeholder="Year"
                  required
                  className={styles['add-promotion__input']}
                />
              </div>
            </div>

            <div className={`${styles['add-promotion__form-group']} ${styles['add-promotion__limit-group']}`}>
              <label className={styles['add-promotion__label']}>Limit:</label>
              <div>
                <input
                  type="radio"
                  id="limit"
                  name="limit"
                  value="limit"
                  checked={formData.limit === 'limit'}
                  onChange={handleChange}
                  className={styles['add-promotion__radio']}
                />
                <label htmlFor="limit" className={styles['add-promotion__radio-label']}>Limit</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no-limit"
                  name="limit"
                  value="no-limit"
                  checked={formData.limit === 'no-limit'}
                  onChange={handleChange}
                  className={styles['add-promotion__radio']}
                />
                <label htmlFor="no-limit" className={styles['add-promotion__radio-label']}>No Limit</label>
              </div>
            </div>

            <div className={styles['add-promotion__form-group']}>
              <label htmlFor="amount" className={styles['add-promotion__label']}>Amount:</label>
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
                className={styles['add-promotion__input']}
              />
            </div>

            <button type="submit" className={styles['add-promotion__button']}>ADD</button>
          </form>
        </div>
      </div>

      <div id="footer-placeholder"></div>
    </div>
  );
};

export default AddPromotion;
