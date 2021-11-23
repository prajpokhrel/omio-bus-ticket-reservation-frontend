import React from "react";
import "./JourneyPlanner.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import JourneyPlanEdit from "../JourneyPlanEdit/JourneyPlanEdit";
import OutboundJourney from "../OutboundJourney/OutboundJourney";

// This can be a container
const JourneyPlanner = () => {
    return (
        <>
            <NavbarOne />
            <JourneyPlanEdit />
            <OutboundJourney />
        </>
    );
}

export default JourneyPlanner;