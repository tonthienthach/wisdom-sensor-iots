import './ChangePasswordPage.module.css';
function ChangePasswordPage() {
    return (
        <div className="container">
            <div className="changepassword">
                <div>
                    <p className="changepassword-text">Change your password</p>
                </div>
                <div className="input-group mb-3">
                    <div className="input-icon">
                        <i className="fa fa-lock" />
                    </div>
                    <input
                        className="form-control"
                        id="new-password"
                        type="password"
                        placeholder="New password"
                    />
                    <div className="input-icon-right">
                        <i className="fa fa-eye toggle-password" data-toggle="new-password" />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-icon">
                        <i className="fa fa-lock" />
                    </div>
                    <input
                        className="form-control"
                        id="confirm-password"
                        type="password"
                        placeholder="Re-enter new password"
                    />
                    <div className="input-icon-right">
                        <i
                            className="fa fa-eye toggle-password"
                            data-toggle="confirm-password"
                        />
                    </div>
                </div>
                <button
                    id="confirmPasswordBtn"
                    className="btn btn-primary button-changepassword"
                >
                    Confirm Password
                </button>
            </div>
        </div>
    )
}
export default ChangePasswordPage; 