import React from "react";
import "./PopularConnections.css";

const PopularConnection = () => {

    const popularConnections = {
        firstList: [
            'Edinburgh to Glasgow train',
            'Verona to Venice train',
            'Prague to Vienna train',
            'Seville to Tarifa bus',
            'Geneva to Chamonix bus',
            'Berlin to Prague flights'
        ],
        secondList: [
            'Edinburgh to Glasgow train',
            'Verona to Venice train',
            'Prague to Vienna train',
            'Seville to Tarifa bus',
            'Geneva to Chamonix bus',
            'Berlin to Prague flights'
        ],
        thirdList: [
            'Edinburgh to Glasgow train',
            'Verona to Venice train',
            'Prague to Vienna train',
            'Seville to Tarifa bus',
            'Geneva to Chamonix bus',
            'Berlin to Prague flights'
        ],
        forthList: [
            'Edinburgh to Glasgow train',
            'Verona to Venice train',
            'Prague to Vienna train',
            'Seville to Tarifa bus',
            'Geneva to Chamonix bus',
            'Berlin to Prague flights'
        ]
    };

    return (
        <section className="popular-connections-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 popular-connections-container">
                        <h2><b>Popular bus, train and flight connections</b></h2>

                        <div className="row mt-3">
                            {
                                Object.keys(popularConnections).map((keys) => {
                                    return (
                                        <div className="mb-5 col-12 col-sm-6 col-md-6 col-lg-3">
                                            {
                                                popularConnections[keys].map((routes) => {
                                                    return <li className="route-lists"><a href="#">{routes}</a></li>
                                                })
                                            }
                                        </div>
                                    )})
                            }

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularConnection;