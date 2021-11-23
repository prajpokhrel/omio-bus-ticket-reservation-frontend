import React from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";

const RegisterContainer = () => {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="first-name" className="form-label custom-labels">First Name</label>
                <input name="firstName" type="text" className="form-control custom-inputs" id="first-name" />
            </div>
            <div className="col-6">
                <label htmlFor="last-name" className="form-label custom-labels">Last Name</label>
                <input name="lastName" type="text" className="form-control custom-inputs" id="last-name" />
            </div>
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
                <button className="default-button default-btn-full-width">Create Account</button>
            </div>
            <div className="col-12 text-center">
                <span className="register-status-text">Already have an account?</span><br/>
                <span className="register-status-action">Sign in</span>
            </div>
            <div className="col-12 text-center">
                <span className="privacy-policy">
                    By creating an account you agree to our <span className="styled-text">Terms of Use </span>
                    and <span className="styled-text">Privacy Policy.</span>
                </span>
            </div>
        </form>
    );
}

export default RegisterContainer;