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
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/AuthForms/ChangePassword";
import ProfileUpdate from "./components/Profile/ProfileUpdate";
import RequireAuth from "./hooks/RequireAuth";
import BookingInvoice from "./components/BookingInvoice/BookingInvoice";
import ResetConfirmation from "./components/AuthForms/ResetConfirmation";
import ResetPassword from "./components/AuthForms/ResetPassword";

function App() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
            <Route path="/users/reset-confirmation" element={<ResetConfirmation />} />
            <Route path="/users/reset-password/:token/:userId" element={<ResetPassword />} />
            <Route path="/journey-planner/:fromSource/:toDestination/:travelers/:departureDate" element={<JourneyPlanner />} />
            <Route path="/seat-reservation/:journeyId/:travelers"
                   element={
                       <RequireAuth>
                           <SeatReservation />
                       </RequireAuth>
                   }
            />
            <Route path="/passenger-details/:journeyId/:travelers"
                   element={
                       <RequireAuth>
                           <PassengerDetail />
                       </RequireAuth>
                   }
            />
            <Route path="/booking-retrieve" element={<BookingRetrieve />} />
            <Route path="/booking-invoice/:customerId/:reservationId" element={<BookingInvoice />} />
            <Route path="/profile"
                   element={
                       <RequireAuth>
                           <Profile />
                       </RequireAuth>
                   }
            />
            <Route path="/profile/change-password"
                   element={
                        <RequireAuth>
                            <ChangePassword />
                        </RequireAuth>
                   }
            />
            <Route path="/profile/update"
                   element={
                        <RequireAuth>
                            <ProfileUpdate />
                        </RequireAuth>
                   }
            />
        </Routes>
    );
}

export default App;
