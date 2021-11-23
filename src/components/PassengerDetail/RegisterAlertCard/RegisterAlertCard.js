import React from "react";
import "../PassengerDetail.css";

const RegisterAlertCard = () => {
    return (
        <div className="row mb-3 register-alert-shadow">
            <div className="col-12 col-sm-8 register-alert-container">
                <span><b>Don't have an account?</b></span>
                <span>Create an account to reserve your tickets.</span>
            </div>
            <div className="col-12 col-sm-4 register-alert-btn-container">
                <button className="register-alert-btn">Sign up</button>
            </div>
        </div>
    );
}

export default RegisterAlertCard;