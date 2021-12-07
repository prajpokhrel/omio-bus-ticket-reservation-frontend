import React from "react";
import "../PassengerDetail.css";
import "../../FormElements/FormElements.css";

const MainPassengerForm = ({onInputChange}) => {
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
                            <input onChange={onInputChange} name="email0" type="email" className="form-control custom-inputs"
                                   placeholder="We'll send your tickets here" id="email" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label custom-labels">First name</label>
                            <input onChange={onInputChange} name="firstName0" type="text" className="form-control custom-inputs" id="first-name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label custom-labels">Last name</label>
                            <input onChange={onInputChange} name="lastName0" type="text" className="form-control custom-inputs" id="last-name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label custom-labels">Phone number</label>
                            <input onChange={onInputChange} name="phoneNumber0" type="text" className="form-control custom-inputs" id="phone" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-type" className="form-label custom-labels">ID Type</label>
                            <select onChange={onInputChange} id="id-type" name="idType0" className="form-select custom-selects" required>
                                <option>Select your ID Type</option>
                                <option>National ID</option>
                                <option>Passport</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-detail" className="form-label custom-labels">ID Number</label>
                            <input onChange={onInputChange} name="idNumber0" type="text" className="form-control custom-inputs" id="id-detail" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="country" className="form-label custom-labels">Country/Region of residence</label>
                            <select onChange={onInputChange} name="country0" id="country" className="form-select custom-selects" required>
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