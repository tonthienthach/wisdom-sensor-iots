import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import './verifyemail.css';

const VerifyEmail = () => {
  const ChangePassword = () => {
    window.location.href = '../../../admin/changepassword';
};

  return (
    <>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../../../css/admin/header_admin.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />
      <link
        rel="stylesheet"
        href="../../../css/admin/VerifyEmail/verify_email.css"
      />

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
          <button className="btn btn-primary mb-3 buttonverify" id="verifyButton" onClick={ChangePassword}>
            Verify Code
          </button>
          <button className="btn btn-primary mb-3 buttonsendAgain" >
            Send Again
          </button>
        </div>
      </div>
      <div id="footer-placeholder" className="footer" />
    </>
  );
};

export default VerifyEmail;
