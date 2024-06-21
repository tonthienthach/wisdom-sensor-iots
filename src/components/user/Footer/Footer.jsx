function Footer() {

    <>
        <div className="footer-container">
            <div className="top-container">
                <div className="footer-top">
                    <div>Hỗ Trợ 24/7</div>
                    <div>Thanh toán</div>
                    <div>Giao hàng</div>
                </div>
                <div className="footer-top">
                    <div>Liên hệ chúng tôi 24h</div>
                    <div>Bảo mật thanh toán</div>
                    <div>Giao hàng tận nhà</div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>
                        We are an award-winning multinational company. We believe in quality and
                        standards worldwide.
                    </p>
                    <div className="contact-info">
                        <img src="../../../images/Location.png" alt="Button" />
                        <span>
                            760 Nguyen Duy Trinh Street, Binh Trung Dong Ward, District 2, Ho Chi
                            Minh City.
                        </span>
                    </div>
                    <div className="contact-info">
                        <img src="../../../images/Phone.png" alt="Button" />
                        <span>+84 972-016-212</span>
                    </div>
                    <div className="contact-info">
                        <img src="../../../images/Email.png" alt="Button" />
                        <span>info@wisdomrobotics.org</span>
                    </div>
                    <div className="contact-info">
                        <img src="../../../images/wed.png" alt="Button" />
                        <span>wisdomrobotics.org</span>
                    </div>
                    <div className="social-icons">
                        <img src="../../../images/Facebook.png" alt="Social Icon" />
                        <img src="../../../images/Twitter.png" alt="Social Icon" />
                        <img src="../../../images/Lindekin.png" alt="Social Icon" />
                        <img src="../../../images/Instagram.png" alt="Social Icon" />
                        <img src="../../../images/Reddit.png" alt="Social Icon" />
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Send Us A Message</h3>
                    <form className="contact-form">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="text" placeholder="Name*" required="" />
                            <input type="text" placeholder="Phone*" required="" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input type="email" placeholder="Email*" required="" />
                            <input type="text" placeholder="Subject*" required="" />
                        </div>
                        <textarea placeholder="Message" required="" defaultValue={""} />
                        <button type="submit" className="full-width">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Footer;