import React from 'react'
import styles from './Myaccount.module.css'

const MyAccount = () => {
  return (
    <div className={styles.mainContainer}>
        <div id="menu-placeholder" /> {/* Chỗ này sẽ được thay thế bởi menu */}
        <div className={styles.profileContainer}>
            <div className={styles.profileHeading}>
            <div className={styles.profileTitle}>My Profile</div>
            <div className={styles.profileDescription}>Manage and protect your account</div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.profileDetails}>
            <div className={styles.detailRow}>
                <div className={styles.detailLabel}>Name:</div>
                <div className={styles.detailValue}>
                <input type="text" defaultValue="Nguyễn Cao Danh" />
                </div>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailLabel}>Email:</div>
                <div className={styles.detailValue}>danh******@gmail.com</div>
                <button className={styles.editButton}>Change</button>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailLabel}>Phone:</div>
                <div className={styles.detailValue}>********35</div>
                <button className={styles.editButton}>Change</button>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailLabel}>Gender:</div>
                <div className={styles.detailValue}>
                <input type="radio" id="male" name="gender" defaultValue="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" defaultValue="female" />
                <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className={styles.detailRow}>
                <div className={styles.detailLabel}>Birthday:</div>
                <div className={styles.birthdayInputs}>
                <select className={styles.birthdayInput} id="day">
                    <option value="" disabled="" selected="">2</option>
                    {/* Thêm các option từ 1 đến 31 */}
                </select>
                <select className={styles.birthdayInput} id="month">
                    <option value="" disabled="" selected="">12</option>
                    {/* Thêm các option từ 1 đến 12 */}
                </select>
                <select className={styles.birthdayInput} id="year">
                    <option value="" disabled="" selected="">2002</option>
                    {/* Thêm các option từ 1900 đến năm hiện tại */}
                </select>
                </div>
            </div>
            <div className={styles.actionButtons}>
                <div className={styles.buttonContainer}>
                <button className={styles.saveButton}>Save</button>
                </div>
            </div>
            </div>
            <div className={styles.profileImage}>
            <input type="file" id="file-input" className={styles.fileInput}/>
            <label htmlFor="file-input" className={styles.fileInputLabel}>Select Image</label>
            <div className={styles.fileInfo}>
                <p>File size: maximum 1 MB</p>
                <p>File extension: JPEG, PNG</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount
