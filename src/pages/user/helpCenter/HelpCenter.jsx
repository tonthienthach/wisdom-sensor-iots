import React from 'react'
import './helpcenter.css'

const HelpCenter = () => {
  return (
    <div><div className="flex-container">
    <div id="menuContainer" />
    <div className="content">
      <div className="help-center">
        <h1>HELP CENTER</h1>
        <div className="help-options">
          <div className="option">
            <img
              src="../../../images/Facebook_Logo_(2019) 3.png"
              alt="Facebook"
            />
            <p>Facebook</p>
          </div>
          <div className="line" />
          <div className="option">
            <img src="../../../images/7044033_zalo_icon 1.png" alt="Zalo" />
            <p>Zalo</p>
          </div>
          <div className="line" />
          <div className="option">
            <img src="../../../images/Online Support.png" alt="Phone" />
            <p>03213312312</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default HelpCenter