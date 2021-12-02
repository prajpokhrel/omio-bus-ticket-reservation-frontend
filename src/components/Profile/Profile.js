import React, {useEffect, useState} from "react";
import "./Profile.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import "../FormElements/FormElements.css";
import Accordion from 'react-bootstrap/Accordion'
import axios from "../../axios-omio-frontend";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import {useNavigate} from "react-router-dom";

const Profile = ()  => {

    const [myReservations, setMyReservations] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const getMyReservations = async () => {
            try {
                const reservations = await axios.get(`/reservations/customer/${currentUser.id}`);
                setMyReservations(reservations.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getMyReservations();
    }, [currentUser]);

    const handleDetailedInvoiceBtn = (bookingId) => {
        navigate(`/booking-invoice/${currentUser.id}/${bookingId}`);
    }

    const formatDate = (date) => {
        return moment(`${date}`, 'YYYY-MM-DD HH:mm:ss').format('dddd, MMMM Do YYYY');
    }

    const formatDateTime = (date, time) => {
        return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format('LLLL');
    }

    return (
        <>
            <NavbarOne />
            <section className="user-profile">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="profile-title">
                            My Reservations
                        </h1>
                        <div className="col-12 mt-2 reservations-container">

                            {/*this will be on map*/}
                            <div className="row">
                                <div className="col-12">
                                    <Accordion flush>
                                        {myReservations.map((booking, index) => {
                                            return (
                                                <Accordion.Item eventKey={`${index}`}>
                                                    <Accordion.Header>
                                                        <span className="booking-header-title">
                                                            #myTicket{index+1} - {formatDate(booking.bookingTime)}, {booking.destinationDetails.fromSource} to {booking.destinationDetails.toDestination}
                                                        </span>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-12 col-md-6">
                                                                    <h5 className="mb-0">#booking_id</h5>
                                                                    <span className="lead">{booking.bookingCode}</span>
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <h5 className="mb-0">Booked for?</h5>
                                                                    <span className="lead">{booking.totalPassenger} passenger(s)</span>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <h5 className="mb-0">Departure Date & Time</h5>
                                                                <span className="lead">{formatDateTime(booking.destinationDetails.departureDate, booking.destinationDetails.departureTime)}</span>
                                                            </div><hr/>
                                                            <div className="row">
                                                                <div className="col-12 col-md-6">
                                                                    <h5 className="mb-0">From: Source:</h5>
                                                                    <span className="lead">{booking.destinationDetails.fromSource}</span>
                                                                    <h5 className="mb-0">Booked on:</h5>
                                                                    <span className="lead">{formatDate(booking.bookingTime)}</span>
                                                                </div>
                                                                <div className="col-12 col-md-6">
                                                                    <h5 className="mb-0">To: Destination:</h5>
                                                                    <span className="lead">{booking.destinationDetails.toDestination}</span>
                                                                    <h5 className="mb-0">Total travel amount:</h5>
                                                                    <span className="lead"><b>US$</b> {booking.totalTravelAmount}</span>
                                                                </div>
                                                            </div><hr/>
                                                            <div className="row">
                                                                <div className="col invoice-btn-container">
                                                                    <button onClick={() => handleDetailedInvoiceBtn(booking.id)} className="default-button">Detailed Invoice</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            );
                                        })}
                                        {/*<Accordion.Item eventKey="0">*/}
                                        {/*    <Accordion.Header>*/}
                                        {/*        <span className="booking-header-title">*/}
                                        {/*            #BK123-78569, Toronto to Calgary*/}
                                        {/*        </span>*/}
                                        {/*    </Accordion.Header>*/}
                                        {/*    <Accordion.Body>*/}
                                        {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                                        {/*        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
                                        {/*        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea*/}
                                        {/*        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate*/}
                                        {/*        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                                        {/*        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id*/}
                                        {/*        est laborum.*/}
                                        {/*    </Accordion.Body>*/}
                                        {/*</Accordion.Item>*/}
                                        {/*<Accordion.Item eventKey="1">*/}
                                        {/*    <Accordion.Header>*/}
                                        {/*        <span className="booking-header-title">*/}
                                        {/*            #BK123-78569, Toronto to Calgary*/}
                                        {/*        </span>*/}
                                        {/*    </Accordion.Header>*/}
                                        {/*    <Accordion.Body>*/}
                                        {/*        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
                                        {/*        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
                                        {/*        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea*/}
                                        {/*        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate*/}
                                        {/*        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
                                        {/*        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id*/}
                                        {/*        est laborum.*/}
                                        {/*    </Accordion.Body>*/}
                                        {/*</Accordion.Item>*/}
                                    </Accordion>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;