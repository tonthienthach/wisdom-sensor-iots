import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
      <div className="container content">
        <div className="inputlogin">
          <div className="textlogin">
            <p>Login</p>
          </div>
          <div>
            <input
              className="loginusername form-control"
              type="text"
              placeholder="UserName"
              required=""
            />
          </div>
          <div>
            <input
              className="loginpassword form-control"
              type="password"
              placeholder="Password"
              required=""
            />
          </div>
          <div className="buttonlogind">
            <button
              className="btn bsb-btn-xl btn-primary"
              id="loginButton"
              type="submit"
            >
              Login
            </button>
          </div>
          <Link className="forgotpassword" id="forgotPasswordLink">
            Forgot password
          </Link>
          <div className="line">
            <p className="long">-----------------</p>
            <p style={{ textAlign: "center" }}>OR</p>
            <p className="long">-----------------</p>
          </div>
          <div className="rowicon">
            <button className="facebook btn btn-light" type="submit">
              <img src="./image/facebok.png" alt="" />
              Facebook
            </button>
            <button className="google btn btn-light" type="submit">
              <img src="./image/google1.png" alt="" />
              Google
            </button>
          </div>
          <div className="Register">
            <span>Do not have an account?</span>{" "}
            <Link className="text-danger" id="registerLink">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage