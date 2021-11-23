import React from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";

const LoginContainer = () => {
    return (
        <form className="row g-3">
            <div className="col-12">
                <label htmlFor="email" className="form-label custom-labels">You email address</label>
                <input name="email" type="email" className="form-control custom-inputs" id="email" />
            </div>
            <div className="col-12">
                <label htmlFor="password" className="form-label custom-labels">Your password</label>
                <input name="password" type="password" className="form-control custom-inputs" id="password" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input custom-inputs-check" type="checkbox" value="" id="show-hide" />
                    <label className="form-check-label custom-labels" htmlFor="show-hide">
                        Show password
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button className="default-button default-btn-full-width">Sign in</button>
            </div>
            <div className="col-12 text-center">
                <span className="forgot-password-text">I forgot my password</span>
            </div>
            <div className="col-12 text-center">
                <span className="register-status-text">Don't have an account?</span><br/>
                <span className="register-status-action">Create Account</span>
            </div>
        </form>
    );
}

export default LoginContainer;