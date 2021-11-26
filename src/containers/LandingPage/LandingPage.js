import React from "react";
import Landing from "../../components/Landing/Landing";
import CovidTravelUpdate from "../../components/CovidTravelUpdate/CovidTravelUpdate";
import InfoCards from "../../components/InfoCards/InfoCards";
import MobileAppAd from "../../components/MobileAppAd/MobileAppAd";
import PopularConnections from "../../components/PopularConnections/PopularConnections";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
    return (
        <>
            <Landing />
            {/*  Covid Travel Update  */}
            <CovidTravelUpdate />
            {/*  Info Cards  */}
            <InfoCards />
            {/* Mobile Application Ads   */}
            <MobileAppAd />
            {/* Popular Connections   */}
            <PopularConnections />
            {/* Footer   */}
            <Footer />
        </>
    );
}

export default LandingPage;