import React from "react";
import "./PassengerDetail.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import RegisterAlertCard from "./RegisterAlertCard/RegisterAlertCard";
import OutboundDetailsCard from "./OutboundDetailsCard/OutboundDetailsCard";
import TicketCostDetailsCard from "./TicketCostDetailsCard/TicketCostDetailsCard";
import FareTermsCard from "./FareTermsCard/FareTermsCard";
import MainPassengerForm from "./PassengerDetailsForm/MainPassengerForm";
import ExtraPassengerForm from "./PassengerDetailsForm/ExtraPassengerForm";

const PassengerDetail = () => {
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
                            <MainPassengerForm />

                        {/*  Extra Passenger form */}
                            <ExtraPassengerForm />

                        </div>

                        <div className="p-2 col-12 col-sm-12 col-md-12 col-lg-5">

                            <OutboundDetailsCard />

                            <TicketCostDetailsCard />

                            <FareTermsCard />

                        </div>
                    </div>
                    <div className="row mb-3 p-2">
                        <div className="col">
                            <button className="default-button">Proceed to payment</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PassengerDetail;