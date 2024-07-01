import React from "react";
import "./contract_detail.css";
import imgae16 from "../../assets/image 16.png";
import backIcon from "../../assets/Back.png";
import image17 from "../../assets/image 17.png";
function ContractDetail() {

  return (
    <div className="container">
      <div className="header">
        <button id="back-button" className="header-button1">
          <img src={backIcon} alt="Back" />
        </button>
        <button id="print-button" className="header-button">
          <img src={imgae16} alt="Print" />
          PRINT
        </button>
      </div>

      <img src={image17} alt="" className="background" />
      <div className="contract-details">
        <h1 className="header-title">CONTRACT</h1>
        <div className="detail-row">
          <span className="detail-label">ID Contract:</span>
          <span className="detail-value">23567</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Customer:</span>
          <span className="detail-value">Nguyen Cao Danh</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Service package:</span>
          <span className="detail-value">IoT sensor package</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Supplier:</span>
          <span className="detail-value">
            Wisdom Engineering and Business Solutions
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Start date:</span>
          <span className="detail-value">02/03/2024</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">End date:</span>
          <span className="detail-value">02/09/2024</span>
        </div>
        <div className="terms">
          <p>
            Party A (Customer) agrees with the terms given by Party B (Supplier).
          </p>
        </div>
        <div className="parties">
          <div className="party-a">PARTY A</div>
          <div className="party-b">PARTY B</div>
        </div>
      </div>

    </div>



  );
}
export default ContractDetail;