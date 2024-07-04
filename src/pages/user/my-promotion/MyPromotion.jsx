import React from 'react'
import './mypromotion.css'

const MyPromotion = () => {
  return (
    <div><div className="main-container">
    <div id="menuContainer" />
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="You can search by promotion name" />
      </div>
      <div className="promotion-card">
        <div className="card-header">
          <span>Deep discounts for new members</span>
          <img src="../../../images/Discount.png" alt="Settings" />
        </div>
        <div className="card-body">
          <p>
            15% discount on the first order of new customers. Applies to all
            service packages. Apply through all form of payment.
          </p>
          <button className="use-btn">Use</button>
        </div>
      </div>
      <div className="promotion-card">
        <div className="card-header">
          <span>$10 discount for orders over $300</span>
          <img src="../../../images/Discount.png" alt="Settings" />
        </div>
        <div className="card-body">
          <p>
            $10 discount for orders over $300. Applies to all service packages.
            Apply through all form of payment.
          </p>
          <button className="use-btn">Use</button>
        </div>
      </div>
      <div className="promotion-card">
        <div className="card-header">
          <span>10% discount for orders over $500</span>
          <img src="../../../images/Discount.png" alt="Settings" />
        </div>
        <div className="card-body">
          <p>
            10% discount for orders over $500. Applies to all service packages.
            Apply through all form of payment.
          </p>
          <button className="use-btn">Use</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default MyPromotion