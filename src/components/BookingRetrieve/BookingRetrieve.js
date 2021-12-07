import React, {useState} from "react";
import "./BookingRetrieve.css";
import retrieveBooking from "../../assets/email-tickets.svg";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import axios from "../../axios-omio-frontend";
import {useNavigate} from "react-router-dom";

const BookingRetrieve = () => {

    const [formData, setFormData] = useState({
        email: '',
        bookingCode: ''
    });

    const navigate = useNavigate();

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleRetrieveBookingBtnClicked = (event) => {
        event.preventDefault();
        axios.get(`/reservations/${formData.bookingCode}/${formData.email}`)
            .then((response) => {
                navigate(`/booking-invoice/${response.data.userId}/${response.data.reservationId}`);
            }).catch((error) => {
                alert("Please re-check your booking number and code.")
        });

    }

    return (
        <>
            <NavbarOne />
            <section className="retrieve-booking">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="booking-title"><b>Your bookings</b></h1>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 retrieve-container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="retrieve-title"><b>Retrieve your bookings</b></h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-2 retrieve-content">
                                    Enter your booking number and email address below and we’ll find your ticket for you.
                                    We sent your booking number to you in your confirmation email.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <form className="row g-3" onSubmit={handleRetrieveBookingBtnClicked}>
                                        <div className="col-md-6">
                                            <label htmlFor="booking-number" className="form-label custom-labels">Booking number</label>
                                            <input onChange={inputChangedHandler} name="bookingCode" type="text" className="form-control custom-inputs" id="booking-number" required/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label custom-labels">Email address</label>
                                            <input onChange={inputChangedHandler} name="email" type="email" className="form-control custom-inputs" id="email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="default-button">Retrieve booking</button>
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

export default BookingRetrieve;