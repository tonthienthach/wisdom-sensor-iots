import './Servicelist.css';
import image from './Carsensor.jpg';
import image2 from './FireAlarm.jpg';
import DataFetcher from '../../../components/DataFetcher';


function ServiceListPage() {
    return (
        <div className="service-list">
            <div className="service-list__header">
                <h1 className="title" style={{ color: "#66C1DE" }}>
                    SENSOR SERVICE PACK
                </h1>
            </div>
            <div className="service-list__items">
                <div className="service-list__item">
                <div>
                    <img
                        className="service-list__item img"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
                    <div className="service-list__details">
                        <h2 className="service-list__title">Car sensor package</h2>
                        <p className="service-list__description">
                            Automotive sensors are devices used to sense and collect information
                            about the vehicle's surroundings to support autopilot and improve
                            driving safety. <a
                                href="../../../html/service/servicelistdetail/servicedetail.html"
                                className="service-list__more"
                            >
                                View more
                            </a>
                        </p>
                        <p className="service-list__price">
                            $300 / 6 months <a
                                href="#"
                                className="service-list__buy-now"
                                data-service-id="car-sensor"
                            >
                                BUY NOW
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="service-list__items">
                <div className="service-list__item">
                <div>
                    <img
                        className="service-list__item img"
                        loading="lazy"
                        src= {image2}
                        alt="BootstrapBrain Logo"
                    />
                </div>
                    <div className="service-list__details">
                        <h2 className="service-list__title">Fire alarm sensor package</h2>
                        <p className="service-list__description">
                            Fire alarm sensor services are solutions that provide sensor devices
                            and related systems to detect and warn about the presence of fire or
                            smoke hazards in a certain environment. <a
                                href="../../../html/service/servicelistdetail/servicedetail.html"
                                className="service-list__more"
                            >
                                View more
                            </a>
                        </p>
                        <p className="service-list__price">
                            $300 / 6 months <a
                                href="#"
                                className="service-list__buy-now"
                                data-service-id="fire-alarm-sensor"
                            >
                                BUY NOW
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="service-list__pagination">
                <a href="#" className="service-list__page-link">1</a>
                <a href="#" className="service-list__page-link">2</a>
                <a href="#" className="service-list__page-link">3</a>
                <a href="#" className="service-list__page-link">4</a>
                <a href="#" className="service-list__page-link">5</a>
            </div>
            <DataFetcher />
        </div>
    );
}

export default ServiceListPage;
