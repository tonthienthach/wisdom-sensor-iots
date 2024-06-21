import './Register.css';
import  image from './background.jpg';
function RegisterPage() {
    return (
        <>
                <div>
                    <img
                        className="background"
                        loading="lazy"
                        src= {image}
                        alt="BootstrapBrain Logo"
                    />
                </div>
                <div className="Register">
                    <h className="Register-text">Register</h>
                    <div className="Register-LastName">
                        <input type="text" placeholder="LastName" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-Firstname">
                        <input type="text" placeholder="FirstName" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-Email">
                        <input type="email" placeholder="Email" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-Phone">
                        <input type="text" placeholder="Phone" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-Birth">
                        <input type="datetime" placeholder="Birth" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-sex">
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="radio1"
                                name="optradio"
                                defaultValue="Male"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="radio1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="radio2"
                                name="optradio"
                                defaultValue="Female"
                            />
                            <label className="form-check-label" htmlFor="radio2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="Register-UserName">
                        <input type="text" placeholder="UserName" required="" />
                        <span>*</span>
                    </div>
                    <div className="Register-Password">
                        <input type="password" placeholder="Password" required="" />
                        <span>*</span>
                    </div>
                    <button>Register</button>
                    <div className="Register-login">
                        <h1>Already have an account?</h1>
                        <h2>Login</h2>
                    </div>
                </div>
    
        </>
    )

}
export default RegisterPage;