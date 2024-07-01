import React, { useEffect } from 'react';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css';
import './verify_email.css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons';
// import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';
// import 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css';
import Footer from '../footer_setting/footer_setting';

const VerifyEmail = () => {
//   useEffect(() => {
//     const verifyButton = document.getElementById('verifyButton');

//     verifyButton.addEventListener('click', () => {
//       window.location.href = '../../../html/employee_setting/change_yourpassword/change_yourpassword.html';
//     });

//     return () => {
//       verifyButton.removeEventListener('click', () => {});
//     };
//   }, []);

  return (
    <div>
      {/* <header className="header">
        <img src="../../../images/logo.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">FORGOT PASSWORD</h1>
      </header> */}

      <div className="background-blue">
        <div className="verify">
          <div>
            <h1>VERIFY EMAIL</h1>
            <h2>We have sent the code to your Email address</h2>
            <h3>danh*****@gmail.com</h3>
          </div>
          <div className="otp-field mb-4">
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
          </div>  
          <button className="btn btn-primary mb-3 buttonverify" id="verifyButton">
            Verify Code
          </button>
          <button className="btn btn-primary mb-3 buttonsendAgain">
            Send Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
