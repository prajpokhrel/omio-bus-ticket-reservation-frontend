import React from "react";
import "./InfoCards.css";
import updateImage from "../../assets/travel_updates.svg";
import mobileImage from  "../../assets/mobile.svg";
import inspirationImage from "../../assets/inspirations.svg";
import InfoCard from "./InfoCard/InfoCard";

const InfoCards = () => {

    const infoCardContents = [
        {
            title: "COVID-19 travel updates",
            description: "Find out what testing and quarantine rules apply for your journey",
            image: updateImage
        },
        {
            title: "Download our app",
            description: "Bus, train, flight and ferry tickets in one place so you can get on with exploring",
            image: mobileImage
        },
        {
            title: "Inspiration curated for you",
            description: "Unique travel stories told through a local lens",
            image: inspirationImage
        }
    ]

    return (
        <section className="info-contents">
            <div className="container overflow-hidden">
                <div className="row gx-4 align-items-center">
                    {
                        infoCardContents.map((content, index) => {
                            return (
                                <InfoCard title={content.title} key={index}
                                          description={content.description}
                                          image={content.image}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default InfoCards;