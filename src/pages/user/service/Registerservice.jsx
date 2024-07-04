import './Registerservice.css';
import image from './FireAlarm.jpg';
import image2 from './Momo.jpg';
import image3 from './Cash.jpg';

function RegisterServicePage() {
    return (
        <>
  <div className="body-container">
  <div className="form-container">
    <p>
      <b>Delivery information</b>
    </p>
    <form>
      <div className="form-field">
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-field">
        <input type="email" placeholder="Fullname" />
      </div>
      <div className="form-field">
        <input type="tel" placeholder="Phone" />
      </div>
      <div className="form-field">
        <input type="tel" placeholder="Address" />
      </div>
      <div className="form-field">
        <select>
          <option value="staff">City</option>
        </select>
      </div>
      <div className="form-field">
        <select>
          <option value="staff">District</option>
        </select>
      </div>
      <div className="form-field">
        <select>
          <option value="staff">Ward</option>
        </select>
      </div>
      <div className="form-field">
        <input type="note" placeholder="Note" />
      </div>
      <p>
        <b>Ship</b>
      </p>
      <div className="form-field">
        <input
          style={{ backgroundColor: "aqua" }}
          type="email"
          placeholder="Please enter delivery information"
        />
      </div>
      <p>
        <b>Pay</b>
      </p>
      <div className="form-row">
        <div className="form-field gender-field">
          <label>
            <input type="radio" name="gender" defaultValue="male" /> Payment via
            MOMO QR
            <div>
                    <img
                        className="momo__image"
                        loading="lazy"
                        src= {image2}
                        alt="BootstrapBrain Logo"
                    />
                </div>
          </label>
          <label>
            <input type="radio" name="gender" defaultValue="female" /> Pay on
            delivery COD
            <div>
                    <img
                        className="cash__image"
                        loading="lazy"
                        src= {image3}
                        alt="BootstrapBrain Logo"
                    />
                </div>
          </label>
        </div>
      </div>
      <br />
      <div className="order-list">
        <div className="order-item">
          <div className="order-header">
            <span>
              <b>Order (1 product)</b>
            </span>
          </div>
          <hr className="custom-line" />
          <div className="order-details">
          <div>
                    <img
                        className="product__image"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
            <div className="product-info">
              <span>Fire alarm sensor package</span>
              <br />
              <span className="price-duration">$250 / 6 months</span>
            </div>
          </div>
          <hr className="custom-line" />
          <div className="form-field">
            <input type="tel" placeholder="Enter discound code" />
            <button className="Apply" style={{ backgroundColor: "aqua" }}>
              APPLY
            </button>
          </div>
          <hr className="custom-line" />
          <div className="detail-row">
            <span className="detail-label">Provisional</span>
            <span className="detail-value">$250</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Discount</span>
            <span className="detail-value">$0</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Shipping fee</span>
          </div>
          <hr className="custom-line" />
          <div className="detail-row">
            <span className="detail-label">Total:</span>
            <span className="detail-value">$250</span>
          </div>
        </div>
        {/* Repeat order-item for additional orders */}
      </div>
      <a
        href="../../user/service/invoiceservice.html"
        style={{ backgroundColor: "aqua" }}
        className="add-link"
      >
        BUY
      </a>
    </form>
  </div>
</div>

</>

    );
}

export default RegisterServicePage;
