import React from "react";
import "./Seat.css";

const Seat = ({row, col, seatSpecificPrice, blockedSeat, notASeat, bookedSeat, generalSeat, reservedSeat, sociallyDistancedSeat, handleMouseClicked}) => {
    return (
        <div
            id={`bus-seat-${row}-${col}`}
            // can change seat color with here automatically
            onClick={() => handleMouseClicked(row, col)}
            className={`bus-seat seat-gap ${!notASeat && 'not-a-seat'} ${blockedSeat ? 'b-outline' : generalSeat ? 'g-outline' : bookedSeat ? 'b-outline' : reservedSeat ? 'r-outline' : sociallyDistancedSeat ? 'sd-outline' : ''}`}
            // className={`bus-seat ${col === 1 ? 'passage-gap' : 'seat-gap'}`}
        >
            <div className="seat-top">
                {bookedSeat ? 'SOLD' : seatSpecificPrice !== '' ? <span className={`${sociallyDistancedSeat ? 'sd-seat-price' : reservedSeat ? 'r-seat-price' : ''}`}>${seatSpecificPrice}</span> : ''}
            </div>
            <div className={`seat-bottom ${blockedSeat ? 'blocked' : generalSeat ? 'general' : bookedSeat ? 'blocked' : reservedSeat ? 'reserved' : sociallyDistancedSeat ? 'socially-distanced' : ''}`}></div>
            {/*<div className="row inside-seat">*/}
            {/*    <div className="seat-top"><b>SOLD</b></div>*/}
            {/*    <div className="seat-border"></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Seat;