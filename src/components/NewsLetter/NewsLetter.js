import React from "react";
import "./NewsLetter.css";
import "../FormElements/FormElements.css";

const NewsLetter = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center newsletter-contents">
                        <h6 className="newsletter-small-title"><b>THE WORLD OF OMIO</b></h6>
                        <h1><b>Want to receive exclusive discounts and updates straight to your inbox?</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="m-auto underline-div"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 m-auto mt-3 text-center sign-me-container">
                        <form className="row g-3">
                            <div className="col-md-7">
                                <input name="email" type="email" placeholder="Your email" className="form-control custom-inputs" />
                            </div>
                            <div className="col-md-5">
                                <button className="default-button">Sign me up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsLetter;