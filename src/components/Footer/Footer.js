import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/logo-dark.svg";

const Footer = () => {

    const socialMedias = [
        {name: "facebook", icon: <i className="fab fa-facebook-f"></i>},
        {name: "Instagram", icon: <i className="fab fa-instagram"></i>},
        {name: "Twitter", icon: <i className="fab fa-twitter"></i>},
        {name: "Github", icon: <i className="fab fa-github"></i>},
        {name: "LinkedIn", icon: <i className="fab fa-linkedin"></i>},
    ];

    return (
        <section className="footer-section">
            <div className="container">
                <div className="row footer-contents-top">
                    <div className="mb-5 col-6 col-sm-6 col-md-6 col-lg-3">
                        <h6><b>On the go</b></h6>
                        <li><a href="#">Your bookings</a></li>
                        <li><a href="#">Create an account</a></li>
                        <li><a href="#">Get the App</a></li>
                        <li><a href="#">Magazine</a></li>
                        <li><a href="#">Student discount</a></li>
                        <li><a href="#">Mobile Tickets</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </div>
                    <div className="mb-5 col-6 col-sm-6 col-md-6 col-lg-3">
                        <h6><b>In the office</b></h6>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press center</a></li>
                        <li><a href="#">Become a partner</a></li>
                    </div>
                    <div className="mb-5 col-12 col-sm-6 col-md-6 col-lg-3">
                        <h6><b>Need our help?</b></h6>
                        <button className="help-center-btn">Help Center</button>
                    </div>
                    <div className="mb-5 col-12 col-sm-6 col-md-6 col-lg-3">
                        <h6><b>Follow us</b></h6>
                        <div className="social-icons">
                            {socialMedias.map((icons, index) => {
                                return <div key={index} className="icons-container">{icons.icon}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="row footer-contents-bottom">
                    <div className="col-12 col-sm-2 mb-3">
                        <img className="img-fluid footer-logo-image" src={footerLogo} alt="footer logo" />
                    </div>
                    <div className="col-12 col-sm-10 footer-items">
                        <li><a href="#">Imprint</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center footer-copyright">
                        Designed and Built with ♥ by Prajwal Pokhrel
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;