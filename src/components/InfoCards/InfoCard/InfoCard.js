import React from "react";
import "../InfoCards.css";

const InfoCard = ({key, title, description, image}) => {
    return (
        <>
        <div key={key} className="col-12 mb-3 col-sm-12 col-md-6 col-lg-4 card-container">
            <div className="card-wrapper">
                <div className="col-4 p-3">
                    <img className="img-fluid" src={image} alt={`card-image-${key}`} />
                </div>
                <div className="col-8 info-items">
                    <span className="card-title"><b>{title}</b></span>
                    <span className="card-description">{description}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default InfoCard;