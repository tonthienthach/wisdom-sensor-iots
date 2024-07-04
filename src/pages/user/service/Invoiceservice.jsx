import './Invoiceservice.css';
import image from './Cash.jpg';

function InvoiceServicePage() {
    return (
  <>
  <div className="container">
  <div className="contract-details">
    <h1 className="header-title">Invoice detail</h1>
    <div className="detail-row">
      <span className="detail-label">Full name:</span>
      <span className="detail-value">Nguyễn Cao Danh</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Phone:</span>
      <span className="detail-value">0909123456</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Email:</span>
      <span className="detail-value">danhcao@gmail.com</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Address:</span>
      <span className="detail-value">95 TGS Qsa Bình Dương</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">
        <b>Device info</b>
      </span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Name service package:</span>
      <span className="detail-value">Fire alarm sensor package</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Quantity:</span>
      <span className="detail-value">1</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Start date:</span>
      <span className="detail-value">02/03/2024</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">End date:</span>
      <span className="detail-value">02/09/2024</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">
        <b>Payment details</b>
      </span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Total service package fee:</span>
      <span className="detail-value">$250</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Total equipment cost:</span>
      <span className="detail-value">$250</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Shipping fee:</span>
      <span className="detail-value">$10</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">Service discound:</span>
      <span className="detail-value">$0</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">
        <b>Total payment:</b>
      </span>
      <span className="detail-value">$260</span>
    </div>
    <div className="detail-row">
      <span className="detail-label">
        <b>Payment method:</b>
      </span>
      <span className="detail-value">
      <div>
                    <img
                        className="cash__image"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
      </span>
    </div>
    <div className="header">
      <button id="print-button" className="header-button">
        Download
      </button>
    </div>
  </div>
</div>
  </>

    );
}

export default InvoiceServicePage;
