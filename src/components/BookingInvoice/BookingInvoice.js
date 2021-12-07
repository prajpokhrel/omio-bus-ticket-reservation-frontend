import React, {useEffect, useState} from "react";
import "./BookingInvoice.css";
import logoDark from "../../assets/logo-dark.svg";
import {Link, useParams} from "react-router-dom";
import axios from "../../axios-omio-frontend";
import moment from "moment";

const BookingInvoice = () => {
    const [invoiceDetail, setInvoiceDetail] = useState({});
    const [busDetail, setBusDetail] = useState({});
    const params = useParams();
    const {customerId, reservationId} = params;

    useEffect(() => {
        const getInvoiceDetail = async () => {
            try {
                const detailedInvoice = await axios.get(`/reservations/customer/${customerId}/${reservationId}`);
                setInvoiceDetail(detailedInvoice.data.reservation);
                setBusDetail(detailedInvoice.data.assignedBus);
                console.log(detailedInvoice.data.assignedBus);
            } catch (error) {
                console.log(error);
            }
        }
        getInvoiceDetail();
    }, []);

    const formatDate = (date) => {
        return moment(`${date}`, 'YYYY-MM-DD HH:mm:ss').format('dddd, MMMM Do YYYY');
    }


    const formatDateTime = (date, time) => {
        return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format('LLLL');
    }

    return (
        <>
            {
                Object.keys(invoiceDetail).length !== 0 || Object.keys(busDetail).length !== 0
                    ? <>
                        <div className="container pt-5">
                            <div className="content-wrapper">
                                <div className="content-body">
                                    <div className="p-3">
                                        <div className="d-flex justify-content-between flex-md-row flex-column pb-2">
                                            <div>
                                                <div className="d-flex mb-3">
                                                    <Link to="/profile">
                                                        <img src={logoDark} width="200" alt="dark-logo" />
                                                    </Link>
                                                </div>
                                                <p className="mb-0">Office 3028, 450 Bay Street</p>
                                                <p className="mb-0">Toronto, Ontario M5J 2R8 91, Canada</p>
                                                <p className="mb-2">+1 (123) 456 7891, +44 (876) 543 2198</p>
                                            </div>
                                            <div className="mt-md-0 mt-2">
                                                <span className="text-end lead mb-1"><strong>Booking Code:</strong> {invoiceDetail.bookingCode}</span>
                                                <div className="mb-50">
                                                    <span className="invoice-date-title lead"><strong>Booking Date:</strong></span>
                                                    <span className="lead"> {formatDate(invoiceDetail.bookingTime)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="my-2"/>
                                        <div className="row pb-2 pt-2">
                                            <div className="col-12">
                                                <h5>Bus Details:</h5>
                                                <img className="img-fluid" width="100" src={`http://127.0.0.1:5000/busImages/${busDetail.busServiceLogo}`} alt="bus-service-logo"/>
                                                <p className="mb-0 lead"><strong>Bus service name:</strong> {busDetail.busServiceName}</p>
                                                <p className="mb-0 lead"><strong>Bus number:</strong> {busDetail.busNumber}</p>
                                            </div>
                                        </div>
                                        <hr className="my-1"/>
                                        <div className="row pb-2">
                                            <div className="col-sm-6">
                                                <h5 className="mb-1"><strong>Invoice To:</strong></h5>
                                                <p className="mb-0 lead"><strong>Name: </strong>{invoiceDetail.mainUserDetails.firstName}&nbsp;{invoiceDetail.mainUserDetails.lastName}</p>
                                                <p className="mb-0 lead"><strong>E-mail: </strong>{invoiceDetail.mainUserDetails.email}</p>
                                            </div>
                                            <div className="col-sm-6 mt-2">
                                                <h5 className="mb-1"><strong>Journey Details:</strong></h5>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="pe-1 lead"><strong>Departure:</strong></td>
                                                        <td className="lead">{invoiceDetail.destinationDetails.fromSource}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1 lead"><strong>Departure Date & Time:</strong></td>
                                                        <td className="lead">{formatDateTime(invoiceDetail.destinationDetails.departureDate, invoiceDetail.destinationDetails.departureTime)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1 lead"><strong>Arrival:</strong></td>
                                                        <td className="lead">{invoiceDetail.destinationDetails.toDestination}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1 lead"><strong>Arrival Date & Time:</strong></td>
                                                        <td className="lead">{formatDateTime(invoiceDetail.destinationDetails.arrivalDate, invoiceDetail.destinationDetails.estimatedArrivalTime)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1 lead"><strong>Total Route Amount:</strong></td>
                                                        <td className="lead">US$ {invoiceDetail.totalTravelAmount}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="table-responsive mt-2">
                                            <h3>Passenger(s) details</h3>
                                            <table className="table m-0">
                                                <thead>
                                                <tr>
                                                    <th className="py-1">First Name</th>
                                                    <th className="py-1">Last Name</th>
                                                    <th className="py-1">E-mail</th>
                                                    <th className="py-1">Contact number</th>
                                                    <th className="py-1">Identity Type</th>
                                                    <th className="py-1">Identity Number</th>
                                                    <th className="py-1">Country</th>
                                                    <th className="py-1">Is main passenger?</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {invoiceDetail.passengers.map((passenger) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="py-1">{passenger.firstName}</td>
                                                                <td className="py-1">{passenger.lastName}</td>
                                                                <td className="py-1">{passenger.email}</td>
                                                                <td className="py-1">{passenger.phoneNumber}</td>
                                                                <td className="py-1">{passenger.idType}</td>
                                                                <td className="py-1">{passenger.idNumber}</td>
                                                                <td className="py-1">{passenger.country}</td>
                                                                <td className="py-1">{passenger.isMainPassenger ? 'Yes' : 'No'}</td>
                                                            </tr>
                                                        </>
                                                    );
                                                })}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
                                                <p className="card-text mb-0"><span className="fw-bold">Tickets sold by:</span> <span
                                                    className="ms-75">Omio - your travel companion</span></p>
                                            </div>
                                        </div>

                                        <hr className="my-2"/>

                                        <div className="row">
                                            <div className="col-12">
                                                <span className="fw-bold">Note: </span>
                                                <span>
                                                    It was pleasure serving you in your journey. We hope you will keep us in mind for future travel. Thank You!
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </> : <><h1>We are getting your tickets details...</h1></>
            }
        </>
    );
}

export default BookingInvoice;