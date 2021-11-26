import React, {useState, useEffect} from "react";
import "./SeatReservation.css";
import steeringWheel from "../../assets/steering-wheel.svg";
import Seat from "./Seat/Seat";
import NavbarOne from "../NavbarOne/NavbarOne";
import "../FormElements/FormElements.css";
import axios from "../../axios-omio-frontend";
import "./Seat/Seat.css";

// They will go on utils function
// const getInitialSeatPlan = () => {
//     const seats = [];
//
//     // [[{}, {}, {}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}]]
//
//     for (let row = 0; row < 10; row++) {
//         const currentRow = [];
//         for (let col = 0; col < 5; col++) {
//             currentRow.push(createSeat(col, row));
//         }
//         seats.push(currentRow);
//     }
//     return seats;
// }

// const createSeat = (col, row) => {
//     return {
//         col,
//         row,
//         //isBooked
//         //isReserved
//         //isAvailable
//         //isNotAvailable
//     };
// };

const SeatReservation = () => {

    const [seats, setSeats] = useState([]);


    useEffect(() => {
        // const seats = getInitialSeatPlan();
        // setSeats(seats);
        const getBusSeatPlan = () => {
            axios.get('/seats/bus-map/2')
                .then((response) => {
                    setSeats(response.data.seatData);
                    // console.log(response.data.seatData);
                }).catch((error) => {
                    console.log(error.response);
            });
        }

        getBusSeatPlan();
    }, []);

    const handleMouseClicked = (row, col) => {
        const columnsLabel = ['A', 'B'];
        console.log(row, col);
    }

    return (
        <>
            <NavbarOne />

            <section className="reservation-title">
                <h1><b>Seat reservation</b></h1>
            </section>

            <section className="reservation-details">
                <div>
                    <h3 className="reserve-title">Reserve seat for 2 passengers</h3>
                </div>
                <div className="reserve-dest-container">
                    <span className="reserve-destination"><b>Toronto, ON </b></span>
                    to
                    <span className="reserve-destination"><b> London, ON</b></span><br/>
                </div>
                <div className="reserve-date-time text-center">
                    <span className="departure-detail"><b>Departure: </b> Mon Nov 8th, 2021 4:30pm</span><br/>
                    <span className="departure-detail"><b>Arrival: </b> Mon Nov 8th, 2021 7:20pm</span>
                </div>
            </section>

            <section className="seat-reservation">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 p-4 text-center">

                            <h3 className="seats-selection">Single Deck Seats</h3>

                            <div className="row">
                                <div className="bus-map m-auto">
                                    <div className="driver-seat-container">
                                        <img className="steering-wheel" src={steeringWheel} alt="drivers wheel"/> <span>Driver</span>
                                    </div><br/>
                                    {
                                        seats.map((row, rowIdx) => {
                                            return (
                                                <div key={rowIdx}>
                                                    {
                                                        row.map((node, nodeIdx) => {
                                                            const {row, col, seatSpecificPrice, isBlockedSeat, isSeat, isBookedSeat, isSociallyDistancedSeat, isReservedSeat, isGeneralSeat} = node;
                                                            return (
                                                                <Seat key={nodeIdx}
                                                                      col={col}
                                                                      row={row}
                                                                      seatSpecificPrice={seatSpecificPrice}
                                                                      notASeat={isSeat}
                                                                      sociallyDistancedSeat={isSociallyDistancedSeat}
                                                                      blockedSeat={isBlockedSeat}
                                                                      bookedSeat={isBookedSeat}
                                                                      reservedSeat={isReservedSeat}
                                                                      generalSeat={isGeneralSeat}
                                                                      handleMouseClicked={() => handleMouseClicked(row, col)}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="toilet-container">
                                        <span><i className="fas fa-toilet-paper"></i> Toilet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 p-4 mb-5">
                            <h3 className="seats-selection">Seat Selection</h3>

                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto seat-selection-div">
                                    <span>General Seating</span><br/>
                                    <h5>A12, B21, C22</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto seat-price-div">
                                    <span>Reserved seat price</span>
                                    <h3 className="reserve-seat-price">US$33.22</h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 m-auto seat-booking-div">
                                    <button className="default-button default-button-center">Go To Passenger Details</button>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="p-2 col-12 col-sm-12 col-md-12 col-lg-8 m-auto seat-booking-label">
                                    <div className="row p-1">
                                        <div className="col-2 seat-label-center">
                                            <div className="seat-label-container sd-outline">
                                                <div className="seat-top-1"></div>
                                                <div className="seat-bottom-1 socially-distanced-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-10 seat-label-text">
                                            <b>Socially Distanced Seat (for customers that want to sit alone)</b>
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-2 seat-label-center">
                                            <div className="seat-label-container b-outline">
                                                <div className="seat-top-1"></div>
                                                <div className="seat-bottom-1 blocked-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-10 seat-label-text">
                                            <b>Blocked Seat (not for sale)</b>
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-2 seat-label-center">
                                            <div className="seat-label-container r-outline">
                                                <div className="seat-top-1"></div>
                                                <div className="seat-bottom-1 reserved-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-10 seat-label-text">
                                            <b>Reserved Seats (customers can sit next to each other)</b>
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-2 seat-label-center">
                                            <div className="seat-label-container g-outline">
                                                <div className="seat-top-1"></div>
                                                <div className="seat-bottom-1 general-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-10 seat-label-text">
                                            <b>General Seating (no additional fee)</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-1 text-center seat-info-text p-3">
                                <b>All transactions will incur a $4.41 booking fee</b>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SeatReservation;