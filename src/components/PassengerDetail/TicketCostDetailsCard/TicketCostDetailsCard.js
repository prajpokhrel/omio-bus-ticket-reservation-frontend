import React, {useEffect} from "react";
import "../PassengerDetail.css";

const TicketCostDetailsCard = ({passengers, selectedSeats, journeyDetails}) => {

    const tripTotal = passengers * journeyDetails.routeFare;
    const reservedSeatPrice = selectedSeats.reduce((previousValue, currentValue) => {
        return parseFloat(currentValue.seatSpecificPrice) + parseFloat(previousValue);
    }, 0);
    const serviceCharge = journeyDetails.serviceTax * passengers;
    const totalAmountToPay = parseFloat(tripTotal) + parseFloat(reservedSeatPrice) + parseFloat(serviceCharge);

    return (
        <div className="row mb-3 ticket-cost-details">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9 m-auto selected-outbound-details">
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="tickets-details">Trip Total - {passengers} passenger(s)</span>
                        <span className="tickets-details">${tripTotal}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="tickets-details">Reserved Seat Charge</span>
                        <span className="tickets-details">
                            ${reservedSeatPrice.toFixed(2)
                                // selectedSeats.reduce((previousValue, currentValue) => {
                                //     return parseInt(currentValue.seatSpecificPrice) + parseInt(previousValue);
                                // }, 0)
                            }
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="tickets-details">Service Charge</span>
                        <span className="tickets-details">${serviceCharge.toFixed(2)}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col outbound-ticket-details">
                        <span className="total-text ticket-details"><b>Total</b> <span className="small-text-ticket">(taxes included)</span></span>
                        <span className="total-price-text">US${totalAmountToPay.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketCostDetailsCard;