import React from "react";
import "../PassengerDetail.css";
import "../../FormElements/FormElements.css";

const ExtraPassengerForm = ({index, onInputChange}) => {
    return (
        <div className="row mb-3 register-alert-shadow">
            <div className="row">
                <div className="col-12 passenger-form-header">
                    <span className="passenger-form-title">
                        Passenger {index + 1}
                    </span>
                    <span className="passenger-age-text">
                        ADULT (AGE: 68)
                    </span>
                </div>
            </div><hr/>
            <div className="row m-0 mb-3">
                <div className="col-12 main-passenger-container">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label custom-labels">First name</label>
                            <input onChange={onInputChange} name={`firstName${index+1}`} type="text" className="form-control custom-inputs" id="first-name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label custom-labels">Last name</label>
                            <input onChange={onInputChange} name={`lastName${index+1}`} type="text" className="form-control custom-inputs" id="last-name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label custom-labels">Phone number</label>
                            <input onChange={onInputChange} name={`phoneNumber${index+1}`} type="text" className="form-control custom-inputs" id="phone" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-type" className="form-label custom-labels">ID Type</label>
                            <select onChange={onInputChange} id="id-type" name={`idType${index+1}`} className="form-select custom-selects" required>
                                <option value="">Select your ID Type</option>
                                <option value="National ID">National ID</option>
                                <option value="Passport">Passport</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id-detail" className="form-label custom-labels">ID Number</label>
                            <input onChange={onInputChange} type="text" name={`idNumber${index+1}`} className="form-control custom-inputs" id="id-detail" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExtraPassengerForm;