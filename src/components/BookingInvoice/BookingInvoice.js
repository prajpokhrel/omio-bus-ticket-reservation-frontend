import React, {useEffect, useState} from "react";
import "./BookingInvoice.css";
import logoDark from "../../assets/logo-dark.svg";
import {useParams} from "react-router-dom";
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
                                                <div className="d-flex mb-1">
                                                    <img src={logoDark} width="100" alt="dark-logo" />
                                                </div>
                                                <p className="mb-2">Office 3028, 450 Bay Street</p>
                                                <p className="mb-2">Toronto, Ontario M5J 2R8 91, Canada</p>
                                                <p className="mb-0">+1 (123) 456 7891, +44 (876) 543 2198</p>
                                            </div>
                                            <div className="mt-md-0 mt-2">
                                                <span className="text-end lead mb-1">Booking Code: {invoiceDetail.bookingCode}</span>
                                                <div className="mb-50">
                                                    <span className="invoice-date-title">Booking Date:</span>
                                                    <span className="lead"> {formatDate(invoiceDetail.bookingTime)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="my-2"/>
                                        <div className="row pb-2 pt-2">
                                            <div className="col-12">
                                                <h6>Bus Details:</h6>
                                                <img className="img-fluid" width="100" src={`http://127.0.0.1:5000/busImages/${busDetail.busServiceLogo}`} alt="bus-service-logo"/>
                                                <p>Bus service name: {busDetail.busServiceName}</p>
                                                <p>Bus number: {busDetail.busNumber}</p>
                                            </div>
                                        </div>
                                        <hr className="my-1"/>
                                        <div className="row pb-2">
                                            <div className="col-sm-6">
                                                <h6 className="mb-1">Invoice To:</h6>
                                                <p className="mb-25">{invoiceDetail.mainUserDetails.firstName}&nbsp;{invoiceDetail.mainUserDetails.lastName}</p>
                                                <p className="mb-0">{invoiceDetail.mainUserDetails.email}</p>
                                            </div>
                                            <div className="col-sm-6 mt-2">
                                                <h6 className="mb-1">Journey Details:</h6>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="pe-1">Departure:</td>
                                                        <td>{invoiceDetail.destinationDetails.fromSource}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1">Departure Date & Time:</td>
                                                        <td>{formatDateTime(invoiceDetail.destinationDetails.departureDate, invoiceDetail.destinationDetails.departureTime)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1">Arrival:</td>
                                                        <td>{invoiceDetail.destinationDetails.toDestination}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1">Arrival Date & Time:</td>
                                                        <td>{formatDateTime(invoiceDetail.destinationDetails.arrivalDate, invoiceDetail.destinationDetails.estimatedArrivalTime)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-1">Total Route Amount</td>
                                                        <td>US$ {invoiceDetail.totalTravelAmount}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="table-responsive mt-2">
                                            {/*<h3>Passenger(s) details</h3>*/}
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
                                                    It was pleasure serving you, in your journey. We hope you will keep us in mind for future travel. Thank You!
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </> : 'Loading....'
            }
        </>
    );
}

export default BookingInvoice;