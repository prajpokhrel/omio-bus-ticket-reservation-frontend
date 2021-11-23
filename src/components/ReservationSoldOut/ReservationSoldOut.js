import React from "react";
import "./ReservationSoldOut.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import bookingReserved from "../../assets/seat-reservations-soldout.svg";
import "../FormElements/FormElements.css";

const ReservationSoldOut = () => {
    return (
        <>
            <NavbarOne />

            <section className="booking-sold">
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-sm-10 m-auto col-md-8 col-lg-4 sold-out-container">
                            <img className="booking-sold-out-image" src={bookingReserved} alt="booking sold out" /><br/>
                            <h4 className="sold-out-title text-center">These tickets are sold out</h4>
                            <span className="sold-out-description text-center">Unfortunately, it looks like someone swooped in and purchased
                            your tickets. You can find other travel options by clicking the button below.</span><br/>
                            <button className="styled-btn default-btn-full-width">Back to search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ReservationSoldOut;