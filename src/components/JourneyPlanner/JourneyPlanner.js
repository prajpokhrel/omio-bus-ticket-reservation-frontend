import React, {useEffect, useState} from "react";
import "./JourneyPlanner.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import JourneyPlanEdit from "../JourneyPlanEdit/JourneyPlanEdit";
import OutboundJourney from "../OutboundJourney/OutboundJourney";
import {useParams} from "react-router-dom";
import axios from "../../axios-omio-frontend";

// This can be a container
const JourneyPlanner = () => {

    const [destinations, setDestinations] = useState([]);

    const params = useParams();
    const { fromSource, toDestination, travelers, departureDate } = params;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const getAvailableDestinations = () => {
            axios.get(`/destinations/find-routes/${fromSource}/${toDestination}/${travelers}/${departureDate}`)
                .then((response) => {
                    console.log("FOUND JOURNEYS", response.data);
                    setDestinations(response.data);
                }).catch((error) => {
                    console.log(error.response);
            });
        }
        getAvailableDestinations();
    }, []);

    return (
        <>
            <NavbarOne />
            <JourneyPlanEdit source={fromSource}
                             destination={toDestination}
                             passengers={travelers} />
            <OutboundJourney source={fromSource}
                             destination={toDestination}
                             passengers={travelers}
                             departureDate={departureDate}
                             routeDetails={destinations} />
        </>
    );
}

export default JourneyPlanner;