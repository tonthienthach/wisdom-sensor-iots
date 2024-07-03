import './Servicedetail.css';
import image from './FireAlarm.jpg';
import image2 from './Rating.jpg';



function ServiceDetailPage() {
    return (
        <>
  <div className="product">
    <div className="product__header">
    <div>
                    <img
                        className="product__image"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
      <h1 className="product__title">Fire alarm sensor package</h1>
      <br />
      <button className="price__edit-button">$250/6 months</button>
      <div className="product__rating">5★★★★★</div>
    </div>
    <div className="product__body">
      <p className="product__description">
        Fire alarm sensor services are solutions that provide sensor devices and
        related systems to detect and warn of the occurrence of fire or smoke
        hazards in a given environment. These services have an important role to
        play in protecting people and property from the risk of fire and
        explosion. Here are some common features and applications of fire alarm
        sensor service:
      </p>
      <ul className="product__features">
        <li className="product__feature">
          <b>Smoke Sensor System:</b> Used to detect the presence of smoke in
          the air, alarm and activate the warning system when there are signs of
          fire danger.
        </li>
        <li className="product__feature">
          <b>Temperature Sensor System:</b> Temperature sensors are used to
          detect sudden temperature surges, which could be a sign of combustion
          or fire hazard.
        </li>
        <li className="product__feature">
          <b>CO (Carbon Monoxide) Sensor System:</b> Used to detect the presence
          of harmful CO gas in the air, this is a sign of combustion or fire
          hazard and also a cause of health hazard.
        </li>
        <li className="product__feature">
          <b>Pressure Sensing System:</b> Pressure sensors can be used to detect
          changes in atmospheric pressure, an indication of combustion or smoke
          in enclosed spaces.
        </li>
      </ul>
    </div>
    <p>Quantity</p>
    <input className="quantity" type="text" id="name" name="name"/>
    <button className="buy__edit-button">BUY NOW</button>
    <h2>REVIEWS</h2>
    <h2 className="product__reviews-title">5★(1 Review)</h2>
    <input className="input" type="text" id="name" name="name"/>
    <button className="product__edit-button">SEND</button>
    <div className="product__reviews">
      <div className="review">
        <p className="review__author">Danh</p>
        <div>
                    <img
                        className="review__picture"
                        loading="lazy"
                        src= {image2}
                        alt="BootstrapBrain Logo"
                    />
                </div>
        <p className="review__comment">Excellent sensor!!!</p>
        <div className="review__comment" style={{color: "gold", fontSize: "30px"}}>★★★★★</div>
      </div>
    </div>
  </div>
  <div id="footer-placeholder" />
</>

    );
}

export default ServiceDetailPage;
