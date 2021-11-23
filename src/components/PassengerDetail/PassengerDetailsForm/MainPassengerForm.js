import React from "react";
import "../PassengerDetail.css";
import "../../FormElements/FormElements.css";

const MainPassengerForm = () => {
    return (
        <div className="row mb-3 register-alert-shadow">
            <div className="row">
                <div className="col-12 passenger-form-header">
                    <span className="passenger-form-title">
                        Main Passenger
                    </span>
                    <span className="passenger-age-text">
                        ADULT (AGE: 68)
                    </span>
                </div>
            </div><hr/>
            <div className="row m-0 mb-3">
                <div className="col-12 main-passenger-container">
                    <form className="row g-3">
                        <div className="col-12">
                            <label htmlFor="email" className="form-label custom-labels">E-mail</label>
                            <input name="email" type="email" className="form-control custom-inputs"
                                   placeholder="We'll send your tickets here" id="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label custom-labels">First name</label>
                            <input name="firstName" type="text" className="form-control custom-inputs" id="first-name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label custom-labels">Last name</label>
                            <input name="lastName" type="text" className="form-control custom-inputs" id="last-name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label custom-labels">Phone number</label>
                            <input name="phoneNumber" type="text" className="form-control custom-inputs" id="phone" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-type" className="form-label custom-labels">ID Type</label>
                            <select id="id-type" className="form-select custom-selects">
                                <option>Select your ID Type</option>
                                <option>National ID</option>
                                <option>Passport</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-detail" className="form-label custom-labels">ID Number</label>
                            <input type="text" className="form-control custom-inputs" id="id-detail" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="country" className="form-label custom-labels">Country/Region of residence</label>
                            <select id="country" className="form-select custom-selects">
                                <option>Select your nationality</option>
                                <option>Nepal</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainPassengerForm;