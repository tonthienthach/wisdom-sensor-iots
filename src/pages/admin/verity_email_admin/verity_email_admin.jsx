import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import 'boxicons/css/boxicons.min.css';
import './verity_email_admin.css';

const VerifyEmail = () => {



  return (
    <div className="background-wrapper">
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
  );
};

export default VerifyEmail;
