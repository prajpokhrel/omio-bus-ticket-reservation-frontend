import React from "react";
import "./JourneyPlanEdit.css";

// WHEN CLICKING EDIT, SHOW MODEL TO MAKE CHANGES TO THE JOURNEY
const JourneyPlanEdit = () => {
    return (
        <section className="journey-plan-edit">
            <div className="container">
                <div className="row p-2">
                    <div className="col-12 plan-edit-container">
                        <div className="col-12 m-auto trip-summary">
                            <div>
                                <h4 className="current-journey-details">Toronto, ON to Kingston, ON,&nbsp;</h4>
                                <h4 className="current-journey-details">Round trip, 2 travelers</h4>
                                <button className="edit-search-btn">Edit Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JourneyPlanEdit;