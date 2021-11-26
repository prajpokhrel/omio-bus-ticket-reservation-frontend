import React, {useEffect, useState} from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import JourneyPlanner from "./components/JourneyPlanner/JourneyPlanner";
import SeatReservation from "./components/SeatReservation/SeatReservation";
import PassengerDetail from "./components/PassengerDetail/PassengerDetail";
import BookingRetrieve from "./components/BookingRetrieve/BookingRetrieve";
import CommonModal from "./components/Modal/CommonModal";
import RegisterContainer from "./components/AuthForms/RegisterContainer";
import ForgotPasswordContainer from "./components/AuthForms/ForgotPasswordContainer";
import LoginContainer from "./components/AuthForms/LoginContainer";

function App() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
            <Route path="/journey-planner/:fromSource/:toDestination/:travelers/:departureDate" element={<JourneyPlanner />} />
            <Route path="/seat-reservation" element={<SeatReservation />} />
            <Route path="/passenger-details" element={<PassengerDetail />} />
            <Route path="/booking-retrieve" element={<BookingRetrieve />} />
        </Routes>
    );
}

export default App;
