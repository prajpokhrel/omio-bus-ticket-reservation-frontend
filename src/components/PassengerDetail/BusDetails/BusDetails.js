import React from "react";
import "../PassengerDetail.css";

const BusDetails = ({busDetails}) => {

    return (
        <div className="row mb-3 ticket-detail-card">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <span className="selected-out-title"><i className="fas fa-check-circle"></i> BUS DETAILS</span>
                <span className="eternity-detail mt-2"><span className="journey-date-time">Bus Service Name: </span>{busDetails.buses.busServiceName}</span>
                <span className="eternity-detail mb-2"><span className="journey-date-time">Bus Number: </span>{busDetails.buses.busNumber}</span>
            </div>
        </div>
    );
}

export default BusDetails;