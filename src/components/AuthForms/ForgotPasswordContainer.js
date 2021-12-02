import React, {useState} from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import busImage from "../../assets/no-buses-found.svg";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../axios-omio-frontend";

const ForgotPasswordContainer = () => {

    const [forgotEmail, setForgotEmail] = useState({
        forgotEmail: ''
    });

    const navigate = useNavigate();

    const inputChangedHandler = (event) => {
        setForgotEmail({...forgotEmail, [event.target.name]: event.target.value});
    }

    const handleResetSubmitBtn = (event) => {
        event.preventDefault();
        axios.post('/users/requestResetPassword', forgotEmail,
            {withCredentials: true, credentials: 'include'})
            .then((response) => {
                alert(response.data);
                navigate('/users/reset-confirmation');
            }).catch((error) => {
                console.log(error.response.data);
        });
    }

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
                                <div className="col-12">
                                    <h3 className="auth-title"><b>Forgot your password?</b></h3>
                                    <form className="row g-3">
                                        <div className="col-12">
                                        <span className="privacy-policy">
                                            We will send you a verification code via email. You can use this to choose a new password.
                                        </span>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label custom-labels">You email address</label>
                                            <input onChange={inputChangedHandler} name="forgotEmail" type="email" className="form-control custom-inputs" id="email" />
                                        </div>
                                        <div className="col-12">
                                            <button onClick={handleResetSubmitBtn} className="default-button default-btn-full-width">Send Code</button>
                                        </div>
                                    </form>
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

export default ForgotPasswordContainer;