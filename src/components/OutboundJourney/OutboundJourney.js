import React from "react";
import "./OutboundJourney.css";
import busImage from "../../assets/blablabus.png";
import "../FormElements/FormElements.css";
import moment from "moment";

const OutboundJourney = ({routeDetails, source, destination, passengers, departureDate}) => {

    // const readableDate = moment(departureDate).format("Do MMM, YYYY");
    const formatDate = (date) => {
        return moment(date).format("Do MMM, YYYY");
    }

    const getDifferenceBetweenDates = (departureDate, departureTime, arrivalDate, arrivalTime) => {
        const departureDateTime = moment(`${departureDate} ${departureTime}`, 'YYYY-MM-DD HH:mm');
        const arrivalDateTime = moment(`${arrivalDate} ${arrivalTime}`, 'YYYY-MM-DD HH:mm');
        return moment.utc(arrivalDateTime.diff(departureDateTime)).format("D[day(s)] HH[h] mm[m]");
    }

    const formatTime = (date, time) => {
        return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format('LT').toLowerCase();
    }

    return (
        <section className="outbound-journey">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 p-2 m-auto">
                        <div className="outbound-header text-center">
                            <h3 className="outbound-title"><b>Select outbound journey</b></h3>
                            <h5 className="outbound-destination">From {source} to {destination} on {formatDate(departureDate)}</h5>
                        </div>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto">
                        <div className="row">
                            <div className="sorted-control p-2 order-2 order-md-1 col-12 col-sm-6 order-sm-2 col-md-4">
                                <span className="sorted-by-title">Sorted By</span>
                                <span className="sorted-with">Departure Time</span>
                            </div>
                            <div className="results-count p-2 order-1 order-md-2 col-12 col-sm-12 order-sm-1 col-md-4">
                                Showing {routeDetails.length} result(s)
                            </div>
                            <div className="filter-control p-2 order-3 order-md-3 col-12 col-sm-6 order-sm-3 col-md-4">
                                <button className="styled-btn">Filter <i className="fas fa-filter"></i></button>
                            </div>
                        </div>
                        <div className="row text-center outbound-info-text p-3">
                            <b>All transactions will incur a 14% booking fee.</b>
                        </div>
                    </div>
                </div>

                <div className="row p-2">
                    {/* Cards will go here */}
                    {/* routeDetails.length === 0 ? no routes : routeDetails.map() -- do later */}
                    {routeDetails.map((routeDetail, index) => {
                        return (
                            <div key={index} className="mb-3 result-card-container col-12 col-sm-12 col-md-12 col-lg-8 m-auto">
                                <div className="row">
                                    <div className="col-12 sorted-title">
                                        CHEAPEST, FASTEST
                                    </div>
                                </div>
                                <div className="row">
                                    {/*<h1>{moment(`${routeDetail.departureDate} ${routeDetail.departureTime}`, 'YYYY-MM-DD HH:mm:ss').format('MMM Do YYYY, h:mm:ss a')}</h1>*/}
                                    {/*<h1>{moment(`${routeDetail.departureDate} ${routeDetail.departureTime}`, 'YYYY-MM-DD HH:mm:ss').format('LT').toLowerCase()}</h1>*/}
                                    <div className="col-12 col-sm-12 order-2 order-sm-2 order-md-1 col-md-8">
                                        <span className="bus-timing-title">
                                            {formatTime(routeDetail.departureDate, routeDetail.departureTime)}
                                            {/*{moment(`${routeDetail.departureDate} ${routeDetail.departureTime}`, 'YYYY-MM-DD HH:mm:ss').format('LT').toLowerCase()}*/}
                                            <i className="fas fa-arrow-right"></i>
                                            {formatTime(routeDetail.arrivalDate, routeDetail.estimatedArrivalTime)}
                                            {/*{moment(`${routeDetail.arrivalDate} ${routeDetail.estimatedArrivalTime}`, 'YYYY-MM-DD HH:mm:ss').format('LT').toLowerCase()}*/}
                                        </span><br/>
                                        <span className="bus-timing-duration">
                                            {formatDate(routeDetail.departureDate)} - {formatDate(routeDetail.arrivalDate)} -&nbsp;
                                        </span>
                                        <span className="bus-timing-duration">{getDifferenceBetweenDates(routeDetail.departureDate, routeDetail.departureTime, routeDetail.arrivalDate, routeDetail.estimatedArrivalTime)}</span>
                                    </div>
                                    <div className="col-12 col-sm-12 order-1 order-sm-1 order-md-2 col-md-4 fare-container">
                                        <span className="fare-amount">US$ {routeDetail.routeFare * passengers}</span>
                                        <span className="traveller-count">For {passengers} traveller(s)</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 p-2">
                                        <img className="img-fluid bus-logo-image" src={busImage} alt="bus logo" />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 p-2 basket-container">
                                        <button className="default-button">Book a seat(s)</button>
                                    </div>
                                </div>
                                <div className="row journey-details">
                                    <span>{routeDetail.fromSource} Bus terminal To {routeDetail.toDestination} Bus terminal</span>
                                </div>
                            </div>
                        );
                    })}
                    {/*<div className="mb-3 result-card-container col-12 col-sm-12 col-md-12 col-lg-8 m-auto">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 sorted-title">*/}
                    {/*            CHEAPEST, FASTEST*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 order-2 order-sm-2 order-md-1 col-md-6">*/}
                    {/*            <span className="bus-timing-title">3:10am <i className="fas fa-arrow-right"></i> 4:15pm</span><br/>*/}
                    {/*            <span className="bus-timing-duration me-2">{moment(departureDate).format("MMMM Do, YYYY")} -</span><span className="bus-timing-duration">7h 20m</span>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 order-1 order-sm-1 order-md-2 col-md-6 fare-container">*/}
                    {/*            <span className="fare-amount">US$109.98</span>*/}
                    {/*            <span className="traveller-count">For 2 traveller(s)</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2">*/}
                    {/*            <img className="img-fluid bus-logo-image" src={busImage} alt="bus logo" />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2 basket-container">*/}
                    {/*            <button className="default-button">Book a seat(s)</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row journey-details">*/}
                    {/*        <span>Toronto, ON Bus terminal To Kingston, ON Bus terminal</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="mb-3 result-card-container col-12 col-sm-12 col-md-12 col-lg-8 m-auto">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 sorted-title">*/}
                    {/*            CHEAPEST, FASTEST*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 order-2 order-sm-2 order-md-1 col-md-6">*/}
                    {/*            <span className="bus-timing-title">3:10am <i className="fas fa-arrow-right"></i> 4:15pm</span><br/>*/}
                    {/*            <span className="bus-timing-duration">7h 20m</span>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 order-1 order-sm-1 order-md-2 col-md-6 fare-container">*/}
                    {/*            <span className="fare-amount">US$109.98</span>*/}
                    {/*            <span className="traveller-count">For 2 traveller(s)</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2">*/}
                    {/*            <img className="img-fluid bus-logo-image" src={busImage} alt="bus logo" />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2 basket-container">*/}
                    {/*            <button className="default-button">Add to basket</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row journey-details">*/}
                    {/*        <span>Toronto, ON Bus terminal To Kingston, ON Bus terminal</span>*/}
                    {/*    </div>*/}

                    {/*</div>*/}


                    {/*<div className="mb-3 result-card-container col-12 col-sm-12 col-md-12 col-lg-8 m-auto">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 sorted-title">*/}
                    {/*            CHEAPEST, FASTEST*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 order-2 order-sm-2 order-md-1 col-md-6">*/}
                    {/*            <span className="bus-timing-title">3:10am <i className="fas fa-arrow-right"></i> 4:15pm </span><br/>*/}
                    {/*            <span className="bus-timing-duration">7h 20m</span>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 order-1 order-sm-1 order-md-2 col-md-6 fare-container">*/}
                    {/*            <span className="fare-amount">US$109.98</span>*/}
                    {/*            <span className="traveller-count">For 2 traveller(s)</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2">*/}
                    {/*            <img className="img-fluid bus-logo-image" src={busImage} alt="bus logo" />*/}
                    {/*        </div>*/}
                    {/*        <div className="col-12 col-sm-12 col-md-6 p-2 basket-container">*/}
                    {/*            <button className="default-button">Add to basket</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row journey-details">*/}
                    {/*        <span>Toronto, ON Bus terminal To Kingston, ON Bus terminal</span>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>

                <div className="row p-2">
                    <div className="container">
                        <div className="mb-5 col-12 col-sm-12 col-md-12 col-lg-8 m-auto additional-text">
                            <b>Please note:</b> Prices include taxes and may change depending on availability.
                            Any additional fees can be reviewed before payment.
                            The total price will be finalized once the purchase is completed.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OutboundJourney;