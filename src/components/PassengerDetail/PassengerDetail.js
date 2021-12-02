import React, {useEffect, useState} from "react";
import "./PassengerDetail.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import RegisterAlertCard from "./RegisterAlertCard/RegisterAlertCard";
import OutboundDetailsCard from "./OutboundDetailsCard/OutboundDetailsCard";
import TicketCostDetailsCard from "./TicketCostDetailsCard/TicketCostDetailsCard";
import FareTermsCard from "./FareTermsCard/FareTermsCard";
import MainPassengerForm from "./PassengerDetailsForm/MainPassengerForm";
import ExtraPassengerForm from "./PassengerDetailsForm/ExtraPassengerForm";
import axios from "../../axios-omio-frontend";
import {useParams, useNavigate} from "react-router-dom";
import moment from "moment";
import useAuth from "../../hooks/useAuth";

const PassengerDetail = () => {

    const [journeyDetails, setJourneyDetails] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [formData, setFormData] = useState({});
    let extraPassengerForm = [];
    const params = useParams();
    const navigate = useNavigate();
    const {journeyId, travelers} = params;
    const { authed, currentUser } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getSelectedJourneyDetails = () => {
            axios.get(`/destinations/journey-details/with-bus/${journeyId}`)
                .then((response) => {
                    setJourneyDetails(response.data);
                    console.log(response.data);
                }).catch((error) => {
                console.log(error.response);
            });
        }

        getSelectedJourneyDetails();
        configureSelectedSeats();
    }, []);

    const configureSelectedSeats = () => {
        setSelectedSeats(JSON.parse(localStorage.getItem('selectedSeats')));
    }

    const formatDate = (date, time) => {
        return moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format('LLLL');
    }

    const handlePassengerDetailsSubmitBtn = () => {
        const arrangedFormData = [];
        for (let i = 0; i < travelers; i++) {
            arrangedFormData.push({
                email: formData[`email${i}`] || '',
                firstName: formData[`firstName${i}`],
                lastName: formData[`lastName${i}`],
                phoneNumber: formData[`phoneNumber${i}`],
                idType: formData[`idType${i}`],
                idNumber: formData[`idNumber${i}`],
                country: formData[`country${i}`] || ''
            });
        }
        try {
            axios.post('/reservations/book-seat', {passengers: arrangedFormData, mainAccount: currentUser, selectedSeats, journeyDetails: journeyDetails.id})
                .then((response) => {
                    console.log(response.data);
                    navigate('/profile');
                }).catch((error) => {
                    console.log(error.response);
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    const inputChangeHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    for (let i = 0; i < travelers - 1; i++) {
        extraPassengerForm.push(<ExtraPassengerForm onInputChange={inputChangeHandler} index={i} />);
    }

    return (
        <>
            <NavbarOne />

            <section className='passenger-detail-title'>
                <h1><b>Passenger(s) details</b></h1>
            </section>

            <section className="passenger-details">
                <div className="container">
                    <div className="row p-2">
                        <div className="p-2 col-12 col-sm-12 col-md-12 col-lg-7">

                            <RegisterAlertCard />

                        {/*  Main Passenger form  */}
                            <MainPassengerForm onInputChange={inputChangeHandler}/>

                        {/*  Extra Passenger form */}
                            {extraPassengerForm}

                        </div>

                        <div className="p-2 col-12 col-sm-12 col-md-12 col-lg-5">

                            <OutboundDetailsCard fromSource={journeyDetails.fromSource}
                                                 toDestination={journeyDetails.toDestination}
                                                 departureDate={journeyDetails.departureDate}
                                                 arrivalDate={journeyDetails.arrivalDate}
                                                 departureTime={journeyDetails.departureTime}
                                                 estimatedArrivalTime={journeyDetails.estimatedArrivalTime}
                                                 formatDate={formatDate}
                                                 // busImage={} later
                            />

                            <TicketCostDetailsCard passengers={travelers} journeyDetails={journeyDetails} selectedSeats={selectedSeats}/>

                            <FareTermsCard />

                        </div>
                    </div>
                    <div className="row mb-3 p-2">
                        <div className="col">
                            <button onClick={handlePassengerDetailsSubmitBtn} className="default-button">Proceed to payment</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PassengerDetail;