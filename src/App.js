import React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import SeatReservation from "./components/SeatReservation/SeatReservation";
import PassengerDetail from "./components/PassengerDetail/PassengerDetail";
import BookingRetrieve from "./components/BookingRetrieve/BookingRetrieve";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/journey-planner" element={<JourneyPlanner />} />
            <Route path="/seat-reservation" element={<SeatReservation />} />
            <Route path="/passenger-details" element={<PassengerDetail />} />
            <Route path="/booking-retrieve" element={<BookingRetrieve />} />
        </Routes>
        // <LandingPage />
        // <JourneyPlanner />
        // <SeatReservation />
        // <PassengerDetail />
        // <BookingRetrieve />
    );
}

export default App;
