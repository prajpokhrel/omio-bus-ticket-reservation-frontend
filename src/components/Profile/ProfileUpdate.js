import React from "react";
import "../BookingRetrieve/BookingRetrieve.css";
import retrieveBooking from "../../assets/email-tickets.svg";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";

const ProfileUpdate = () => {
    return (
        <>
            <NavbarOne />
            <section className="retrieve-booking">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="booking-title"><b>Update Profile</b></h1>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 retrieve-container">
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <form className="row g-3">
                                        <div className="col-lg-6">
                                            <label htmlFor="first-name" className="form-label custom-labels">First Name</label>
                                            <input name="firstName" type="text" className="form-control custom-inputs" id="first-name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="last-name" className="form-label custom-labels">Last Name</label>
                                            <input name="lastName" type="text" className="form-control custom-inputs" id="last-name" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label custom-labels">You email address</label>
                                            <input name="email" type="email" className="form-control custom-inputs" id="email" />
                                        </div>
                                        <div className="col-12">
                                            <button className="default-button">Update profile</button>
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

export default ProfileUpdate;