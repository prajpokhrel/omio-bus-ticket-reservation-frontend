import React from "react";
import "../PassengerDetail.css";
import busLogo from "../../../assets/blablabus.png";

const OutboundDetailsCard = () => {
    return (
        <div className="row mb-3 ticket-detail-card">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <span className="selected-out-title"><i className="fas fa-check-circle"></i> SELECTED OUTBOUND</span>
                <span className="journey-date-time mt-2">Sun, 14 Nov   06:00 – 21:15</span>
                <span className="journey-destination">Toronto, ON <b>to</b> Kingston, ON</span>
                <span className="journey-time">15h 15m</span>
                <div className="row mt-2">
                    <div className="col-12">
                        <img className="img-fluid bus-logo-passenger" src={busLogo} alt="bus-logo-ig" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutboundDetailsCard;