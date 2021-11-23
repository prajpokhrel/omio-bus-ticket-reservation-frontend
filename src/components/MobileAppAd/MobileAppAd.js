import React from "react";
import "./MobileAppAd.css";
import mobileApp from "../../assets/mobile_app.svg";
import mobileTicket from "../../assets/mobile-tickets.svg";
import supportImage from "../../assets/support.svg";
import safetyImage from "../../assets/safety.svg";
import updatesImage from "../../assets/updates.svg";

const MobileAppAd = () => {

    const mobileAppFeatures = [
        {
            feature: "Support on your journey",
            image: supportImage
        },
        {
            feature: "Tickets on your phone",
            image: mobileTicket
        },
        {
            feature: "COVID-19 travel info",
            image: safetyImage
        },
        {
            feature: "Updates and reminders",
            image: updatesImage
        }
    ]

    return (
        <section className="mobile-app-ad">
            <div className="container">
                <div className="row">
                    <div className="p-5 order-2 order-lg-1 col-12 col-sm-12 col-md-12 col-lg-6">
                        <img className="img-fluid mobile-app-image" src={mobileApp} alt="mobile-app ad"/>
                    </div>
                    <div className="pt-5 ad-contents-container order-1 order-lg-2 col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mobile-ad-title"><b>The go-to app for travelers</b></h1>
                                <span>Download the free Omio app for expertise you can count on,
                                and travel with confidence.</span>
                            </div>
                        </div>
                        <div className="row">
                            {
                                mobileAppFeatures.map((contents) => {
                                    return (
                                        <div className="col-sm-6 feature-card-box">
                                            <div className="col-3 feature-image">
                                                <img className="feature-image img-fluid" src={contents.image} alt="support-image"/>
                                            </div>
                                            <div className="col-9 feature-contents">
                                                {contents.feature}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileAppAd;