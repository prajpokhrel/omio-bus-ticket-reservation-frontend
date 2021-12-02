import React, {useState} from "react";
import "../BookingRetrieve/BookingRetrieve.css";
import retrieveBooking from "../../assets/email-tickets.svg";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import {useParams, useNavigate} from "react-router-dom";
import axios from "../../axios-omio-frontend";

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState({
        newPassword: ''
    });

    const params = useParams();
    const navigate = useNavigate();

    const {token, userId} = params;

    const inputChangeHandler = (event) => {
        setNewPassword({...newPassword, [event.target.name]: event.target.value});
    }

    const handlePasswordResetSubmit = (event) => {
        event.preventDefault();
        axios.post('/users/resetPassword', {newPassword, token, userId})
            .then((response) => {
                console.log(response.data);
                navigate('/login');
            }).catch((error) => {
                console.log(error.response);
        });
    }

    return (
        <>
            <NavbarOne />
            <section className="retrieve-booking">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="booking-title"><b>Reset Password</b></h1>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 retrieve-container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="retrieve-title"><b>Reset your current password</b></h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-2 retrieve-content">
                                    Enter new password for your account.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <form className="row g-3">
                                        <div className="col-md-12">
                                            <label htmlFor="new-pwd" className="form-label custom-labels">New password</label>
                                            <input onChange={inputChangeHandler} name="newPassword" type="password" className="form-control custom-inputs" id="new-pwd" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="confirm-pwd" className="form-label custom-labels">Confirm password</label>
                                            <input name="confirmPassword" type="password" className="form-control custom-inputs" id="confirm-pwd" />
                                        </div>
                                        <div className="col-md-12">
                                            <button onClick={handlePasswordResetSubmit} className="default-button">Reset password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-6 ticket-image-container">
                            <div className="ticket-image-div">
                                <img className="img-fluid" src={retrieveBooking} alt="email tickets" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ResetPassword;