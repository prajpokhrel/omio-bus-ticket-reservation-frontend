import React from "react";
import "./JourneyPlanEdit.css";
import {useNavigate} from "react-router-dom";

// WHEN CLICKING EDIT, SHOW MODEL TO MAKE CHANGES TO THE JOURNEY
const JourneyPlanEdit = ({source, destination, passengers}) => {

    const navigate = useNavigate();

    const handleEditSearchBtnClicked = () => {
        navigate('/');
    }

    return (
        <section className="journey-plan-edit">
            <div className="container">
                <div className="row p-2">
                    <div className="col-12 plan-edit-container">
                        <div className="col-12 m-auto trip-summary">
                            <div>
                                <h4 className="current-journey-details">{source} to {destination},&nbsp;</h4>
                                <h4 className="current-journey-details">One way, {passengers} traveler(s)</h4>
                                <button onClick={handleEditSearchBtnClicked} className="edit-search-btn">Edit Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JourneyPlanEdit;