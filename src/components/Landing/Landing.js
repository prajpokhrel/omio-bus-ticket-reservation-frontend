import React, {useEffect, useState} from "react";
import "./Landing.css";
import "../FormElements/FormElements.css";
import NavbarTransparent from "../NavbarTransparent/NavbarTransparent";
import CommonModal from "../Modal/CommonModal";
import CovidTravelUpdate from "../CovidTravelUpdate/CovidTravelUpdate";
import InfoCards from "../InfoCards/InfoCards";
import MobileAppAd from "../MobileAppAd/MobileAppAd";
import PopularConnections from "../PopularConnections/PopularConnections";
import Footer from "../Footer/Footer";
import axios from "../../axios-omio-frontend";
import Select from "react-select";

const Landing = () => {

    const [passengerCount, setPassengerCount] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [sources, setSources] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [sourceSelectedOption, setSourceSelectedOption] = useState(null);
    const [destinationSelectedOption, setDestinationSelectedOption] = useState(null);

    const colourStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: '#F1F2F6',
            height: 48,
            boxShadow: 'none',
            border: 'none',
        })
    }

    useEffect(() => {
        getAllSources();
        getAvailableDestinations();
    }, [sourceSelectedOption, destinationSelectedOption]);

    const arrangeSource = (sources) => {
        return sources.reduce((arranged, sources) => {
            arranged.push({value: sources.source, label: sources.source});
            return arranged;
        }, []);
        // setSources(arrangedSource);
    }

    const arrangeDestination = (destinations) => {
        return destinations.reduce((arranged, destinations) => {
            arranged.push({value: destinations.destination, label: destinations.destination});
            return arranged;
        }, []);
        // setDestinations(arrangedDestination);
    }

    const getAllSources = () => {
        axios.get('/places/source').then((response) => {
            setSources(arrangeSource(response.data));
        }).catch((error) => {
            console.log(error.response);
        });
    }

    const getAvailableDestinations = () => {
        setDestinationSelectedOption(null);
        axios.get(`/places/source/${sourceSelectedOption}`).then((response) => {
            setDestinations(arrangeDestination(response.data));
        }).catch((error) => {
            console.log(error.response);
        })
    }

    const handleSourceSelectChange = (event) => {
        setSourceSelectedOption(event.value);
    }

    const handleDestinationSelectChange = (event) => {
        setDestinationSelectedOption(event.value);
    }

    const handleIncrement = (event) => {
        event.preventDefault();
        setPassengerCount(passengerCount + 1)
    };

    const handleDecrement = (event) => {
        event.preventDefault();
        setPassengerCount(passengerCount - 1);
    }

    const handleModalToggle = () => {
        setModalShow(!modalShow);
    }

    return (
        <>
            {/*<button onClick={handleModalToggle}>Show Modal</button>*/}
            <CommonModal showModal={modalShow} toggleModal={handleModalToggle}/>

            <section className="landing-page">
                <div className="banner-container">
                    <NavbarTransparent loginRegisterModalHandler={handleModalToggle}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 landing-container">
                                <h1 className="landing-header">Travel that moves you</h1>
                                <h3 className="landing-sub-header"><b>Book bus, train and flight tickets</b></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="booking-search mt-2 mb-2">
                <div className="container">
                    <div className="row p-3">
                        <div className="col-12 col-sm-12 col-md-12 m-auto search-destination-container">
                            <form className="row g-3">
                                {/*<div className="col-lg-4">*/}
                                {/*    <label htmlFor="from" className="form-label custom-labels">From</label>*/}
                                {/*    <input name="fromPlace" type="text" className="form-control custom-inputs" id="from" placeholder="From: City, Station, Or Airport"/>*/}
                                {/*</div>*/}
                                {/* Style later if you need */}
                                <div className="col-lg-4">
                                    <label htmlFor="from" className="form-label custom-labels">From</label>
                                    <Select placeholder="From: City, Station, Or Airport" styles={colourStyles} options={sources} onChange={handleSourceSelectChange}/>
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="to" className="form-label custom-labels">To</label>
                                    <Select placeholder="From: City, Station, Or Airport" styles={colourStyles} options={destinations} onChange={handleDestinationSelectChange}/>
                                    {/*<input name="toDestination" type="text" className="form-control custom-inputs" id="to" placeholder="To: City, Station, Or Airport" />*/}
                                </div>
                                <div className="col-lg-4">
                                    <label htmlFor="departureDate" className="form-label custom-labels">Departure Date</label>
                                    <input name="departureDate" type="date" className="form-control custom-inputs" id="departureDate" />
                                </div>
                                <div className="col-lg-8 passenger-count">
                                    <button className="increment-decrement-btn" onClick={handleDecrement}
                                            disabled={passengerCount === 1}>
                                        <i className="bi bi-dash-circle"></i>
                                    </button>
                                    <span className="passenger-counter-text">{passengerCount} traveler(s)</span>
                                    <button className="increment-decrement-btn" onClick={handleIncrement}
                                            disabled={passengerCount === 9}>
                                        <i className="bi bi-plus-circle"></i>
                                    </button>
                                    {/*<span className="passenger-counter-label">{passengerCount} passenger(s)</span>*/}
                                </div>
                                <div className="col-lg-4 default-btn-center">
                                    <button className="default-button">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

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

export default Landing;