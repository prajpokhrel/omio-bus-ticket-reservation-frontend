import React, {useEffect, useState} from "react";
import "../BookingRetrieve/BookingRetrieve.css";
import retrieveBooking from "../../assets/email-tickets.svg";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import axios from "../../axios-omio-frontend";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ChangePassword = () => {

    const [formData, setFormData] = useState({
        password: '',
        newPassword: ''
    });
    const [error, setError] = useState("");
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    const inputChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleChangePasswordBtn = (event) => {
        event.preventDefault();
        axios.patch('/users/change-password', {formData, currentUser}, {
            withCredentials: true, credentials: 'include'
        }).then((response) => {
            console.log(response.data);
            alert("Password changed successfully, redirecting to profile.");
            navigate('/profile');
        }).catch((error) => {
            setError(error.response.data);
            console.log(error.response);
        });
    }

    return (
        <>
            <NavbarOne />
            <section className="retrieve-booking">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="booking-title"><b>Change Password</b></h1>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 retrieve-container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="retrieve-title"><b>Change your current password</b></h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-2 retrieve-content">
                                    Enter your current password, and select new password for your account.
                                </div>
                            </div>
                            <div className="row">
                                {error.length !== 0 && <span className="text-danger small">{error}</span>}
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <form className="row g-3" onSubmit={handleChangePasswordBtn}>
                                        <div className="col-12">
                                            <label htmlFor="current-pwd" className="form-label custom-labels">Current password</label>
                                            <input onChange={inputChangeHandler} name="password" type="password" className="form-control custom-inputs" id="current-pwd" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="new-pwd" className="form-label custom-labels">New password</label>
                                            <input onChange={inputChangeHandler} name="newPassword" type="password" className="form-control custom-inputs" id="new-pwd" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="confirm-pwd" className="form-label custom-labels">Confirm password</label>
                                            <input onChange={inputChangeHandler} name="confirmPassword" type="password" className="form-control custom-inputs" id="confirm-pwd" required />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="default-button">Change password</button>
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

export default ChangePassword;