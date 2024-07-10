import React from 'react';
import styles from './Invoiceservice.module.css';
import image from '../../../assets/cash.png';

function InvoiceServicePage() {
    return (
        <div className={styles.container}>
            <div className={styles.contractDetails}>
                <h1 className={styles.headerTitle}>Invoice detail</h1>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Full name:</span>
                    <span className={styles.detailValue}>Nguyễn Cao Danh</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Phone:</span>
                    <span className={styles.detailValue}>0909123456</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email:</span>
                    <span className={styles.detailValue}>danhcao@gmail.com</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Address:</span>
                    <span className={styles.detailValue}>95 TGS Qsa Bình Dương</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}><b>Device info</b></span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Name service package:</span>
                    <span className={styles.detailValue}>Fire alarm sensor package</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Quantity:</span>
                    <span className={styles.detailValue}>1</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Start date:</span>
                    <span className={styles.detailValue}>02/03/2024</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>End date:</span>
                    <span className={styles.detailValue}>02/09/2024</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}><b>Payment details</b></span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Total service package fee:</span>
                    <span className={styles.detailValue}>$250</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Total equipment cost:</span>
                    <span className={styles.detailValue}>$250</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Shipping fee:</span>
                    <span className={styles.detailValue}>$10</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Service discount:</span>
                    <span className={styles.detailValue}>$0</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}><b>Total payment:</b></span>
                    <span className={styles.detailValue}>$260</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}><b>Payment method:</b></span>
                    <span className={styles.detailValue}>
                        <div>
                            <img className={styles.cashImage} loading="lazy" src={image} alt="Cash" />
                        </div>
                    </span>
                </div>
                <div className={styles.header}>
                    <button id="print-button" className={styles.headerButton}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default InvoiceServicePage;
