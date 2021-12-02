import React from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import busImage from "../../assets/no-buses-found.svg";
import {Link} from "react-router-dom";

const ResetConfirmation = () => {
    return (
        <>
            <NavbarOne />
            <section className="auth-section">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-md-6 auth-image-container">
                            <img className="img-fluid" src={busImage} alt="bus-image-register" />
                        </div>
                        <div className="col-md-6 auth-form-container">
                            <div className="row p-2">
                                <div className="col-12 check-email-box">
                                    <h3 className="auth-title"><b>Check your email. ✉</b></h3>
                                    <div className="col-12">
                                        <span className="privacy-policy">
                                            We've sent a link to the email address you provided. Please follow the link inside to continue to reset your password.
                                        </span>
                                    </div>
                                    <div className="col-12 mt-2 text-center">
                                        <button className="styled-btn default-btn-full-width">
                                            <Link className="btn-link" to='/login'>Back to login</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResetConfirmation;