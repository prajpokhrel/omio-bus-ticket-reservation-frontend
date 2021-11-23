import React from "react";
import "../PassengerDetail.css";

const TicketCostDetailsCard = () => {
    return (
        <div className="row mb-3 ticket-cost-details">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="tickets-details">Tickets  (1 adult, 2 youths, 1 senior)</span>
                        <span className="tickets-details">US$1,967.79</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="tickets-details">Service Charge</span>
                        <span className="tickets-details">US$4.12</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="total-text ticket-details"><b>Total</b> <span className="small-text-ticket">(taxes included)</span></span>
                        <span className="total-price-text">US$1,967.79</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketCostDetailsCard;