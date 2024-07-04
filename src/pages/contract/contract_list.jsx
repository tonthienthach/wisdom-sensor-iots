import React from 'react';
import styles from "./contract_list.module.css";
import Rectangle339 from "../../assets/Rectangle 339.png";
import Rectangle343 from "../../assets/Rectangle 343.png";
import Logo from "../../assets/logo.png";

function ContractList() {
    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <h1 className={styles.headerTitle}>CONTRACT LIST</h1>
            </div>
            <div className={styles.headerRow}>
                <button id="filter-button" className={styles.filterIconButton}>
                    <img
                        src={Rectangle339}
                        alt="Filter"
                        className={styles.filterIcon}
                    />
                </button>
                <div className={styles.searchBar}>
                    <button id="search-button" className={styles.searchIconButton}>
                        <img src={Rectangle343} alt="Search" className={styles.searchIcon} />
                    </button>
                    <input
                        type="text"
                        id="search-input"
                        className={styles.searchText}
                        placeholder="ID, Contract Name, ..."
                        onFocus={() => (document.getElementById('search-input').placeholder = '')}
                        onBlur={() => (document.getElementById('search-input').placeholder = 'ID, Customer Name, ...')}
                    />
                </div>
            </div>
            <div className={styles.contractList}>
                <div className={styles.contractRow}>
                    <img
                        src={Logo}
                        alt="Contract"
                        className={styles.contractImage}
                    />
                    <div className={styles.contractDetails}>
                        <div className={styles.contractPackage}>IoT sensor package</div>
                        <div className={styles.contractCustomer}>NGUYEN CAO DANH</div>
                        <div className={styles.contractId}>23567</div>
                    </div>
                </div>
                {/* Add more contract rows as needed */}
            </div>
            <div className={styles.pagination}>
                <a href="#">« Previous</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">Next »</a>
            </div>
        </div>
    );
}

export default ContractList;
