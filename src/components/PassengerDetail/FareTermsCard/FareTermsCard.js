import React from "react";
import "../PassengerDetail.css";

const FareTermsCard = () => {
    return (
        <div className="row mb-3 ticket-cost-details">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <h5 className="fare-terms-title">Fare terms</h5>
                <ul>
                    <li className="fare-terms-details">Ticket is only valid for the chosen bus.</li>
                    <li className="fare-terms-details">Ticket can be cancelled or changed for free up to 48 hours before departure,
                        for a 20% fee up to 24 hours before departure and for a 30% fee up to 2 hours
                        before departure</li>
                    <li className="fare-terms-details">Ticket can’t be cancelled or changed less than 2 hours before departure.</li>
                </ul>
            </div>
        </div>
    );
}

export default FareTermsCard;