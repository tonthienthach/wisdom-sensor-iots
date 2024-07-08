import React from 'react';
import styles from './Registerservice.module.css';
import image from './FireAlarm.jpg';
import image2 from './Momo.jpg';
import image3 from './Cash.jpg';

function RegisterServicePage() {
    return (
        <>
            <div className={styles.bodyContainer}>
                <div className={styles.formContainer}>
                    <p><b>Delivery information</b></p>
                    <form>
                        <div className={styles.formField}>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.formField}>
                            <input type="email" placeholder="Fullname" />
                        </div>
                        <div className={styles.formField}>
                            <input type="tel" placeholder="Phone" />
                        </div>
                        <div className={styles.formField}>
                            <input type="tel" placeholder="Address" />
                        </div>
                        <div className={styles.formField}>
                            <select>
                                <option value="staff">City</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <select>
                                <option value="staff">District</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <select>
                                <option value="staff">Ward</option>
                            </select>
                        </div>
                        <div className={styles.formField}>
                            <input type="note" placeholder="Note" />
                        </div>
                        <p><b>Ship</b></p>
                        <div className={styles.formField}>
                            <input
                                style={{ backgroundColor: "aqua" }}
                                type="email"
                                placeholder="Please enter delivery information"
                            />
                        </div>
                        <p><b>Pay</b></p>
                        <div className={styles.formRow}>
                            <div className={`${styles.formField} ${styles.genderField}`}>
                                <label>
                                    <input type="radio" name="gender" defaultValue="male" /> Payment via MOMO QR
                                    <div>
                                        <img
                                            className={styles.momoImage}
                                            loading="lazy"
                                            src={image2}
                                            alt="Momo"
                                        />
                                    </div>
                                </label>
                                <label>
                                    <input type="radio" name="gender" defaultValue="female" /> Pay on delivery COD
                                    <div>
                                        <img
                                            className={styles.cashImage}
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
                                    <input type="tel" placeholder="Enter discount code" />
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
                        <a
                            href="../../user/service/invoiceservice.html"
                            className={styles.addLink}
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
