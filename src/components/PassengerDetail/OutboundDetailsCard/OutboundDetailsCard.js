import React from "react";
import "../PassengerDetail.css";
import busLogo from "../../../assets/blablabus.png";

const OutboundDetailsCard = ({formatDate, busImage ,fromSource, toDestination, departureDate, departureTime, arrivalDate, estimatedArrivalTime}) => {

    return (
        <div className="row mb-3 ticket-detail-card">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <span className="selected-out-title"><i className="fas fa-check-circle"></i> SELECTED OUTBOUND</span>
                <span className="eternity-detail mt-2"><span className="journey-date-time">Departure: </span>{formatDate(departureDate, departureTime)}</span>
                <span className="eternity-detail mb-2"><span className="journey-date-time">Arrival: </span>{formatDate(arrivalDate, estimatedArrivalTime)}</span>
                <span className="journey-destination">{fromSource} <b>to</b> {toDestination}</span>
                {/*<span className="journey-time">15h 15m</span>*/}
                <div className="row mt-2">
                    <div className="col-12">
                        <img className="img-fluid bus-logo-passenger" src={`http://127.0.0.1:5000/busImages/${busImage.buses.busServiceLogo}`} alt="bus-logo-ig" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutboundDetailsCard;