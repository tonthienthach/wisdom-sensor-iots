import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './forgotpassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
  const sendemail = () => {
    window.location.href = '../../../admin/verifyadmin';
};
const  logincancel= () => {
  window.location.href = '../../../admin/login';
};
  return (
    <div className="Container">
      <div className="forgotpassword">
        <p className="text-forgotpassword">Forgot password</p>
        <p className="text-forgotpassword1">Select how we can contact you to reset your password</p>
        <div className="forgotpassword-input">
          <div className="icon-forgotpassword">
            <FontAwesomeIcon icon={faSyncAlt} />
            <p className="icon-forgotpassword-text">Forgot password</p>
          </div>
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
            <input className="input-username" 
             type="text"
             placeholder=' UserName <br />
              The code will be sent to your email'
              required />
            
          </div>
        </div>
        <button className="button-send" id="sendButton"  onClick={sendemail}>SEND</button>
        <button className="button-cancel" onClick={logincancel}>CANCEL</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
