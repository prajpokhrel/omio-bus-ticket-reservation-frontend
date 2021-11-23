import React from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";

const ForgotPasswordContainer = () => {
    return (
        <form className="row g-3">
            <div className="col-12">
                <span className="privacy-policy">
                    We will send you a verification code via email. You can use this to choose a new password.
                </span>
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label custom-labels">You email address</label>
                <input name="email" type="email" className="form-control custom-inputs" id="email" />
            </div>
            <div className="col-12">
                <button className="default-button default-btn-full-width">Send Code</button>
            </div>
            <div className="col-12 text-center">
                {/*<span className="forgot-password-text">Sign in</span>*/}
                <button className="styled-btn default-btn-full-width">Back to login</button>
            </div>
        </form>
    );
}

export default ForgotPasswordContainer;