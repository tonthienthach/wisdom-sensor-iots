import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Registerservice.module.css';
import image from '../../../assets/fire-alarm-sensor.png';
import image2 from '../../../assets/MOMO.png';
import image3 from '../../../assets/cash.png';

function RegisterServicePage() {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/user/invoice-service');
    };

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.formContainer}>
                <p><b>Delivery information</b></p>
                <form>
                    <div className={styles.formField}>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className={styles.formField}>
                        <input type="text" placeholder="Fullname" />
                    </div>
                    <div className={styles.formField}>
                        <input type="tel" placeholder="Phone" />
                    </div>
                    <div className={styles.formField}>
                        <input type="text" placeholder="Address" />
                    </div>
                    <div className={styles.formField}>
                        <select>
                            <option value="city">City</option>
                        </select>
                    </div>
                    <div className={styles.formField}>
                        <select>
                            <option value="district">District</option>
                        </select>
                    </div>
                    <div className={styles.formField}>
                        <select>
                            <option value="ward">Ward</option>
                        </select>
                    </div>
                    <div className={styles.formField}>
                        <input type="text" placeholder="Note" />
                    </div>
                    <p><b>Ship</b></p>
                    <div className={styles.formField}>
                        <input
                            style={{ backgroundColor: "aqua" }}
                            type="text"
                            placeholder="Please enter delivery information"
                        />
                    </div>
                    <p><b>Pay</b></p>
                    <div className={styles.formRow}>
                        <div className={`${styles.formField} ${styles.paymentField}`}>
                            <label>
                                <input type="radio" name="payment" value="momo" /> Payment via MOMO QR
                                <div>
                                    <img
                                        className={styles.paymentImage}
                                        loading="lazy"
                                        src={image2}
                                        alt="Momo"
                                    />
                                </div>
                            </label>
                            <label>
                                <input type="radio" name="payment" value="cod" /> Pay on delivery COD
                                <div>
                                    <img
                                        className={styles.paymentImage}
                                        loading="lazy"
                                        src={image3}
                                        alt="Cash"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <br />
                    <div className={styles.orderList}>
                        <div className={styles.orderItem}>
                            <div className={styles.orderHeader}>
                                <span><b>Order (1 product)</b></span>
                            </div>
                            <hr className={styles.customLine} />
                            <div className={styles.orderDetails}>
                                <div>
                                    <img
                                        className={styles.productImage}
                                        loading="lazy"
                                        src={image}
                                        alt="Product"
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <span>Fire alarm sensor package</span>
                                    <br />
                                    <span className={styles.priceDuration}>$250 / 6 months</span>
                                </div>
                            </div>
                            <hr className={styles.customLine} />
                            <div className={styles.formField}>
                                <input type="text" placeholder="Enter discount code" />
                                <button className={styles.applyButton} style={{ backgroundColor: "aqua" }}>
                                    APPLY
                                </button>
                            </div>
                            <hr className={styles.customLine} />
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Provisional</span>
                                <span className={styles.detailValue}>$250</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Discount</span>
                                <span className={styles.detailValue}>$0</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Shipping fee</span>
                            </div>
                            <hr className={styles.customLine} />
                            <div className={styles.detailRow}>
                                <span className={styles.detailLabel}>Total:</span>
                                <span className={styles.detailValue}>$250</span>
                            </div>
                        </div>
                        {/* Repeat order-item for additional orders */}
                    </div>
                    <button
                        type="button"
                        className={styles.buyButton}
                        onClick={handleBuyClick}
                    >
                        BUY
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterServicePage;
