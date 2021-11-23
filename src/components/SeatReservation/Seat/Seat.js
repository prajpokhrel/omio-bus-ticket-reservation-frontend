import React from "react";
import "./Seat.css";

const Seat = ({row, col, handleMouseClicked}) => {
    return (
        <div
            id={`bus-seat-${row}-${col}`}
            // can change seat color with here automatically
            onClick={() => handleMouseClicked(row, col)}
            className={`bus-seat ${col === 1 ? 'passage-gap' : 'seat-gap'}`}
        >
            <div className="seat-top">SOLD</div>
            <div className="seat-bottom"></div>
            {/*<div className="row inside-seat">*/}
            {/*    <div className="seat-top"><b>SOLD</b></div>*/}
            {/*    <div className="seat-border"></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Seat;