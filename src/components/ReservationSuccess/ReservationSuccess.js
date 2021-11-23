import React from "react";
import "../ReservationSoldOut/ReservationSoldOut.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import "../FormElements/FormElements.css";

const ReservationSuccess = () => {
    return (
        <>
            <NavbarOne />

            <section className="booking-success">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-sm-10 m-auto col-md-8 col-lg-4 success-container">
                            <span className="success-booking"><i className="far fa-check-circle"></i></span>
                            <h4 className="sold-out-title text-center">Congratulations! your tickets have been booked.</h4>
                            <span className="sold-out-description text-center">We have sent the ticket details to your email.
                                Thank you for traveling with Omio. Hope to see you soon. Have a wonderful journey.</span><br/>
                            <button className="default-button default-btn-full-width">Back to profile</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReservationSuccess;