import React, { useEffect } from 'react';
import './detail_service.module.css'; // Import regular CSS

// Import images
import fireAlarmSensorImage from '../../../assets/Fire Alarm.png';
import ratingPicture from '../../../assets/Fire Alarm.png';

const FireAlarmSensorPackage = () => {
  useEffect(() => {
    fetch('../../../../footer_and_header/header_admin.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));

    fetch('../../../../admin/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }, []);

  const goToUpdateServicePage = () => {
    window.location.href = '../../admin/service-list/update-service.html'; // Adjust the path as needed
  };

  return (
    <div className="container">
      <div id="header-placeholder"></div>
      <div className="product">
        <div className="product__header">
          <img
            className="product__image"
            src={fireAlarmSensorImage}
            alt="Fire alarm sensor image"
          />
          <h1 className="product__title">Fire alarm sensor package</h1>
          <span className="product__price">$250/6 months</span>
          <div className="product__rating">★★★★★</div>
        </div>
        <div className="product__body">
          <p className="product__description">
            Fire alarm sensor services are solutions that provide sensor devices and related systems to detect and warn of the occurrence of fire or smoke hazards in a given environment. These services have an important role to play in protecting people and property from the risk of fire and explosion. Here are some common features and applications of fire alarm sensor service:
          </p>
          <ul className="product__features">
            <li className="product__feature">
              Smoke Sensor System: Used to detect the presence of smoke in the air, alarm and activate the warning system when there are signs of fire danger.
            </li>
            <li className="product__feature">
              Temperature Sensor System: Temperature sensors are used to detect sudden temperature surges, which could be a sign of combustion or fire hazard.
            </li>
            <li className="product__feature">
              CO (Carbon Monoxide) Sensor System: Used to detect the presence of harmful CO gas in the air, this is a sign of combustion or fire hazard and also a cause of health hazard.
            </li>
            <li className="product__feature">
              Pressure Sensing System: Pressure sensors can be used to detect changes in atmospheric pressure, an indication of combustion or smoke in enclosed spaces.
            </li>
          </ul>
        </div>
        <button className="product__edit-button" onClick={goToUpdateServicePage}>EDIT</button>
        <div className="product__reviews">
          <h2 className="product__reviews-title">Reviews (1 Review)</h2>
          <div className="review">
            <p className="review__author">Danh</p>
            <img
              className="review__picture"
              src={ratingPicture}
              alt="Rating picture"
            />
            <p className="review__comment">Excellent sensor!!!</p>
            <div className="review__rating">★★★★★</div>
          </div>
        </div>
      </div>
      <div id="footer-placeholder"></div>
    </div>
  );
};

export default FireAlarmSensorPackage;
